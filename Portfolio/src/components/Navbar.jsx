import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
const Navbar = () => {
  return (
    <nav
      id="navbar"
      className="bg-transparent absolute w-full  top-0 left-0 text-white-200 flex justify-between px-36 py-7 z-50"
    >
      <Link to={'/'}>
        <h1 className="font-bold text-2xl">Krishna Magar.</h1>
      </Link>
      <ul className="flex gap-10 text-gray-400">
        <HashLink to={'/#about'} className="hover:text-white" smooth>
          <li>About</li>
        </HashLink>
        <HashLink to={'/#skills'} className="hover:text-white" smooth>
          <li>Skills</li>
        </HashLink>
        <HashLink to={'/#projects'} className="hover:text-white" smooth>
          <li>Projects</li>
        </HashLink>
        <HashLink to={'/#contact'} className="hover:text-white" smooth>
          <li>Contact</li>
        </HashLink>
      </ul>
    </nav>
  )
}

export default Navbar
