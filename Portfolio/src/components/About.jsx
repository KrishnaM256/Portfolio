import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import profile from './../assets/profile2.jpeg'

const About = () => {
  return (
    <section id="about">
      <h2 className="text-4xl text-center text-slate-200">About Me</h2>
      <BentoGrid>
        {[
          {
            description: `I’m a third-year Computer Engineering student at Vishwakarma
              Institute of Information Technology, Pune. A passionate Full Stack
              Developer and AI & ML enthusiast.`,
            id: 1,
            className:
              'lg:col-span-3 md:col-span-6 md:row-span-1 lg:min-h-[10vh] ',
            titleClassName: 'justify-start',
          },
          {
            image: profile,
            imgClassName: 'gridProfile',
            id: 2,
            titleClassName: 'justify-start',
          },
          {
            title: 'The Art of Design',
            description:
              'Discover the beauty of thoughtful and functional design.',
            id: 3,
            titleClassName: 'justify-start',
          },
          {
            title: 'The Power of Communication',
            description:
              'Understand the impact of effective communication in our lives.',
            id: 4,
            titleClassName: 'justify-start',
          },
          {
            title: 'The Pursuit of Knowledge',
            description: 'Join the quest for understanding and enlightenment.',
            id: 5,
            titleClassName: 'justify-start',
          },
          {
            title: 'The Joy of Creation',
            description: 'Experience the thrill of bringing ideas to life.',
            id: 6,
            titleClassName: 'justify-start',
          },
        ].map((item, i) => (
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
