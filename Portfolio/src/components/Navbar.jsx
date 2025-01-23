import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { IoClose, IoMenu } from 'react-icons/io5'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav
      id="navbar"
      className="bg-transparent absolute w-full  top-0 left-0 text-white-200 flex justify-between px-[10%] py-7 z-50"
    >
      <Link to={'/'}>
        <h1 className="font-bold text-2xl">Krishna Magar.</h1>
      </Link>
      <ul className="gap-10 text-gray-400 hidden lg:flex">
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

      <div className="relative inline-block text-left lg:hidden">
        <div>
          {!toggle ? (
            <IoMenu onClick={() => setToggle(true)} className="text-3xl" />
          ) : (
            <IoClose onClick={() => setToggle(false)} className="text-3xl" />
          )}
        </div>
        {toggle && (
          <div
            className="absolute right-0 z-10 mt-2 px-7 py-3 rounded-xl origin-top-right rounded-md bg-zinc-700  shadow-lg ring-1 ring-black/5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabindex="-1"
          >
            <ul className="py-1" role="none">
              <HashLink
                to={'/#about'}
                className="block px-4 py-2 text-[16px] hover:text-white"
                smooth
                role="menuitem"
                tabindex="-1"
                id="menu-item-0"
              >
                <li>About</li>
              </HashLink>
              <HashLink
                to={'/#skills'}
                className="block px-4 py-2  text-[16px] hover:text-white"
                smooth
                role="menuitem"
                tabindex="-1"
                id="menu-item-0"
              >
                <li>Skills</li>
              </HashLink>
              <HashLink
                to={'/#projects'}
                className="block px-4 py-2 text-[16px] hover:text-white"
                smooth
                role="menuitem"
                tabindex="-1"
                id="menu-item-0"
              >
                <li>Projects</li>
              </HashLink>
              <HashLink
                to={'/#contact'}
                className="block px-4 py-2 text-[16px] hover:text-white"
                smooth
                role="menuitem"
                tabindex="-1"
                id="menu-item-0"
              >
                <li>Contact</li>
              </HashLink>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
