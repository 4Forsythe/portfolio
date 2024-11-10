import React from 'react'

import { cn } from '@/lib/utils'
import { COLORS } from '@/constants'

interface ILibraryLanguage {
  language: string
  className?: string
}

export const LibraryLanguage: React.FC<ILibraryLanguage> = ({ language, className }) => {
  const color = COLORS[language] || COLORS['Other']

  return (
    <div className={cn('gap-1.5 flex items-center', className)}>
      <span className="flex w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
      <h5 className="text-sm font-medium">{language}</h5>
    </div>
  )
}
