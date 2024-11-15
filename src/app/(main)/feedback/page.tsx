import { ContactForm } from '@/components'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Связаться со мной',
}

export default function FeedbackPage() {
  return <ContactForm />
}
