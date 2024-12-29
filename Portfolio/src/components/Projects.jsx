import React from 'react'
import CropMate1 from './../assets/CropMate1.png'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'CropMate- Contract Farming System',
      description:
        'This is assured contract farming system. Tech stack - MongoDB, Express.js, React.js, Node.js',
      image: CropMate1,
      link: '/projects/1',
    },
    {
      id: 2,
      title: 'CropMate- Contract Farming System',
      description:
        'This is assured contract farming system. Tech stack - MongoDB, Express.js, React.js, Node.js',
      image: CropMate1,
      link: '/projects/1',
    },
    {
      id: 3,
      title: 'CropMate- Contract Farming System',
      description:
        'This is assured contract farming system. Tech stack - MongoDB, Express.js, React.js, Node.js',
      image: CropMate1,
      link: '/projects/1',
    },
    {
      id: 4,
      title: 'CropMate- Contract Farming System',
      description:
        'This is assured contract farming system. Tech stack - MongoDB, Express.js, React.js, Node.js',
      image: CropMate1,
      link: '/projects/1',
    },
    {
      id: 5,
      title: 'CropMate- Contract Farming System',
      description:
        'This is assured contract farming system. Tech stack - MongoDB, Express.js, React.js, Node.js',
      image: CropMate1,
      link: '/projects/1',
    },
  ]
  return (
    <section id="projects">
      <h2 className="text-4xl my-5 mt-12 text-center text-white">
        Featured Projects
      </h2>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map(({ id, title, description, image, link }) => {
          return <div key={id}>{title}</div>
        })}
      </div>
    </section>
  )
}

export default Projects
