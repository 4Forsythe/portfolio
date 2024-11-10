'use server'

import type { Repository } from '@/types'

const GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME

const baseUrl = 'https://api.github.com/'

export async function getRepositories(): Promise<Repository[]> {
  const response = await fetch(baseUrl + `users/${GITHUB_USERNAME}/repos?per_page=100&sort=created`)

  if (!response.ok) throw new Error('getRepositories: Failed to fetch data')

  return response.json()
}
