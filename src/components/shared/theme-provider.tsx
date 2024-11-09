'use client'

import React from 'react'

import { ThemeProvider as NextThemesProvider } from 'next-themes'

type ThemeProviderProps = typeof NextThemesProvider

export const ThemeProvider: React.FC<React.ComponentProps<ThemeProviderProps>> = ({
  children,
  ...props
}) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
