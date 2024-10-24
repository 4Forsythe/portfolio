export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex flex-1 flex-col">{children}</div>
    </main>
  )
}
