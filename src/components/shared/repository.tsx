import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { cn } from '@/lib/utils'
import { ArrowLeft, GitMerge, SquareArrowOutUpRight } from 'lucide-react'

import { Button, Container, LibraryLanguage } from '@/components'

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
  const lastCommits = commits.filter((commit) => commit.sha !== lastCommit.sha).slice(0, 3)

  return (
    <Container className={cn('max-w-[768px] w-full flex flex-1 items-center', className)}>
      <div className="w-full sm:px-14 px-7 py-20 gap-10 flex sm:flex-row flex-col">
        <Link className="mt-3" href={Route.LIBRARY}>
          <ArrowLeft size={24} />
        </Link>

        <div className="gap-3.5 flex flex-1 flex-col">
          <div className="mb-5 gap-2.5 flex flex-col">
            <h1 className="font-raleway text-5xl font-bold tracking-wide">{name}</h1>

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

          <div className="mb-5 space-y-5 flex flex-col">
            <div className="gap-3.5 flex flex-wrap items-center">
              <Link className="w-fit" href={html_url} target="_blank">
                <Button className="rounded-full" variant="secondary">
                  <Image
                    className="dark:invert"
                    width={16}
                    height={16}
                    src="/icons/github-icon.svg"
                    alt="GitHub"
                    priority
                  />
                  {full_name}
                </Button>
              </Link>

              <Link
                className="w-fit gap-1.5 text-sm flex items-center"
                href={owner.html_url}
                target="_blank"
              >
                <Image
                  className="rounded-lg"
                  width={24}
                  height={24}
                  src={owner.avatar_url}
                  alt={owner.login}
                  priority
                />
                {owner.login}
              </Link>
            </div>

            <div className="flex flex-col">
              <Link className="w-fit sm:mb-2.5 mb-5" href={lastCommit.html_url} target="_blank">
                <Button
                  className="h-fit text-foreground text-left whitespace-normal rounded-full hover:text-primary"
                  variant="link"
                >
                  <GitMerge size={16} />
                  {lastCommit.commit.message}
                </Button>
              </Link>

              {commits.length > 1 && (
                <div className="ml-5 pl-1.5 sm:gap-0 gap-2.5 flex flex-col border-l border-foreground">
                  {lastCommits.map((commit) => (
                    <Link key={commit.sha} className="w-fit" href={commit.html_url} target="_blank">
                      <Button
                        className="text-xs text-foreground text-left whitespace-normal hover:text-primary"
                        variant="link"
                      >
                        {commit.commit.message}
                      </Button>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {description && <p className="mb-5 font-light">{description}</p>}

          <div className="gap-1.5 flex flex-wrap items-center">
            {Object.keys(languages).map((language, index) => (
              <LibraryLanguage key={index} language={language} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}
