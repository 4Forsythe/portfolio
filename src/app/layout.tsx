import { Noto_Sans, Noto_Sans_Mono } from 'next/font/google'

import './main.css'

const notoSans = Noto_Sans({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-noto-sans',
})

const notoSansMono = Noto_Sans_Mono({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-noto-sans-mono',
  weight: ['400', '500', '600', '700', '800', '900'],
})

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${notoSans.variable} ${notoSansMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
