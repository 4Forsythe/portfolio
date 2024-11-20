'use client'

import React from 'react'

import { ArrowDown } from 'lucide-react'

import { Container } from '@/components'

import ResumeDescription from '@/content/resume.mdx'

export const Resume: React.FC = () => {
  return (
    <Container className="max-w-[768px] w-full min-h-screen flex flex-1 flex-col items-center justify-center relative">
      <div className="w-full sm:px-14 px-10 py-20 flex flex-col sm:items-start items-center">
        <div className="mb-10 space-y-1.5 flex flex-col">
          <span className="sm:text-base text-sm text-primary uppercase dark:text-foreground">
            Резюме
          </span>
          <h1 className="sm:text-5xl text-4xl font-light uppercase dark:text-primary">Обо мне</h1>
        </div>

        <div className="mb-10 sm:prose-base prose-sm sm:text-left text-center dark:prose-invert leading-8">
          <ResumeDescription />
        </div>
      </div>

      <ArrowDown size={24} />
    </Container>
  )
}
