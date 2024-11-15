'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

import { Button } from '@/components'
import { ROUTES } from '@/constants'

interface INavbarMenu {
  className?: string
}

export const NavbarMenu: React.FC<INavbarMenu> = ({ className }) => {
  const pathname = usePathname()

  return (
    <div
      className={cn(
        'sm:gap-5 gap-2.5 flex sm:flex-col sm:items-end items-center justify-center',
        className
      )}
    >
      {ROUTES.map((item, index) => (
        <motion.div key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link className="gap-3.5 flex items-center" href={item.href}>
            {pathname === item.href && (
              <span className="text-sm font-light sm:block hidden">{item.name} —</span>
            )}
            <Button className="sm:w-10 w-8 sm:h-10 h-8" variant="secondary" size="icon">
              <item.icon
                className={cn(pathname === item.href && 'sm:w-6 w-4 sm:h-6 h-4 text-primary')}
              />
            </Button>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
