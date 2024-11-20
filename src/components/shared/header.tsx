import React from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'

import { ROUTES } from '@/constants'
import { Button, ThemeToggleButton } from '@/components'

import { Route } from '@/config/routes.config'

interface IHeader {
  className?: string
}

export const Header: React.FC<IHeader> = ({ className }) => {
  return (
    <header className={cn('w-full py-8 flex items-center justify-between', className)}>
      <Link href={Route.BLOG} className="font-syne text-2xl font-black tracking-tighter uppercase">
        Forsythe
      </Link>

      <nav className="gap-2.5 flex items-center">
        {ROUTES.map((item, index) => (
          <Link key={index} href={item.href}>
            <Button variant="ghost" size="sm">
              {item.name}
            </Button>
          </Link>
        ))}

        <ThemeToggleButton className="w-9 h-9" variant="ghost" />
      </nav>
    </header>
  )
}
