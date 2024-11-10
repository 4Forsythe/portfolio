'use server'

import type { Repository } from '@/types'

const GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME

const baseUrl = 'https://api.github.com/'

export async function getRepository(slug: string): Promise<Repository | null> {
  const response = await fetch(baseUrl + `repos/${GITHUB_USERNAME}/${slug}`)

  if (!response.ok) {
    return null
  }

  return response.json()
}
