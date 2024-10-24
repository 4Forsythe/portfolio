'use client'

import { cn } from '@/lib'
import { TypeAnimation } from 'react-type-animation'

type SequenceItem = string | number | ((element: HTMLElement | null) => void | Promise<void>)

interface ITypingText {
  sequence: SequenceItem[]
  className?: string
}

export const TypingText: React.FC<ITypingText> = ({ sequence, className }) => {
  return (
    <TypeAnimation
      className={cn('text-3xl font-medium', className)}
      sequence={sequence}
      wrapper="span"
      speed={35}
      repeat={Infinity}
    />
  )
}
