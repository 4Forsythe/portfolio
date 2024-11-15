'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { motion } from 'framer-motion'

import ResumeDescription from '@/app/(main)/resume/markdown.mdx'

import { Button, Container } from '@/components'

import { SOCIALS } from '@/constants'

export const Resume: React.FC = () => {
  return (
    <Container className="max-w-[768px] w-full flex flex-1 items-center justify-center">
      <div className="w-full sm:px-14 px-10 py-20 flex flex-1 flex-col sm:items-start items-center">
        <div className="mb-10 space-y-1.5 flex flex-col">
          <span className="sm:text-base text-sm text-primary uppercase dark:text-foreground">
            Резюме
          </span>
          <h1 className="sm:text-5xl text-4xl font-light uppercase dark:text-primary">Обо мне</h1>
        </div>

        <div className="mb-10 sm:prose-base prose-sm sm:text-left text-center dark:prose-invert leading-8">
          <ResumeDescription />
        </div>

        <div className="gap-1.5 flex items-center">
          {SOCIALS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ rotate: 180, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
                delay: 0.4,
              }}
            >
              <Link href={item.href} target="_blank">
                <Button className="rounded-xl" variant="secondary" size="icon">
                  <Image
                    className="dark:invert"
                    width={24}
                    height={24}
                    src={item.icon}
                    alt={item.name}
                    priority
                  />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  )
}
