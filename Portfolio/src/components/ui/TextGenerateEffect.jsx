'use client'
import { useEffect } from 'react'
import { motion, stagger, useAnimate } from 'framer-motion'
import { cn } from '../../lib/utils'

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}) => {
  const [scope, animate] = useAnimate()
  const wordsArray = words.split(' ')

  useEffect(() => {
    animate(
      'span',
      {
        opacity: 1,
        filter: filter ? 'blur(0px)' : 'none',
      },
      {
        duration: duration,
        delay: stagger(0.1), // Reduced stagger for smoother animation
        ease: 'easeOut', // Easing for smooth transitions
      }
    )
  }, [animate, duration, filter])

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="dark:text-white opacity-0"
            style={{
              filter: filter ? 'blur(5px)' : 'none', // Subtle initial blur
            }}
          >
            {word}{' '}
          </motion.span>
        ))}
      </motion.div>
    )
  }

  return (
    <div className={cn('font-bold', className)}>
      <div className="my-4">
        <div className="dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  )
}
