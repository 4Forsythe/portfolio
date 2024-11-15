import React from 'react'

import { cn } from '@/lib/utils'
import { COLORS } from '@/constants'

import { Button } from '@/components'

interface ILibraryLanguage {
  language: string
  className?: string
}

export const LibraryLanguage: React.FC<ILibraryLanguage> = ({ language, className }) => {
  const color = COLORS[language] || COLORS['Other']

  return (
    <Button className={cn('rounded-full', className)} variant="ghost" size="sm">
      <span className="flex w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
      <h5 className="text-sm font-medium">{language}</h5>
    </Button>
  )
}
