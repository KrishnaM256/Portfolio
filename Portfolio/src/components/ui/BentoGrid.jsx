import { useState } from 'react'
import { cn } from '../../lib/utils'
import { BackgroundGradientAnimation } from './background-gradient-animation'
import Lottie from 'react-lottie'
import animationData from './../../data/confetti.json'
import { HoverBorderGradient } from './hover-border-gradient'
import { MdOutlineFileDownload } from 'react-icons/md'
import resume from './../../assets/Krishna_Magar_Resume.pdf'

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto bg-[#1a1a1a] p-4 rounded-lg',
        className
      )}
    >
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  id,
  image,
  imgClassName,
  titleClassName,
}) => {
  const [copied, setCopied] = useState(false)
  return (
    <div
      className={cn(
        `relative row-span-1 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input bg-[#2e2e2e]  flex flex-col space-y-4 overflow-hidden ${
          id == 1
            ? 'bg-transparent hover:shadow-none min-h-60 flex justify-center items-center'
            : ''
        }`, // Added overflow-hidden to ensure background covers the entire item
        className
      )}
    >
      <div
        className={`absolute inset-0 z-0 ${
          id == 1 && 'flex justify-center items-center flex-col'
        }`}
      >
        {/* Gradient Background */}
        {id == 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}
        {image && (
          <>
            <img
              src={image}
              alt={image}
              className={cn(
                'w-full h-full object-cover', // Added opacity to blend with the gradient
                imgClassName
              )}
            />
            <div className="my-6 relative flex justify-center text-center">
              <a href={resume} download={'Krishna_Magar_Resume'}>
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="button"
                  className="bg-black-200 relative text-white flex items-center space-x-2 "
                >
                  <MdOutlineFileDownload /> Download CV
                </HoverBorderGradient>
              </a>
            </div>
          </>
        )}
      </div>
      {id !== 1 && (
        <div className="relative z-10 flex flex-col justify-between h-full p-6 space-y-4">
          {/* Title and Description */}
          <div>
            {title && (
              <h3
                className={cn(
                  'text-xl font-bold text-white mb-2',
                  titleClassName
                )}
              >
                {title}
              </h3>
            )}
            {description && (
              <p className="text-neutral-400 text-lg">{description}</p>
            )}
          </div>
          {/* Icon */}
          <div className="self-end group-hover/bento:translate-x-2 transition duration-200">
            {icon}
          </div>
          {id === 6 && (
            <div className="mt-5 relative" onClick={() => setCopied(!copied)}>
              <div className="absolute -bottom-5 right-0">
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData,
                    rendererSettings: { preserveAspectRatio: 'xMidYMid slice' },
                  }}
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
