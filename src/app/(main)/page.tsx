import { Hero } from '@/components'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Front-end React разработчик',
}

export default function HomePage() {
  return <Hero />
}
