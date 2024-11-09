'use client'

import React from 'react'

import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'

import { Button } from '@/components'

interface IThemeToggleButton {
  variant?:
    | 'link'
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | null
    | undefined
  className?: string
}

export const ThemeToggleButton: React.FC<IThemeToggleButton> = ({
  variant = 'outline',
  className,
}) => {
  const { theme, setTheme } = useTheme()
  const [isMounted, setIsMounted] = React.useState(false)

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <Button className={className} variant={variant} size="icon" onClick={toggleTheme}>
      {theme === 'dark' ? <Sun size={32} /> : <Moon size={32} />}
    </Button>
  )
}
