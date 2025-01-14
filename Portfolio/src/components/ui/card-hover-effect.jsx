import { cn } from '../../lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <div
      className={cn(
        'grid grid-cols-1 w-full flex flex-wrap justify-center items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-4 lg:mx-auto gap-2',
        className
      )}
    >
      {items.map((item, idx) => (
        <p
          key={idx}
          className="relative group block p-2 h-full w-[170px] lg:w-[200px]"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full bg-slate-800/[0.8] block rounded-xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card className="bg-[#2e2e2e] flex flex-col justify-center items-center w-full">
            <CardTitle className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl flex justify-center items-center">
              {<item.icon />}
            </CardTitle>
            <CardDescription className="text-[14px]  md:text-xl flex justify-center items-center">
              {item.skill}
            </CardDescription>
          </Card>
        </p>
      ))}
    </div>
  )
}

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        'rounded-xl h-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20',
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  )
}

export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn('text-zinc-100 font-bold tracking-wide mt-4', className)}>
      {children}
    </h4>
  )
}

export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        'mt-4 text-zinc-400 tracking-wide leading-relaxed text-sm sm:text-base md:text-lg',
        className
      )}
    >
      {children}
    </p>
  )
}
