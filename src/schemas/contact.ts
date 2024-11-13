import { z } from 'zod'

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Введите ваше имя' })
    .max(50, { message: 'Слишком длинное имя' }),
  email: z.string().email({ message: 'Введите контактный email' }),
  text: z
    .string()
    .min(10, { message: 'Введите что-нибудь для отправки' })
    .max(2500, { message: 'Слишком длинный текст' }),
})
