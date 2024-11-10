'use server'

import type { Commit } from '@/types'

const GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME

const baseUrl = 'https://api.github.com/'

export async function getCommits(slug: string): Promise<Commit[]> {
  const response = await fetch(
    baseUrl + `repos/${GITHUB_USERNAME}/${slug}/commits?per_page=100&sort=created`
  )

  if (!response.ok) throw new Error('getCommits: Failed to fetch data')

  return response.json()
}
