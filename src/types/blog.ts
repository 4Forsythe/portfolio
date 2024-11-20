export type BlogFrontmatterType = {
  title: string
  description: string
  imageUrl?: string
  isPublished?: boolean
  createdAt: string
}

export type BlogType = {
  slug: string
  frontmatter: BlogFrontmatterType
  content: React.ReactElement<any, string | React.JSXElementConstructor<any>>
  reading: number
}
