'use client'

import React from 'react'

import { ArrowUp } from 'lucide-react'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'

import { Button } from '@/components'

interface IBackToTop {
  variant?:
    | 'link'
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | null
    | undefined
  className?: string
}

export const BackToTop: React.FC<IBackToTop> = ({ variant = 'outline', className }) => {
  const [isActive, setIsActive] = React.useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 200) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  })

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div
          className={className}
          initial={{ y: 1000, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 1000 }}
          transition={{ duration: 0.3, ease: [0.75, 0, 0.25, 1] }}
        >
          <Button variant={variant} onClick={scrollToTop}>
            <ArrowUp size={24} />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
