'use client'

import React from 'react'
import { usePathname } from 'next/navigation'

import { motion, AnimatePresence } from 'framer-motion'

export const PageAnimation: React.FC<React.PropsWithChildren> = ({ children }) => {
  const pathname = usePathname()

  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname} className="w-screen h-screen inset-0 z-50 pointer-events-none fixed">
          <motion.div
            className="w-full h-full bg-foreground absolute"
            initial={{ top: '0%' }}
            animate={{ top: '100%' }}
            exit={{ top: ['100%', '0%'] }}
            transition={{ duration: 0.25 }}
          />
        </div>
      </AnimatePresence>

      <AnimatePresence>
        <motion.div
          key={pathname}
          className="w-screen h-screen inset-0 z-10 bg-background pointer-events-none fixed overflow-hidden"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, transition: { duration: 0.25, delay: 0.15, ease: 'easeInOut' } }}
        />
        {children}
      </AnimatePresence>
    </>
  )
}
