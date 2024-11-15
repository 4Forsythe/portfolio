import { Contacts } from '@/components'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Контакты',
}

export default function ContactsPage() {
  return <Contacts />
}
