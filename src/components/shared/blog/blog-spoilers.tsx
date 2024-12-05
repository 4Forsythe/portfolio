'use client'

import React from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'

import { Button, ScrollArea } from '@/components'

interface IBlogSpoilers {
  spoilers: { id: string; text: string }[]
  className?: string
}

export const BlogSpoilers: React.FC<IBlogSpoilers> = ({ spoilers, className }) => {
  return (
    <div
      className={cn(
        'w-full lg:w-[200px] lg:max-h-[600px] top-10 sm:p-4 py-2 bg-background',
        className
      )}
    >
      <ScrollArea className="h-full top-0 sticky">
        <span className="p-2 lg:text-base sm:text-lg text-base font-semibold">В этой статье</span>
        <ul className="mt-4 flex flex-col">
          {spoilers.map((spoiler, index) => (
            <li key={index} className="mb-0.5">
              <Link href={`#${spoiler.id}`}>
                <Button
                  className="h-fit px-2 lg:text-sm md:text-base text-muted-foreground text-left whitespace-normal text-pretty"
                  variant="ghost"
                >
                  {spoiler.text}
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  )
}
