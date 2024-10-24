'use client'

import React from 'react'
import Image from 'next/image'

import { motion } from 'framer-motion'

import { Container, TypingText } from '@/components'

import { MAIN_STACK } from '@/constants'

export const Hero: React.FC = () => {
  return (
    <Container className="min-h-svh flex flex-col">
      <div className="p-14 flex flex-1 flex-col">
        <div className="mt-[25vh] flex flex-col items-center">
          <div className="mb-10 gap-5 flex items-center *:grayscale">
            {MAIN_STACK.map((item) => (
              <motion.div
                key={item.imageUrl}
                className="max-w-[36px]"
                initial={{ rotate: 180, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                }}
              >
                <Image
                  className="w-full h-auto select-none pointer-events-none"
                  width={36}
                  height={36}
                  src={item.imageUrl}
                  alt={item.title}
                  priority
                />
              </motion.div>
            ))}
          </div>
          <h1 className="mb-10 text-9xl font-black uppercase select-none">Forsythe</h1>
          <TypingText
            className="font-semibold tracking-wider uppercase"
            sequence={[
              'Frontend React developer.',
              1000,
              'Фронтенд React разработчик.',
              1000,
              'フロントエンド React 開発者.',
              1000,
              'Desarrollador frontend de React.',
              1000,
            ]}
          />
        </div>
      </div>
    </Container>
  )
}
