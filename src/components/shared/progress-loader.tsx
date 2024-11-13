'use client'

import React from 'react'

import { cn } from '@/lib/utils'

import { Progress } from '@/components'

interface IProgressLoader {
  placeholder: string
  className?: string
}

const ITERATIONS = [0, 25, 50, 75, 100]

export const ProgressLoader: React.FC<IProgressLoader> = ({ placeholder, className }) => {
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    let index = 0

    const interval = setInterval(() => {
      setProgress(ITERATIONS[index % ITERATIONS.length])
      index++
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className={cn(
        'w-full flex flex-1 flex-col items-center justify-center bg-background',
        className
      )}
    >
      <span className="mb-8 text-4xl font-light">{placeholder}</span>
      <Progress value={progress} className="w-[500px]" />
    </div>
  )
}
