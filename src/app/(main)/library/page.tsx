import { Library } from '@/components'

import { getRepositories } from '@/lib/get-repositories'

const GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME

export default async function LibraryPage() {
  const repos = await getRepositories()
  const items = repos.filter((repo) => repo.name !== GITHUB_USERNAME)

  return <Library repos={items} />
}
