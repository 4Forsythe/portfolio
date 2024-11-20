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
    <Container className="max-w-[768px] w-full min-h-screen flex flex-1 flex-col">
      <div className="sm:px-14 px-10 py-20 flex flex-1 flex-col sm:items-start items-center justify-center">
        <div className="mb-10">
          <h1 className="font-raleway sm:text-4xl text-3xl font-medium uppercase dark:text-primary">
            Вопрос—ответ
          </h1>
        </div>

        <Accordion className="w-full mb-10" type="single" collapsible>
          {FAQ_ITEMS.map((faq) => (
            <AccordionItem key={faq.slug} value={faq.slug}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent className="font-raleway">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="gap-1.5 flex items-center sm:justify-start justify-center">
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
