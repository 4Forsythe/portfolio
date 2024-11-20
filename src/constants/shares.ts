import {
  TelegramShareButton,
  TwitterShareButton,
  VKShareButton,
  WhatsappShareButton,
} from 'react-share'

type ShareButton = typeof TelegramShareButton

interface ISharesConstant {
  name: string
  icon: string
  component: ShareButton
}

export const SHARES: ISharesConstant[] = [
  {
    name: 'Telegram',
    icon: '/icons/telegram-icon.svg',
    component: TelegramShareButton,
  },
  {
    name: 'VK',
    icon: '/icons/vk-icon.svg',
    component: VKShareButton,
  },
  {
    name: 'WhatsApp',
    icon: '/icons/whatsapp-icon.svg',
    component: WhatsappShareButton,
  },
  {
    name: 'X (Twitter)',
    icon: '/icons/twitter-icon.svg',
    component: TwitterShareButton,
  },
]
