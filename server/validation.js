import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().max(50).optional().or(z.literal('')),
  service: z.string().trim().max(40).optional().or(z.literal('')),
  budget: z.string().trim().max(80).optional().or(z.literal('')),
  message: z.string().trim().min(10).max(5000),
})

