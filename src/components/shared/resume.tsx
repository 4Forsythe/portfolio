'use client'

import React from 'react'

import { motion } from 'framer-motion'
import { CornerRightDown } from 'lucide-react'

import { Container } from '@/components'

import ResumeDescription from '@/content/resume.mdx'

export const Resume: React.FC = () => {
  return (
    <Container className="max-w-[768px] w-full sm:min-h-screen flex flex-1 flex-col items-center justify-center relative">
      <div className="w-full sm:mt-0 mt-20 sm:px-14 p-10 flex flex-col sm:items-start items-center">
        <motion.div
          className="mb-10 space-y-1.5 flex flex-col"
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <span className="sm:text-base text-xs font-light text-primary sm:text-left text-center uppercase dark:text-foreground">
            Резюме
          </span>
          <h1 className="sm:text-5xl text-4xl font-medium uppercase dark:text-primary">Обо мне</h1>
        </motion.div>

        <motion.div
          className="mb-10 sm:prose-base prose-sm sm:text-left text-center dark:prose-invert leading-8"
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <ResumeDescription />
        </motion.div>
      </div>

      <motion.div
        className="px-14 sm:flex hidden self-start items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, delay: 1.25 }}
      >
        <span className="gap-1.5 text-sm flex animate-bounce">
          Скролль ниже <CornerRightDown size={18} />
        </span>
      </motion.div>
    </Container>
  )
}
