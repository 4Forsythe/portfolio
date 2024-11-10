'use server'

import type { Languages } from '@/types'

const GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME

const baseUrl = 'https://api.github.com/'

export async function getLanguages(slug: string): Promise<Languages> {
  const response = await fetch(baseUrl + `repos/${GITHUB_USERNAME}/${slug}/languages`)

  if (!response.ok) throw new Error('getLanguages: Failed to fetch data')

  return response.json()
}
