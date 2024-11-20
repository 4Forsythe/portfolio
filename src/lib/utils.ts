import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calcReadingTime(text: string): number {
  const wordsPerMinute = 250

  const words = text.split(/\s+/).filter((word) => word.length > 0).length
  const time = Math.ceil(words / wordsPerMinute)

  return time
}
