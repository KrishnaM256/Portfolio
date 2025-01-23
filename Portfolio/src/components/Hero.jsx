import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import profile from './../assets/myPhoto.jpg'
import { HoverBorderGradient } from './ui/hover-border-gradient'
import { FaRegPaperPlane } from 'react-icons/fa6'
import { FlipWords } from './ui/flip-words'
import { ShootingStars } from './ui/shooting-stars'
import { HashLink } from 'react-router-hash-link'

const Hero = () => {
  return (
    <div className="pb-0 w-full">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="rgba(20, 20, 20, 0.8)" // Deep gray for depth
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="rgba(50, 50, 50, 0.7)" // Subtle gray for contrast
        />
        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw]"
          fill="rgba(20, 20, 20, 0.8)" // Consistent gray tone
        />
        <Spotlight
          className={'-top-40 -left-10 md:-left-32 md:-top-20 h-screen'}
          fill={'rgba(255, 255, 255, 0.1)'} // Soft white glow for stars
        ></Spotlight>
      </div>

      <div
        style={{ height: '650px' }}
        className="pt-10 pb-10 w-full dark:bg-black-100 bg-black-100 dark:bg-grid-stone-500/[0.02] bg-grid-stone-50/[0.03] flex items-center justify-center"
      >
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="flex justify-center">
          <div className="relative max-w-[89vw] flex justify-center flex-col items-center text-center">
            <img src={profile} className="profilePhoto my-5" alt="" />
            <h2 className="relative uppercase tracking-widest text-center text-xs text-blue-100">
              <div className="h-[1rem] flex justify-center items-center px-4">
                <div className="text-sm mx-auto font-normal text-neutral-400">
                  Building
                  <FlipWords
                    words={[
                      'Innovative',
                      'Efficient',
                      'Impactful',
                      'Future-ready',
                      'Scalable',
                    ]}
                    filter={false}
                  />
                  Solutions
                </div>
              </div>
            </h2>
            <TextGenerateEffect
              className="text-center text-[40px] md:text-4xl lg:text-5xl text-white sm:text-2xl"
              filter={false}
              words={"Hello, I'm Krishna Magar"}
              duration={2}
            />
            <p
              className="relative text-center  md:text-lg lg:text-xl text-zinc-400"
              style={{ maxWidth: '600px' }}
            >
              I'm a passionate MERN stack developer, AI & ML enthusiast, and
              hackathon participant, exploring DevOps and building impactful
              real-world projects.
            </p>
            <div className="my-6 flex justify-center text-center">
              <HashLink to={'#contact'} smooth>
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="button"
                  className="bg-black text-white flex items-center space-x-2"
                >
                  <FaRegPaperPlane />
                  <span>Contact me</span>
                </HoverBorderGradient>
              </HashLink>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent absolute left-0 h-[1px] w-full" />

      <ShootingStars />
    </div>
  )
}

const AceternityLogo = () => {
  return (
    <svg
      width="66"
      height="66"
      viewBox="0 0 66 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-black dark:text-white"
    >
      <circle cx="33" cy="33" r="30" stroke="currentColor" strokeWidth="4" />
      <path
        d="M18 31L33 22L48 31L33 40L18 31Z"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33 22L33 44"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  )
}
export default Hero
