import nodemailer from 'nodemailer'

export function createMailer(env) {
  const enabled = String(env.SMTP_ENABLED || '').toLowerCase() === 'true'

  if (!enabled) {
    return {
      enabled: false,
      async sendContactNotification() {
        return { skipped: true }
      },
    }
  }

  const transporter = nodemailer.createTransport({
    host: env.SMTP_HOST,
    port: Number(env.SMTP_PORT || 587),
    secure: String(env.SMTP_SECURE || '').toLowerCase() === 'true',
    auth: env.SMTP_USER
      ? {
          user: env.SMTP_USER,
          pass: env.SMTP_PASS,
        }
      : undefined,
  })

  const from = env.SMTP_FROM
  const to = env.NOTIFY_EMAIL_TO

  if (!from || !to) {
    throw new Error('SMTP is enabled but SMTP_FROM or NOTIFY_EMAIL_TO is missing.')
  }

  return {
    enabled: true,
    async sendContactNotification({ id, createdAt, name, email, phone, service, budget, message }) {
      const subject = `[RM Services] New contact: ${name}`

      const text = [
        `New contact submission received`,
        ``,
        `ID: ${id}`,
        `Time: ${createdAt}`,
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || '-'}`,
        `Service: ${service || '-'}`,
        `Budget: ${budget || '-'}`,
        ``,
        `Message:`,
        message,
      ].join('\n')

      return transporter.sendMail({
        from,
        to,
        subject,
        text,
      })
    },
  }
}

