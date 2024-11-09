import { Airplay, UserPen, GitFork, QrCode, type LucideIcon } from 'lucide-react'

import { Route } from '@/config/routes.config'

interface IRouteConstant {
  name: string
  icon: LucideIcon
  href: string
}

export const ROUTES: IRouteConstant[] = [
  {
    name: 'Главная',
    icon: Airplay,
    href: Route.HOME,
  },
  {
    name: 'Резюме',
    icon: UserPen,
    href: Route.RESUME,
  },
  {
    name: 'Библиотека',
    icon: GitFork,
    href: Route.LIBRARY,
  },
  {
    name: 'Связь',
    icon: QrCode,
    href: Route.CONTACTS,
  },
]
