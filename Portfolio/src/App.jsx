import { useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
function App() {
  return (
    <>
      <main className="relative text-white bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 mb-10">
        <div className="max-w-7xl w-full">
          <Hero></Hero>
        </div>
        <About></About>
        <Skills></Skills>
      </main>
    </>
  )
}

export default App
