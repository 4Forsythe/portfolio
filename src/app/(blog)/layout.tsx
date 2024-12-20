import { Container, Header } from '@/components'

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="min-h-screen flex flex-col">
      <Container className="max-w-[970px] w-full flex flex-1 flex-col overflow-hidden">
        <Header />
        <div className="md:mt-0 mt-[68px]">{children}</div>
      </Container>
    </main>
  )
}
