import { notFound } from 'next/navigation'

import { Repository } from '@/components'

import { getRepositories } from '@/lib/get-repositories'
import { getRepository } from '@/lib/get-repository'
import { getCommits } from '@/lib/get-commits'
import { getLanguages } from '@/lib/get-languages'

interface ILibraryPage {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const repos = await getRepositories()

  return repos.map((repo) => ({
    slug: repo.name,
  }))
}

export default async function LibraryPage({ params }: ILibraryPage) {
  const { slug } = await params

  const repo = await getRepository(slug)

  if (!repo) notFound()

  const commits = await getCommits(repo.name)
  const languages = await getLanguages(repo.name)

  return <Repository {...repo} commits={commits} languages={languages} />
}
