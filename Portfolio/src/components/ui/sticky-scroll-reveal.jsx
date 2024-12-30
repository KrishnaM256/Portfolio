'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

export const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = React.useState(0)
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ['start start', 'end start'],
  })
  const cardLength = content.length

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength)
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint)
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index
        }
        return acc
      },
      0
    )
    setActiveCard(closestBreakpointIndex)
  })

  const linearGradients = [
    'linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))',
    'linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))',
    'linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))',
  ]

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  )

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length])
  }, [activeCard])

  return (
    <div className="flex h-[30rem] space-x-10 p-10">
      {/* Static Text Section */}
      <div className="w-1/2">
        <div className="sticky top-10">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-lg text-slate-300 max-w-sm mt-4"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
        </div>
      </div>

      {/* Scrollable Image Section */}
      <motion.div
        style={{ background: backgroundGradient }}
        animate={{
          backgroundColor: linearGradients[activeCard % linearGradients.length],
        }}
        ref={ref}
        className="w-1/2 h-full overflow-y-auto rounded-md bg-white p-4"
      >
        {content.map((item, index) => (
          <div
            key={item.title + index}
            className={cn(
              'h-[60vh] flex items-center justify-center transition-opacity duration-300',
              activeCard === index ? 'opacity-100' : 'opacity-50'
            )}
          >
            {item.content}
          </div>
        ))}
      </motion.div>
    </div>
  )
}
