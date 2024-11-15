'use client'

import React from 'react'

import { Container, LibraryItem, Stats } from '@/components'

import type { Repository } from '@/types'

interface ILibrary {
  repos: Repository[]
}

export const Library: React.FC<ILibrary> = ({ repos }) => {
  const stats = [{ count: repos.length, description: 'Репозиториев' }]

  return (
    <Container className="w-full flex flex-1">
      <div className="sm:px-14 px-4 sm:py-20 pt-24 pb-8 flex flex-1 items-center justify-center">
        <div className="flex items-center justify-around">
          <div className="gap-10 flex flex-col items-center">
            <div className="w-full gap-10 flex items-center justify-center">
              <Stats items={stats} />
            </div>

            <div className="gap-x-10 gap-y-8 grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1">
              {repos.map((item) => (
                <LibraryItem key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
