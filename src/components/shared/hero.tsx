'use client'

import React from 'react'

import { Container, TypingText } from '@/components'

export const Hero: React.FC = () => {
  return (
    <Container className="min-h-svh flex flex-col">
      <div className="p-14 flex flex-1 flex-col">
        <div className="mt-[25vh] flex flex-col items-center">
          <h1 className="mb-10 text-9xl font-black uppercase select-none">Forsythe</h1>
          <TypingText
            className="font-semibold tracking-wider uppercase"
            sequence={[
              'Frontend React developer.',
              1000,
              'Фронтенд React разработчик.',
              1000,
              'フロントエンド React 開発者.',
              1000,
              'Desarrollador frontend de React.',
              1000,
            ]}
          />
        </div>
      </div>
    </Container>
  )
}
