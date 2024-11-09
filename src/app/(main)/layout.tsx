export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="min-h-screen flex">
      <div className="flex flex-1 flex-col">{children}</div>
    </main>
  )
}
