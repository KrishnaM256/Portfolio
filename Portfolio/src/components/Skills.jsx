import React from 'react'
import { HoverEffect } from './ui/card-hover-effect'
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
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiRedux,
} from 'react-icons/si'

const Skills = () => {
  const skills = [
    { skill: 'HTML5', icon: FaHtml5 },
    { skill: 'CSS', icon: FaCss3 },
    { skill: 'JavaScript', icon: FaJs },
    { skill: 'React', icon: FaReact },
    { skill: 'Redux', icon: SiRedux },
    { skill: 'Node.js', icon: FaNodeJs },
    { skill: 'Express.js', icon: SiExpress },
    { skill: 'MongoDB', icon: SiMongodb },
    { skill: 'MySQL', icon: SiMysql },
    { skill: 'Tailwind CSS', icon: SiTailwindcss },
    { skill: 'GitHub', icon: FaGithub },
    { skill: 'Python', icon: FaPython },
    { skill: 'Java', icon: FaJava },
    { skill: 'C++', icon: TbBrandCpp },
    { skill: 'C', icon: FaC },
  ]

  return (
    <section
      id="skills"
      className="relative flex flex-col justify-center items-center lg:w-[88%] w-full"
    >
      <h2 className="text-4xl my-5 mt-12 text-center text-white">My Skills</h2>

      <HoverEffect items={skills} />
    </section>
  )
}

export default Skills
