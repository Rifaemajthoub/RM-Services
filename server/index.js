import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import rateLimit from 'express-rate-limit'
import { z } from 'zod'

import { createDb } from './db.js'
import { createMailer } from './mail.js'
import { contactSchema } from './validation.js'

const PORT = Number(process.env.PORT || 5174)
const DB_PATH = process.env.DB_PATH || './server/data.sqlite'

const app = express()

// Necessary for Vercel to get the correct user IP for rate limiting
app.set('trust proxy', true)

app.use(express.json({ limit: '32kb' }))

const allowedOrigin = process.env.CORS_ORIGIN || ''
app.use(
  cors({
    origin: allowedOrigin ? allowedOrigin.split(',').map((s) => s.trim()) : true,
    credentials: false,
  }),
)

// Health check route to verify deployment
app.get('/api/health', (_req, res) => {
  res.json({ ok: true, environment: process.env.NODE_ENV || 'development' })
})

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
})

const db = createDb(DB_PATH)
const mailer = createMailer(process.env)

app.post('/api/contact', contactLimiter, async (req, res) => {
  try {
    const parsed = contactSchema.parse(req.body)

    const createdAt = new Date().toISOString()
    const ip = req.ip
    const userAgent = req.get('user-agent') || ''

    const id = db.insertContactMessage({
      created_at: createdAt,
      ip,
      user_agent: userAgent,
      name: parsed.name,
      email: parsed.email,
      phone: parsed.phone || null,
      service: parsed.service || null,
      budget: parsed.budget || null,
      message: parsed.message,
    })

    if (mailer.enabled) {
      await mailer.sendContactNotification({
        id,
        createdAt,
        name: parsed.name,
        email: parsed.email,
        phone: parsed.phone,
        service: parsed.service,
        budget: parsed.budget,
        message: parsed.message,
      })
    }

    res.json({ ok: true, id })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({
        ok: false,
        error: 'VALIDATION_ERROR',
        issues: err.issues.map((i) => ({ path: i.path.join('.'), message: i.message })),
      })
    }
    console.error(err)
    res.status(500).json({ ok: false, error: 'SERVER_ERROR' })
  }
})

// Only start the server listener if we are NOT on Vercel
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`[rm-services server] listening on http://localhost:${PORT}`)
  })
}

// Export for Vercel Serverless Functions
export default app;