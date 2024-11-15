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
            className="w-full h-full bg-foreground origin-bottom absolute"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 0.3, ease: [0.2, 1, 0.35, 1] }}
          />
          <motion.div
            className="w-full h-full bg-foreground origin-top absolute"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.3, ease: [0.2, 1, 0.35, 1] }}
          />
        </div>
      </AnimatePresence>

      <AnimatePresence>
        <motion.div
          key={pathname}
          className="w-screen h-screen inset-0 z-10 bg-background pointer-events-none fixed overflow-hidden"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, transition: { duration: 0.5, delay: 0.3, ease: 'easeOut' } }}
        />
        {children}
      </AnimatePresence>
    </>
  )
}
