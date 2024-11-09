export interface IStackConstant {
  name: string
  icon: string
  isInvert?: boolean
}

export const SHORT_STACK: IStackConstant[] = [
  {
    name: 'TypeScript',
    icon: '/icons/ts-icon.svg',
  },
  {
    name: 'JavaScript',
    icon: '/icons/js-icon.svg',
  },
  {
    name: 'React',
    icon: '/icons/react-icon.svg',
  },
  {
    name: 'NodeJS',
    icon: '/icons/node-icon.svg',
  },
]
