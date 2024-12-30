import { useState } from 'react'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Contact from './Contact'
import Projects from './Projects'
const Home = () => {
  return (
    <main
      id="home"
      className="relative text-white bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 mb-10"
    >
      <div className="max-w-7xl w-full">
        <Hero></Hero>
      </div>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full " />
    </main>
  )
}

export default Home
