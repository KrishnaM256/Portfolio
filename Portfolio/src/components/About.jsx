import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import profile from './../assets/profile2.jpeg'

const About = () => {
  const items = [
    {
      title: 'Who Am I?',
      description: `I’m a third-year Computer Engineering student at Vishwakarma
              Institute of Information Technology, Pune. A passionate Full Stack
              Developer and AI & ML enthusiast.`,
      id: 1,
      className: 'lg:col-span-3 md:col-span-6 md:row-span-1 lg:min-h-[10vh]',
      titleClassName: 'justify-start',
    },
    {
      image: profile,
      id: 2,
      className: 'md:row-span-1 lg:col-span-1',
      imgClassName: 'rounded-full object-cover',
      titleClassName: 'hidden', // No title for the profile image
    },
    {
      title: '650+ Contributions',
      description:
        'Actively contributing to open-source projects and repositories.',
      id: 3,
      className: 'lg:col-span-1',
      titleClassName: 'justify-start text-yellow-400',
    },
    {
      title: '5+ Projects',
      description: `Built innovative solutions using the MERN stack, Java, and Python.`,
      id: 4,
      className: 'lg:col-span-1',
      titleClassName: 'justify-start text-blue-400',
    },
    {
      title: '400+ DSA Problems',
      description:
        'Strong problem-solving skills demonstrated on competitive coding platforms.',
      id: 5,
      className: 'lg:col-span-1',
      titleClassName: 'justify-start text-green-400',
    },
    {
      title: '8.82 Aggregate CGPA',
      description:
        'Consistently achieving academic excellence throughout the course.',
      id: 6,
      className: 'lg:col-span-1',
      titleClassName: 'justify-start text-purple-100',
    },
    {
      title: 'Future Goals',
      description: `Aiming to make an impact with AI and ML while excelling as a Full Stack Developer.`,
      id: 7,
      className: 'lg:col-span-4 md:col-span-6',
      titleClassName: 'justify-start text-yellow-400',
    },
  ]
  return (
    <section id="about">
      <h2 className="text-4xl text-center text-slate-200">About Me</h2>
      <BentoGrid>
        {items.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item?.title}
            description={item.description}
            className={item.className}
            image={item.image}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
          ></BentoGridItem>
        ))}
      </BentoGrid>
    </section>
  )
}

export default About
