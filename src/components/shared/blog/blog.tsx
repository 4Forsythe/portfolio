'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Map } from 'lucide-react'
import { motion } from 'framer-motion'

import { Button, BlogItem } from '@/components'

import { SOCIALS } from '@/constants'

import type { BlogType } from '@/types'

interface IBlog {
  items: BlogType[] | []
}

const GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME

const FULLNAME = process.env.NEXT_PUBLIC_BIO_FULLNAME
const DESCRIPTION = process.env.NEXT_PUBLIC_BIO_DESCRIPTION
const LOCATION = process.env.NEXT_PUBLIC_BIO_LOCATION

export const Blog: React.FC<IBlog> = ({ items }) => {
  return (
    <div className="py-20 gap-14 flex">
      <section className="w-[230px] flex flex-col">
        <Image
          className="mb-4 rounded-full select-none pointer-events-none"
          width={90}
          height={90}
          src={`/photo.jpg`}
          alt={GITHUB_USERNAME as string}
          priority
        />
        <h1 className="mb-2 font-raleway text-xl font-semibold">{FULLNAME}</h1>
        <p className="mb-4 font-raleway text-sm font-medium leading-[1.4rem] text-muted-foreground">
          {DESCRIPTION}
        </p>
        <span className="mb-5 gap-1.5 font-raleway text-sm font-medium flex items-center">
          <Map size={16} />
          {LOCATION}
        </span>
        <div className="gap-1.5 flex items-center">
          {SOCIALS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ rotate: 180, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
                delay: 0.4,
              }}
            >
              <Link href={item.href} target="_blank">
                <Button className="w-8 h-8" variant="secondary" size="icon">
                  <Image
                    className="dark:invert"
                    width={18}
                    height={18}
                    src={item.icon}
                    alt={item.name}
                    priority
                  />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="space-y-20 flex flex-1 flex-col">
        {items && items.map((item) => <BlogItem key={item.slug} {...item} />)}
      </div>
    </div>
  )
}
