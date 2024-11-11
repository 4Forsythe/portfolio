interface ISocialsConstant {
  name: string
  icon: string
  href: string
}

const GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME
const TELEGRAM_USERNAME = process.env.NEXT_PUBLIC_TELEGRAM_USERNAME

export const SOCIALS: ISocialsConstant[] = [
  {
    name: 'GitHub',
    icon: '/icons/github-icon.svg',
    href: `https://github.com/${GITHUB_USERNAME}`,
  },
  {
    name: 'Telegram',
    icon: '/icons/telegram-icon.svg',
    href: `https://t.me/${TELEGRAM_USERNAME}`,
  },
]
