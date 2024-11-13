'use server'

import * as fs from 'fs'
import * as handlebars from 'handlebars'

import { transporter } from '@/config/mailer.config'

const SMTP_EMAIL = process.env.SMTP_EMAIL

type Replacements = Record<string, string | undefined>

interface ISendMailOptions {
  from: string
  to: string
  subject: string
  text?: string
  html?: {
    template: string
    replacements: Replacements
  }
}

export async function sendMail(options: ISendMailOptions) {
  try {
    let html = undefined

    if (options.html) {
      const source = fs.readFileSync(options.html.template, 'utf-8').toString()

      if (source) {
        const template = handlebars.compile(source)
        html = template(options.html.replacements)
      }
    }

    return transporter.sendMail({
      from: `${options.from} <${SMTP_EMAIL}>`,
      to: options.to,
      subject: options.subject,
      text: options.text,
      html: html,
    })
  } catch (error) {
    console.error('sendMail: Failed to send mail', error)
  }
}
