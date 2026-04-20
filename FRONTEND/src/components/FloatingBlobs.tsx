'use client'

import React from 'react'

interface FloatingBlobsProps {
  colors?: ('purple' | 'blue' | 'pink' | 'cyan' | 'emerald' | 'orange' | 'yellow' | 'red')[]
}

const colorMap = {
  purple: 'from-purple-500/30 to-indigo-500/30',
  blue: 'from-blue-500/30 to-cyan-500/30',
  pink: 'from-pink-500/30 to-rose-500/30',
  cyan: 'from-cyan-500/30 to-blue-500/30',
  emerald: 'from-emerald-500/30 to-teal-500/30',
  orange: 'from-orange-500/30 to-red-500/30',
  yellow: 'from-yellow-500/30 to-orange-500/30',
  red: 'from-red-500/30 to-rose-500/30',
}

const blobiest = [
  'w-[250px] h-[250px] top-[10%] left-[10%] animate-float-slow',
  'w-[200px] h-[200px] bottom-[10%] right-[10%] animate-float-reverse',
  'w-[150px] h-[150px] top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 animate-pulse-gentle',
  'w-[120px] h-[120px] top-[20%] right-[20%] animate-float-diagonal',
  'w-[180px] h-[180px] bottom-[30%] left-[20%] animate-float-reverse-diagonal'
]

export default function FloatingBlobs({ 
  colors = ['purple', 'blue', 'pink', 'emerald', 'cyan'] 
}: FloatingBlobsProps) {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {blobiest.map((pos, i) => {
        const mappedColor = colorMap[colors[i % colors.length]] || colorMap.purple
        return (
          <div 
            key={i} 
            className={`absolute rounded-full blur-[60px] md:blur-[80px] bg-gradient-to-r ${mappedColor} ${pos} opacity-60 dark:opacity-40`} 
          />
        )
      })}
    </div>
  )
}
