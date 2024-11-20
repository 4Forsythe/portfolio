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
    <div className={cn('w-[200px] max-h-[600px] top-10 p-4 bg-background sticky', className)}>
      <ScrollArea className="h-full top-0 sticky">
        <span className="p-2 font-semibold">В этой статье</span>
        <ul className="mt-4 flex flex-col">
          {spoilers.map((spoiler, index) => (
            <li key={index} className="mb-0.5">
              <Link href={`#${spoiler.id}`}>
                <Button
                  className="h-fit px-2 text-muted-foreground text-left whitespace-normal"
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
