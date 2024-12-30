import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <section
      id="footer"
      className="absolute flex w-full flex-col text-white-200 gap-10 mb-10 justify-center items-center"
    >
      <ul className="flex gap-10 text-gray-400">
        <HashLink to={'#about'} className="hover:text-white" smooth>
          <li>About</li>
        </HashLink>
        <HashLink to={'#skills'} className="hover:text-white" smooth>
          <li>Skills</li>
        </HashLink>
        <HashLink to={'#projects'} className="hover:text-white" smooth>
          <li>Projects</li>
        </HashLink>
        <HashLink to={'#contact'} className="hover:text-white" smooth>
          <li>Contact</li>
        </HashLink>
      </ul>
      <NavLink to={'/#home'} smooth>
        <h1 className="font-bold text-2xl">Krishna Magar.</h1>
      </NavLink>
      <div className="flex gap-5 text-xl">
        <Link className="hover:text-white">
          <FaLinkedin></FaLinkedin>
        </Link>
        <Link className="hover:text-white">
          <FaGithub></FaGithub>
        </Link>
        <Link className="hover:text-white">
          <FaSquareXTwitter></FaSquareXTwitter>
        </Link>
        <Link className="hover:text-white">
          <FaInstagram></FaInstagram>
        </Link>
      </div>
      <p className="mb-5">
        All rights reserved. &copy; Copyright Krishna Vijaykumar Magar{' '}
        {new Date().getFullYear()}
      </p>
    </section>
  )
}

export default Footer
