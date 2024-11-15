'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

import { Button, Container, ThemeToggleButton } from '@/components'

import { SHORT_STACK } from '@/constants'

const GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME

export const Hero: React.FC = () => {
  return (
    <Container className="flex flex-1 flex-col">
      <div className="sm:p-14 p-4 flex flex-1 flex-col items-center justify-center relative">
        <div className="flex flex-col items-center">
          <div className="mb-5 px-8 py-4 gap-5 flex items-center *:grayscale">
            {SHORT_STACK.map((item, index) => (
              <motion.div
                key={index}
                className="sm:max-w-[36px] max-w-[24px]"
                initial={{ rotate: 180, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                  delay: 0.4,
                }}
              >
                <Image
                  className={cn(
                    'w-full h-auto select-none pointer-events-none',
                    item.isInvert && 'dark:invert'
                  )}
                  width={36}
                  height={36}
                  src={item.icon}
                  alt={item.name}
                  priority
                />
              </motion.div>
            ))}
          </div>

          <h1 className="mb-5 font-raleway lg:text-9xl md:text-8xl sm:text-7xl text-6xl font-black leading-none uppercase rounded-2xl select-none">
            Forsythe
          </h1>

          <TypeAnimation
            className="px-4 py-1.5 lg:text-3xl md:text-xl sm:text-sm text-xs font-semibold tracking-wider uppercase text-background bg-primary dark:text-foreground"
            sequence={[
              'Frontend React developer.',
              1000,
              'Фронтенд React разработчик.',
              1000,
              'フロントエンド React 開発者.',
              1000,
              '前端 React 开发人员.',
              1000,
            ]}
            wrapper="p"
            speed={35}
            repeat={Infinity}
          />

          <div className="my-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button className="border border-border rounded-full" variant="secondary">
                  Скачать резюме
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="bottom-0 mb-14 gap-5 flex flex-col items-center absolute">
          <motion.div
            className="gap-1.5 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <ThemeToggleButton />
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link href={`https://github.com/${GITHUB_USERNAME}`} target="_blank">
                <Button variant="outline" size="icon">
                  <Image
                    className="dark:invert"
                    width={20}
                    height={20}
                    src="/icons/github-icon.svg"
                    alt="GitHub"
                    priority
                  />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <p className="lg:text-sm text-xs font-light dark:text-secondary-foreground/80">
            Powered by Forsythe
          </p>
        </div>
      </div>
    </Container>
  )
}
