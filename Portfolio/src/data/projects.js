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
import CropMate1 from './../assets/CropMate1.png'
import Aakar1 from './../assets/aakar1.png'
import Aakar2 from './../assets/aakar2.png'
import Aakar3 from './../assets/aakar3.png'
import Aakar4 from './../assets/aakar4.png'
import ShopNow1 from './../assets/shop-now-1.png'
import ShopNow2 from './../assets/shop-now-2.png'
import ShopNow3 from './../assets/shop-now-3.png'

export const projects = [
  {
    id: 1,
    title: 'CropMate: Assured Contract Farming System',
    description:
      'This is assured contract farming system. Tech stack - MongoDB, Express.js, React.js, Node.js',
    image: CropMate1,
    git: 'https://github.com/KrishnaM256/CropMate',
    images: [CropMate1],
    iconLists: [SiMongodb, SiExpress, FaReact, FaNodeJs],
    link: '/project/1',
  },
  {
    id: 2,
    title: 'Aakar ERP System',
    description: `The Aakar Dies and Moulds ERP project module focuses on managing the company's operations efficiently. It includes project tracking, stage and sub-stage scheduling, project history and editing history, and VMC machine status monitoring. This system replaces time-consuming Excel-based management, streamlining processes and enhancing productivity.`,
    images: [Aakar1, Aakar2, Aakar3, Aakar4],
    image: Aakar1,
    git: 'https://github.com/KrishnaM256/AakaarERP',
    iconLists: [SiMysql, SiExpress, FaReact, FaNodeJs],
    link: '/project/2',
  },
  {
    id: 3,
    title: 'ShopNow.com: E-commerce Website Frontend',
    description: `Designed and developed a responsive and visually appealing e-commerce website using HTML, CSS, and JavaScript. Features include intuitive navigation, dynamic product listings, and interactive user interfaces, showcasing a seamless shopping experience.`,
    images: [ShopNow1, ShopNow2, ShopNow3],
    image: ShopNow1,
    git: 'https://github.com/KrishnaM256/ShopNow.com',
    iconLists: [FaHtml5, FaCss3, FaJs],
    link: '/project/3',
  },
]
