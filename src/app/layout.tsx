import { Inter, Raleway } from 'next/font/google'

import { Providers } from './providers'
import { PageAnimation } from '@/components'

import { cn } from '@/lib/utils'

import './globals.css'

const inter = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
})

const raleway = Raleway({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin', 'cyrillic'],
  variable: '--font-raleway',
})

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={cn('antialiased', inter.variable, raleway.variable)}>
        <Providers>
          <PageAnimation>{children}</PageAnimation>
        </Providers>
      </body>
    </html>
  )
}
