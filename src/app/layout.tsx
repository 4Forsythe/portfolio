import { Inter, Bebas_Neue } from 'next/font/google'

import { Providers } from './providers'
import { PageAnimation } from '@/components'

import { cn } from '@/lib/utils'

import './globals.css'

const inter = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-inter',
})

const bebasNeue = Bebas_Neue({
  weight: ['400'],
  style: ['normal'],
  variable: '--font-bebas-neue',
})

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={cn('antialiased', inter.variable, bebasNeue.variable)}>
        <Providers>
          <PageAnimation>{children}</PageAnimation>
        </Providers>
      </body>
    </html>
  )
}
