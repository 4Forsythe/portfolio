import { Navbar } from '@/components'

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="min-h-screen flex">
      <Navbar />
      <div className="flex flex-1 flex-col">{children}</div>
    </main>
  )
}
