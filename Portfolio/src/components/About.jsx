import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import profile from './../assets/profile2.jpeg'

const About = () => {
  const items = [
    {
      image: profile,
      id: 1,
      className:
        'row-span-1 col-span-1 sm:col-span-4 md:col-span-4 lg:col-span-1 flex justify-center items-center', // Default single-column layout on small screens
      imgClassName:
        'gridProfile flex justify-center items-center w-full h-full rounded-full object-cover',
      titleClassName: 'hidden', // Hidden title for profile image
    },
    {
      title: 'Who Am I?',
      description: `I’m a third-year Computer Engineering student at Vishwakarma
              Institute of Information Technology, Pune. A passionate Full Stack
              Developer and AI & ML enthusiast.`,
      id: 2,
      className: 'col-span-4 md:col-span-6 lg:col-span-3 row-span-1',
      titleClassName: 'justify-start text-center sm:text-left', // Center-align for small screens
    },
    {
      title: '8.82 Aggregate CGPA',
      description:
        'Consistently achieving academic excellence throughout the course.',
      id: 3,
      className: 'col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-1',
      titleClassName: 'justify-start text-teal-400 text-center sm:text-left', // Responsive text alignment
    },
    {
      title: '5+ Projects',
      description: `Built innovative solutions using the MERN stack, and Python.`,
      id: 4,
      className: 'col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-1',
      titleClassName: 'justify-start text-blue-400 text-center sm:text-left',
    },
    {
      title: '450+ DSA Problems',
      description:
        'Strong problem-solving skills demonstrated on competitive coding platforms.',
      id: 5,
      className: 'col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-1',
      titleClassName: 'justify-start text-green-400 text-center sm:text-left',
    },
    {
      title: '650+ Contributions',
      description:
        'Active engagement in coding platforms and personal projects.',
      id: 6,
      className: 'col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-1',
      titleClassName: 'justify-start text-yellow-400 text-center sm:text-left',
    },
    {
      title: 'Future Goals',
      description: `Aiming to make an impact with AI and ML while excelling as a Full Stack Developer.`,
      id: 7,
      className: 'col-span-4 md:col-span-6 lg:col-span-4 row-span-1',
      titleClassName: 'justify-start text-yellow-400 text-center sm:text-left',
    },
  ]

  return (
    <section id="about">
      <h2 className="text-4xl mb-5 text-center text-slate-200">About Me</h2>
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
