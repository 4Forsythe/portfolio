import { z } from 'zod'
import { contactSchema } from '@/schemas'

export type ContactFormType = z.infer<typeof contactSchema>
