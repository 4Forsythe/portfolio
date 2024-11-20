'use client'

import React from 'react'

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

type GlitchEffectOptions = {
  duration: number
  interval: number
}

export function useGlitchEffect(text: string, options?: GlitchEffectOptions): string {
  const [displayText, setDisplayText] = React.useState('')

  const duration = options?.duration || 500
  const interval = options?.interval || 7000

  const handleGlitchEffect = (interval: NodeJS.Timeout | null) => {
    let iteration = 0

    interval = setInterval(() => {
      setDisplayText((prev) =>
        prev
          .split('')
          .map((_, index) => {
            if (index < iteration) {
              return text[index]
            }
            return LETTERS[Math.floor(Math.random() * 26)]
          })
          .join('')
      )

      if (iteration >= text.length) {
        clearInterval(interval!)
      }

      iteration += 1 / 3
    }, duration)

    setDisplayText(text)
  }

  React.useEffect(() => {
    const timeout: NodeJS.Timeout | null = null

    handleGlitchEffect(timeout)

    const repeat = setInterval(() => {
      handleGlitchEffect(timeout)
    }, interval)

    return () => {
      clearInterval(repeat)

      if (timeout) clearInterval(timeout)
    }
  }, [text])

  return displayText
}
