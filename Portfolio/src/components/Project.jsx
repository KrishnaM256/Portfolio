import React from 'react'
import { StickyScroll } from './ui/sticky-scroll-reveal'

import CropMate1 from './../assets/CropMate1.png'
import {
  FaReact,
  FaPython,
  FaJava,
  FaJs,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaGithub,
} from 'react-icons/fa'
import { TbBrandCpp } from 'react-icons/tb'
import { FaC } from 'react-icons/fa6'
import { SiExpress, SiMongodb, SiMysql, SiTailwindcss } from 'react-icons/si'
import { GoArrowUpRight } from 'react-icons/go'

const projects = [
  {
    id: 1,
    title: 'CropMate- Contract Farming System',
    description:
      'This is assured contract farming system. Tech stack - MongoDB, Express.js, React.js, Node.js. This is assured contract farming system. Tech stack - MongoDB, Express.js, React.js, Node.js.This is assured contract farming system. Tech stack - MongoDB, Express.js, React.js, Node.js. This is assured contract farming system. Tech stack - MongoDB, Express.js, React.js, Node.js',
    images: [CropMate1, CropMate1, CropMate1],
    link: '/project/1',
    iconLists: [<SiMongodb />, <SiExpress />, <FaReact />, <FaNodeJs />],
  },
  {
    id: 2,
    title: 'CropMate- Contract Farming System',
    description:
      'This is assured contract farming system. Tech stack - MongoDB, Express.js, React.js, Node.js',
    image: CropMate1,
    link: '/project/1',
  },
  {
    id: 3,
    title: 'CropMate- Contract Farming System',
    description:
      'This is assured contract farming system. Tech stack - MongoDB, Express.js, React.js, Node.js',
    image: CropMate1,
    link: '/project/1',
  },
  {
    id: 4,
    title: 'CropMate- Contract Farming System',
    description:
      'This is assured contract farming system. Tech stack - MongoDB, Express.js, React.js, Node.js This is assured contract farming system. Tech stack - MongoDB, Express.js, React.js, Node.js',
    image: CropMate1,
    link: '/project/1',
  },
  {
    id: 5,
    title: 'CropMate- Contract Farming System',
    description:
      'This is assured contract farming system. Tech stack - MongoDB, Express.js, React.js, Node.js',
    image: CropMate1,
    link: '/project/1',
  },
]

const Project = () => {
  const project = projects[0]
  return (
    <>
      <div className="text-4xl text-white-200 flex justify-between flex-wrap  w-full p-32 mb-10">
        <div className="w-1/2"></div>
        <div className="w-[600px] fixed flex flex-wrap p-2 pt-16">
          <h2 className="w-full text-4xl font-medium mb-5">{project.title}</h2>
          <p className="w-full text-lg text-gray-400 mb-4">
            {project.description}
          </p>
          <div className="flex gap-5">
            <button className="px-8 py-2 rounded-full relative bg-black-400 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600">
              <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
              <span className="relative z-20 flex justify-center items-center gap-2 text-ellipsis">
                <FaGithub /> GitHub
              </span>
            </button>
            <button className="px-8 py-2 rounded-full relative bg-black-400 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600">
              <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
              <span className="relative z-20 flex justify-center items-center gap-2">
                <GoArrowUpRight />
                Demo
              </span>
            </button>
          </div>
        </div>
        <div className=" w-1/2 flex gap-5 flex-col">
          {project.images &&
            project.images.map((image) => {
              return <img src={image} alt={image} />
            })}
        </div>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full " />
    </>
  )
}

export default Project
