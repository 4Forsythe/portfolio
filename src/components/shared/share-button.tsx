'use client'

import React from 'react'
import Image from 'next/image'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

import { SHARES } from '@/constants'

interface IShareButton {
  url: string
  className?: string
}

export const ShareButton: React.FC<IShareButton> = ({ url, className }) => {
  return (
    <div className={cn('gap-3.5 flex flex-col items-center', className)}>
      <span className="font-raleway">Поделиться ссылкой</span>

      <div className="w-[5%] h-[1px] bg-foreground/80" />

      <div className="gap-1.5 flex items">
        {SHARES.map((item, index) => (
          <motion.div key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <item.component url={url}>
              <div className="w-8 h-8 flex items-center justify-center bg-secondary rounded-lg hover:bg-secondary/80">
                <Image
                  className="dark:invert"
                  width={20}
                  height={20}
                  src={item.icon}
                  alt={item.name}
                  priority
                />
              </div>
            </item.component>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
