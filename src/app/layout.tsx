import { Inter, Raleway, Syne, JetBrains_Mono } from 'next/font/google'

import { Providers } from './providers'
import { PageAnimation } from '@/components'

import { cn } from '@/lib/utils'
import { SITE_NAME, SITE_DESCRIPTION } from '@/constants'

import './globals.css'

import type { Metadata } from 'next'

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

const syne = Syne({
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-syne',
})

const jetBrainsMono = JetBrains_Mono({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin', 'cyrillic'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL as string),
  title: {
    default: SITE_NAME,
    template: `${SITE_NAME} — %s`,
  },
  description: SITE_DESCRIPTION,
}

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className="scroll-smooth scrollbar" lang="ru" suppressHydrationWarning>
      <body
        className={cn(
          'antialiased',
          inter.variable,
          raleway.variable,
          syne.variable,
          jetBrainsMono.variable
        )}
      >
        <Providers>
          <PageAnimation>{children}</PageAnimation>
        </Providers>
      </body>
    </html>
  )
}
