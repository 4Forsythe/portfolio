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
      <div className="py-20 flex flex-1 items-center justify-center">
        <div className="flex items-center justify-around">
          <div className="gap-20 flex flex-col items-center">
            <Stats items={stats} />

            <div className="gap-8 grid grid-cols-4">
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
