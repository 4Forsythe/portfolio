'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

import { Button, ThemeToggleButton } from '@/components'
import { ROUTES } from '@/constants'

import { Route } from '@/config/routes.config'

interface INavbar {
  className?: string
}

export const Navbar: React.FC<INavbar> = ({ className }) => {
  const pathname = usePathname()

  return (
    <motion.aside
      className={cn('top-0 right-0 h-full py-20 flex flex-col justify-center fixed', className)}
      initial={{ x: 1000, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <div className="p-4 gap-5 flex flex-col items-end">
        {pathname !== Route.HOME && (
          <>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <ThemeToggleButton variant="secondary" />
            </motion.div>

            <div className="w-[40px] h-0.5 bg-border" />
          </>
        )}

        {ROUTES.map((item, index) => (
          <motion.div key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link className="gap-3.5 flex items-center" href={item.href}>
              {pathname === item.href && <span className="text-sm font-light">{item.name} —</span>}
              <Button variant="secondary" size="icon">
                <item.icon className={cn(pathname === item.href && 'text-primary')} size={24} />
              </Button>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.aside>
  )
}
