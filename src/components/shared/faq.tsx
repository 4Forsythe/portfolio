'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { motion } from 'framer-motion'

import {
  Container,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from '@/components'

import { FAQ as FAQ_ITEMS, SOCIALS } from '@/constants'

export const FAQ: React.FC = () => {
  return (
    <Container className="max-w-[768px] w-full sm:min-h-screen flex flex-1 flex-col">
      <div className="sm:px-14 sm:py-10 p-10 pb-20 flex flex-1 flex-col sm:items-start items-center justify-center">
        <motion.div
          className="mb-10"
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.75, delay: 0.55 }}
        >
          <h1 className="font-syne sm:text-4xl text-3xl font-extrabold uppercase">FAQ</h1>
        </motion.div>

        <Accordion className="w-full mb-10" type="single" collapsible>
          {FAQ_ITEMS.map((faq, index) => (
            <motion.div
              key={faq.slug}
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: (index + 1) * 0.4 }}
            >
              <AccordionItem value={faq.slug}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent className="font-raleway">{faq.answer}</AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>

        <div className="gap-1.5 flex items-center sm:justify-start justify-center">
          {SOCIALS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ rotate: 180, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{
                duration: 0.3,
                delay: FAQ_ITEMS.length * 0.4,
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
