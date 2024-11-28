import React from 'react'
import Link from 'next/link'

import { Route } from '@/config/routes.config'

import type { BlogType } from '@/types'

interface IBlogItem extends BlogType {
  size?: 'sm' | 'lg'
  className?: string
}

export const BlogItem: React.FC<IBlogItem> = ({
  slug,
  frontmatter,
  reading,
  size = 'sm',
  className,
}) => {
  const { title, description, createdAt } = frontmatter

  if (size === 'lg') {
    return (
      <article className={className}>
        <Link href={`${Route.BLOG}/${slug}`}>
          <span className="text-xs font-medium uppercase">{`Последний — ${new Date(
            createdAt
          ).toLocaleString(undefined, {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })}`}</span>
          <h1 className="my-4 md:text-7xl sm:text-6xl text-5xl font-semibold">{title}</h1>
          <p className="mb-4 md:text-3xl sm:text-2xl text-xl leading-10">{description}</p>
          <span className="text-xs font-medium uppercase">{reading} мин</span>
        </Link>
      </article>
    )
  }

  return (
    <article className={className}>
      <Link href={`${Route.BLOG}/${slug}`}>
        <h2 className="mb-3 text-4xl font-semibold">{title}</h2>
        <p className="mb-4 text-lg">{description}</p>
        <span className="text-xs font-medium uppercase">
          {`${new Date(createdAt).toLocaleString(undefined, {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })} — ${reading} мин`}
        </span>
      </Link>
    </article>
  )
}
