import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { GoArrowUpRight } from 'react-icons/go'
import { projects } from '../data/projects'

const Projects = () => {
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
                    {iconLists?.map((Icon) => (
                      <div
                        key={Icon}
                        className="border flex justify-center items-center border-white/[0.2] gap-2 rounded-full p-2 bg-transparent lg:w-10 lg:h-10 w-8 h-8"
                      >
                        <Icon />
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
