import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { cn } from '@/lib/utils'
import { ArrowLeft, GitMerge, SquareArrowOutUpRight } from 'lucide-react'

import { Container, LibraryLanguage } from '@/components'

import { Route } from '@/config/routes.config'

import type { Commit, Languages, Repository as RepositoryType } from '@/types'

interface IRepository extends RepositoryType {
  commits: Commit[]
  languages: Languages
  className?: string
}

export const Repository: React.FC<IRepository> = ({
  name,
  full_name,
  description,
  owner,
  html_url,
  homepage,
  commits,
  languages,
  className,
}) => {
  const site_url = homepage && homepage.startsWith('https://') ? homepage.slice(8) : homepage

  const lastCommit = commits[0]

  return (
    <Container className={cn('max-w-[768px] w-full flex flex-1 items-center', className)}>
      <div className="w-full py-20 gap-10 flex">
        <Link href={Route.LIBRARY}>
          <ArrowLeft size={32} />
        </Link>

        <div className="gap-3.5 flex flex-1 flex-col">
          <div className="mb-5 gap-2.5 flex flex-col">
            <div className="flex items-center justify-between">
              <h1 className="font-bebas-neue text-5xl font-semibold tracking-wide">{name}</h1>

              <Link
                className="w-fit mt-2.5 gap-2 flex items-center"
                href={owner.html_url}
                target="_blank"
              >
                <span className="text-sm">Создан {owner.login}</span>
                <Image
                  className="rounded-lg"
                  width={28}
                  height={28}
                  src={owner.avatar_url}
                  alt={owner.login}
                  priority
                />
              </Link>
            </div>

            {homepage && (
              <Link
                className="w-fit gap-1.5 flex items-center text-secondary-foreground/80"
                href={homepage}
                target="_blank"
              >
                <SquareArrowOutUpRight size={14} />
                {site_url}
              </Link>
            )}
          </div>

          <div className="mb-5 space-y-2.5 flex flex-col">
            <Link
              className="w-fit px-3 py-1 gap-1.5 font-medium flex items-center text-secondary-foreground bg-muted rounded-full"
              href={html_url}
              target="_blank"
            >
              <Image
                className="dark:invert"
                width={16}
                height={16}
                src="/icons/github-icon.svg"
                alt="GitHub"
                priority
              />
              {full_name}
            </Link>

            <Link
              className="w-fit px-4 py-1 gap-1.5 flex items-center text-secondary-foreground bg-muted rounded-full"
              href={lastCommit.html_url}
              target="_blank"
            >
              <GitMerge size={16} />
              {lastCommit.commit.message}
            </Link>
          </div>

          {description && <p className="mb-5 font-light">{description}</p>}

          <div className="gap-3.5 flex items-center">
            {Object.keys(languages).map((language, index) => (
              <LibraryLanguage key={index} language={language} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}
