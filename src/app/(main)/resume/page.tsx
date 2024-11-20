import { FAQ, Resume } from '@/components'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Резюме',
}

export default function ResumePage() {
  return (
    <>
      <Resume />
      <FAQ />
    </>
  )
}
