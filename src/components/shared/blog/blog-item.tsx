import React from 'react'
import Link from 'next/link'

import { Route } from '@/config/routes.config'

import type { BlogType } from '@/types'

interface IBlogItem extends BlogType {
  className?: string
}

export const BlogItem: React.FC<IBlogItem> = ({ slug, frontmatter, reading, className }) => {
  const { title, description, createdAt } = frontmatter

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
