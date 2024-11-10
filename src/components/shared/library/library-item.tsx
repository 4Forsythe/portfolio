import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { cn } from '@/lib/utils'
import { SquareArrowOutUpRight } from 'lucide-react'

import { Route } from '@/config/routes.config'

import type { Repository } from '@/types'

interface ILibraryItem extends Repository {
  className?: string
}

export const LibraryItem: React.FC<ILibraryItem> = ({
  name,
  full_name,
  html_url,
  homepage,
  className,
}) => {
  const site_url = homepage && homepage.startsWith('https://') ? homepage.slice(8) : homepage

  return (
    <div className={cn('grid grid-rows-[auto,auto]', className)}>
      <div className="mb-3.5">
        <Link className="gap-1 flex items-center" href={`${Route.LIBRARY}/${name}`}>
          <h2 className="font-medium">{name}</h2>
          <SquareArrowOutUpRight size={12} />
        </Link>

        {homepage && (
          <Link
            className="w-fit text-sm text-secondary-foreground/80"
            href={homepage}
            target="_blank"
          >
            {site_url}
          </Link>
        )}
      </div>

      <Link
        className="w-fit px-3 gap-1 text-sm font-medium flex items-center bg-muted rounded-full"
        href={html_url}
        target="_blank"
      >
        <Image
          className="dark:invert"
          width={16}
          height={16}
          src="/icons/github-icon.svg"
          alt="GitHub"
          priority
        />
        {full_name}
      </Link>
    </div>
  )
}
