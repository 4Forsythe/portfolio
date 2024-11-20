'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import slugify from 'slugify'
import { cn } from '@/lib/utils'
import { motion, useScroll, useSpring } from 'framer-motion'

import {
  BlogSpoilers,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components'

import { Route } from '@/config/routes.config'

import type { BlogType } from '@/types'
import { ShareButton } from '../share-button'

interface IBlogPost extends BlogType {
  className?: string
}

export const BlogPost: React.FC<IBlogPost> = ({
  slug,
  frontmatter,
  content,
  reading,
  className,
}) => {
  const contentRef = React.useRef<HTMLDivElement>(null)
  const [spoilers, setSpoilers] = React.useState<{ id: string; text: string }[]>([])

  const { scrollYProgress } = useScroll()
  const { title, description, imageUrl, createdAt } = frontmatter

  React.useEffect(() => {
    if (contentRef.current) {
      const headings = contentRef.current.querySelectorAll('h1, h2, h3')

      const toc = Array.from(headings).map((heading) => {
        const text = heading.textContent || ''
        const id = slugify(text, { lower: true, strict: true, locale: 'ru' })
        heading.id = id

        return { id, text }
      })

      setSpoilers(toc.filter((item) => item.text !== ''))
    }
  }, [content])

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <article className={cn('w-full pt-14 pb-24', className)}>
      <motion.div
        className="h-1 top-0 inset-0 z-50 bg-foreground origin-[0%] fixed"
        style={{ scaleX }}
      />

      <Breadcrumb className="mb-10">
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href={Route.BLOG}>Блог</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <header className="mb-10">
        <h1 className="mb-8 text-6xl font-bold">{title}</h1>

        <span className="mb-5 gap-1 text-xs font-medium text-muted-foreground flex items-center uppercase">
          {`${new Date(createdAt).toLocaleString(undefined, {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })} — ${reading} мин`}
        </span>

        <p className="mb-5 text-lg">{description}</p>

        {imageUrl && (
          <div className="w-full max-h-[400px] mb-5 flex items-center justify-center rounded-xl overflow-hidden">
            <Image
              className="w-full h-full object-cover hover:scale-110 transition duration-300"
              width={1000}
              height={600}
              src={imageUrl}
              alt={title}
              priority
            />
          </div>
        )}
      </header>

      <div className="w-full flex justify-between">
        <div ref={contentRef} className="max-w-[calc(100%-220px)] prose dark:prose-invert">
          {content}
        </div>

        <BlogSpoilers spoilers={spoilers} />
      </div>
    </article>
  )
}
