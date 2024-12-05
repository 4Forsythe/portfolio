'use client'

import React from 'react'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

import { NavbarMenu, ThemeToggleButton, Toggle } from '@/components'

import { Route } from '@/config/routes.config'

interface INavbar {
  className?: string
}

export const Navbar: React.FC<INavbar> = ({ className }) => {
  const [isActive, setIsActive] = React.useState(false)

  const pathname = usePathname()

  return (
    <nav
      className={cn(
        'sm:w-auto w-full sm:h-full sm:right-0 sm:top-auto sm:left-auto top-0 left-0 sm:py-14 z-40 flex flex-col justify-center fixed sm:backdrop-blur-none backdrop-blur-sm',
        className
      )}
    >
      <div className="sm:p-4 p-5 sm:gap-5 gap-2.5 flex sm:flex-col-reverse sm:items-end items-center sm:justify-center justify-end relative">
        {pathname !== Route.HOME && (
          <motion.div
            className="sm:mr-0 mr-auto"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ThemeToggleButton
              className="sm:bg-secondary bg-background sm:rounded-none rounded-3xl"
              variant="secondary"
            />
          </motion.div>
        )}

        <AnimatePresence mode="wait">
          {isActive && (
            <motion.div
              className="z-40 sm:hidden block"
              initial={{ x: 1000, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 1000 }}
              transition={{ duration: 0.3, ease: [0.75, 0, 0.25, 1] }}
            >
              <NavbarMenu />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="z-50 sm:hidden block"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Toggle className="rounded-3xl" onClick={() => setIsActive(!isActive)}>
            {isActive ? <X size={24} /> : <Menu size={24} />}
          </Toggle>
        </motion.div>

        <motion.div
          className="sm:block hidden"
          initial={{ x: 1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <NavbarMenu />
        </motion.div>
      </div>
    </nav>
  )
}
