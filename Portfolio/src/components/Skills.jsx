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
import { SiExpress, SiMongodb, SiMysql, SiTailwindcss } from 'react-icons/si'

const Skills = () => {
  const skills = [
    { skill: 'React', icon: FaReact },
    { skill: 'C++', icon: TbBrandCpp },
    { skill: 'C', icon: FaC },
    { skill: 'Python', icon: FaPython },
    { skill: 'Java', icon: FaJava },
    { skill: 'JavaScript', icon: FaJs },
    { skill: 'Node.Js ', icon: FaNodeJs },
    { skill: 'express.js', icon: SiExpress },
    { skill: 'MongoDB', icon: SiMongodb },
    { skill: 'MySQL', icon: SiMysql },
    { skill: 'HTML5', icon: FaHtml5 },
    { skill: 'CSS', icon: FaCss3 },
    { skill: 'GitHub', icon: FaGithub },
    { skill: 'Tailwind CSS', icon: SiTailwindcss },
  ]
  return (
    <section id="skills">
      <h2 className="text-4xl my-5 mt-12 text-center text-white">My Skills</h2>
      <div className="w-[80rem]">
        <HoverEffect items={skills} />
      </div>
    </section>
  )
}

export default Skills
