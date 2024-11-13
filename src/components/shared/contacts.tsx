'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { motion } from 'framer-motion'

import { Button, Container } from '@/components'
import { SOCIALS } from '@/constants'

import { Route } from '@/config/routes.config'

const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL

export const Contacts: React.FC = () => {
  return (
    <Container className="max-w-[640px] w-full flex flex-1 items-center justify-center">
      <div className="py-20 flex flex-1 flex-col">
        <div className="mb-10 space-y-1.5 flex flex-col items-center">
          <span className="text-primary uppercase dark:text-foreground">Связь</span>
          <h1 className="text-5xl font-light uppercase dark:text-primary">Контакты</h1>
        </div>

        <div className="gap-3 flex flex-col items-center">
          {SOCIALS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <Link href={item.href} target="_blank">
                <Button className="text-base rounded-full" variant="ghost" size="lg">
                  <Image
                    className="dark:invert"
                    width={24}
                    height={24}
                    src={item.icon}
                    alt={item.name}
                    priority
                  />

                  {item.name}
                </Button>
              </Link>
            </motion.div>
          ))}

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <Link href={`mailto:${CONTACT_EMAIL}`} target="_blank">
              <Button className="text-base rounded-full" variant="ghost" size="lg">
                {CONTACT_EMAIL}
              </Button>
            </Link>
          </motion.div>

          <motion.div
            className="w-[15%] h-0.5 my-1.5 self-center bg-border"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          />

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <Link href={Route.FEEDBACK}>
              <Button className="font-semibold uppercase rounded-full" variant="ghost" size="lg">
                Связаться со мной
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </Container>
  )
}
