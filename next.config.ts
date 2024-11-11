import createMDX from '@next/mdx'

import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */

  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],

  logging: {
    fetches: {
      fullUrl: true,
    },
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
})

export default withMDX(nextConfig)
