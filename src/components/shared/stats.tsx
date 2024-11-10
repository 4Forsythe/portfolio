import React from 'react'

import CountUp from 'react-countup'

interface IStatsItem {
  count: number
  description: string
}

interface IStats {
  items: IStatsItem[]
  className?: string
}

export const Stats: React.FC<IStats> = ({ items, className }) => {
  return (
    <div className={className}>
      {items.map((item, index) => (
        <div key={index} className="space-y-1.5 flex flex-col items-center">
          <CountUp
            className="px-4 py-1.5 text-5xl font-semibold text-background bg-primary dark:text-foreground"
            end={item.count}
            duration={5}
            delay={0.5}
          />
          <span className="text-lg font-medium uppercase">{item.description}</span>
        </div>
      ))}
    </div>
  )
}
