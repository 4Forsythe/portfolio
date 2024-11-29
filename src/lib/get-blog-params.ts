import fs from 'fs'
import path from 'path'

const contentDir = path.join(process.cwd(), 'src/content/blog')

export function getBlogParams() {
  const files = fs.readdirSync(contentDir).filter((file) => file.endsWith('.mdx'))

  return files.map((file) => ({ slug: path.parse(file).name }))
}
