export type Repository = {
  id: number
  name: string
  full_name: string
  description: string | null
  owner: {
    login: string
    avatar_url: string
    html_url: string
  }
  html_url: string
  homepage: string | null
  language: string
}

export type Commit = {
  sha: string
  commit: {
    committer: {
      name: string
      email: string
      date: string
    }
    message: string
  }
  html_url: string
}

export type Languages = Record<string, number>
