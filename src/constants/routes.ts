import { TvMinimal, UserPen, Layers, Mail, Code, type LucideIcon } from 'lucide-react'

import { Route } from '@/config/routes.config'

interface IRouteConstant {
  name: string
  icon: LucideIcon
  href: string
}

export const ROUTES: IRouteConstant[] = [
  {
    name: 'Главная',
    icon: TvMinimal,
    href: Route.HOME,
  },
  {
    name: 'Резюме',
    icon: UserPen,
    href: Route.RESUME,
  },
  {
    name: 'Репозитории',
    icon: Layers,
    href: Route.LIBRARY,
  },
  {
    name: 'Контакты',
    icon: Mail,
    href: Route.CONTACTS,
  },
  {
    name: 'Блог',
    icon: Code,
    href: Route.BLOG,
  },
]
