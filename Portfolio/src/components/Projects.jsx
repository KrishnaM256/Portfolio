import React from 'react'
import CropMate1 from './../assets/CropMate1.png'
import { PinContainer } from './ui/3d-pin'
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

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'CropMate- Contract Farming System',
      description:
        'This is assured contract farming system. Tech stack - MongoDB, Express.js, React.js, Node.js',
      image: CropMate1,
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
    {
      id: 6,
      title: 'CropMate- Contract Farming System',
      description:
        'This is assured contract farming system. Tech stack - MongoDB, Express.js, React.js, Node.js',
      image: CropMate1,
      link: '/project/1',
    },
  ]
  return (
    <section id="projects">
      <h2 className="text-4xl mb-5 mt-12 text-center text-white">Projects</h2>
      <div className="flex flex-wrap items-center justify-center gap-16">
        {projects.map(({ id, title, description, image, link, iconLists }) => {
          return (
            <div
              key={id}
              className="lg:min-h-[30.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            >
              <PinContainer title={link} href={link}>
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div>
                    <img src="" alt="bg-image" />
                  </div>
                  <img
                    src={image}
                    alt={image}
                    className="z-10 absolute bottom-0"
                  />
                </div>
                <h1 className="font-bold lg:text-xl md:text-lg text-base line-clamp-1">
                  {title}
                </h1>
                <p className="lg:text-lg lg:font-normal font-light text-sm line-clamp-2 text-neutral-400">
                  {description}
                </p>
                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center h-[15px]">
                    {iconLists?.map((icon) => (
                      <div
                        key={icon}
                        className="border flex justify-center items-center border-white/[0.2] gap-2 rounded-full p-2 bg-transparent lg:w-10 lg:h-10 w-8 h-8"
                      >
                        {icon}
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center gap-[5px] text-lg">
                    View <GoArrowUpRight />
                  </div>
                </div>
              </PinContainer>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
