import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { cn } from '@/lib/utils'
import { SquareArrowOutUpRight } from 'lucide-react'

import { Badge } from '@/components'

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
    <div
      className={cn(
        'px-4 py-2.5 grid grid-rows-[auto,auto] bg-border/30 border-border rounded-xl',
        className
      )}
    >
      <div className="mb-3.5">
        <Link className="flex items-center" href={`${Route.LIBRARY}/${name}`}>
          <h2 className="font-raleway font-medium">{name}</h2>
          {site_url && <Badge className="ml-auto">Live</Badge>}
        </Link>

        {homepage && (
          <Link
            className="w-fit text-sm text-secondary-foreground/80 flex items-center"
            href={homepage}
            target="_blank"
          >
            <SquareArrowOutUpRight className="mr-1" size={12} />
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
