import { FAQ, Resume } from '@/components'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Резюме',
}

export default function ResumePage() {
  return (
    <div className="flex flex-col">
      <Resume />
      <FAQ />
    </div>
  )
}
