'use client'

import React from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

import { ROUTES } from '@/constants'
import { Button, Toggle, ThemeToggleButton } from '@/components'

import { Route } from '@/config/routes.config'

interface IHeader {
  className?: string
}

export const Header: React.FC<IHeader> = ({ className }) => {
  const [isActive, setIsActive] = React.useState(false)

  const ITEMS = ROUTES.filter((item) => item.href !== Route.BLOG)

  React.useEffect(() => {
    if (isActive) {
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isActive])

  return (
    <header
      className={cn(
        'w-full xl:px-0 lg:px-4 md:px-6 px-5 md:py-8 py-4 z-40 bg-background flex items-center justify-between md:relative fixed',
        className
      )}
    >
      <Link href={Route.BLOG} className="font-syne text-2xl font-black tracking-tighter uppercase">
        Forsythe
      </Link>

      <nav className="gap-2.5 flex items-center">
        <div className="gap-2 md:flex items-center hidden">
          {ITEMS.map((item, index) => (
            <Link key={index} href={item.href}>
              <Button variant="ghost" size="sm">
                {item.name}
              </Button>
            </Link>
          ))}
        </div>

        <ThemeToggleButton className="w-9 h-9" variant="ghost" />

        <motion.div
          className="md:hidden block"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Toggle size="sm" onClick={() => setIsActive(!isActive)}>
            {isActive ? <X size={24} /> : <Menu size={24} />}
          </Toggle>
        </motion.div>
      </nav>

      <AnimatePresence mode="wait">
        {isActive && (
          <motion.div
            className="w-full h-screen top-[100px] left-0 z-40 bg-background md:hidden flex items-center absolute"
            initial={{ x: 1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 1000 }}
            transition={{ duration: 0.3, ease: [0.75, 0, 0.25, 1] }}
          >
            <nav className="w-full mb-20 px-5 pb-10 gap-5 flex flex-col items-center">
              {ITEMS.map((item, index) => (
                <Link key={index} href={item.href}>
                  <Button className="font-raleway text-xl rounded-full" variant="ghost" size="lg">
                    {item.name}
                  </Button>
                </Link>
              ))}

              <div className="w-[5%] h-[1px] my-1.5 bg-foreground/80" />

              <Link href={Route.FEEDBACK}>
                <Button className="font-raleway text-xl rounded-full" variant="ghost" size="lg">
                  Связаться со мной
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
