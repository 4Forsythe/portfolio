'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import ResumeDescription from '@/app/(main)/resume/markdown.mdx'

import { Button, Container } from '@/components'

import { SOCIALS } from '@/constants'

export const Resume: React.FC = () => {
  return (
    <Container className="max-w-[640px] w-full flex flex-1 items-center justify-center">
      <div className="py-20 flex flex-1 flex-col">
        <div className="space-y-1.5 flex flex-col">
          <span className="text-primary uppercase dark:text-foreground">Резюме</span>
          <h1 className="text-5xl font-light uppercase dark:text-primary">Обо мне</h1>
        </div>

        <div className="w-[80%] h-0.5 my-6 bg-border" />

        <div className="prose dark:prose-invert leading-8">
          <ResumeDescription />
        </div>

        <div className="w-[80%] h-0.5 my-6 bg-border" />

        <div className="gap-1.5 flex items-center">
          {SOCIALS.map((item, index) => (
            <Link key={index} href={item.href} target="_blank">
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
          ))}
        </div>
      </div>
    </Container>
  )
}
