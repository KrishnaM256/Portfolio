import React from 'react'

import { FaGithub } from 'react-icons/fa'
import { GoArrowUpRight } from 'react-icons/go'
import { projects } from '../data/projects'
import { useParams } from 'react-router-dom'

const Project = () => {
  const { id } = useParams()
  const project = projects[id - 1]
  return (
    <>
      <div className="text-4xl text-white-200 flex justify-center lg:justify-between flex-wrap  w-full p-10 md:p-20 lg:p-32 mb-10">
        <div className="w-1/2"></div>
        <div className="lg:w-1/3 lg:fixed relative flex flex-wrap p-2 pt-16">
          <h2 className="w-full text-4xl font-medium mb-5">{project.title}</h2>
          <p className="w-full text-lg text-gray-400 mb-4">
            {project.description}
          </p>
          <div className="flex gap-5">
            {project?.git && (
              <a href={project.git} target="_blank">
                <button className="px-8 py-2 rounded-full relative bg-black-400 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600">
                  <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
                  <span className="relative z-20 flex justify-center items-center gap-2 text-ellipsis">
                    <FaGithub /> GitHub
                  </span>
                </button>
              </a>
            )}
            {project?.demo && (
              <a href={project?.demo} target="_blank">
                <button className="px-8 py-2 rounded-full relative bg-black-400 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600">
                  <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
                  <span className="relative z-20 flex justify-center items-center gap-2">
                    <GoArrowUpRight />
                    Demo
                  </span>
                </button>
              </a>
            )}
          </div>
        </div>
        <div className="lg:w-1/2 flex gap-5 flex-col justify-center w-full">
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
