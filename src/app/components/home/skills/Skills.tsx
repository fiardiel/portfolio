'use client'

import React from 'react'
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { RiNextjsFill, RiTailwindCssFill, RiVuejsFill } from 'react-icons/ri';
import { SiDjango, SiNumpy, SiPandas, SiTypescript, SiVite } from 'react-icons/si';
import { FaCss3Alt, FaHtml5, FaJava, FaPython } from 'react-icons/fa';
import { BiLogoPostgresql, BiLogoSpringBoot } from 'react-icons/bi';
import { FaGolang } from 'react-icons/fa6';
import Reveal from '@/components/utils/Reveal';
import { FrontendIcon } from '@/components/icons/FrontendIcon';
import { LogosSeabornIcon } from '@/components/icons/SeabornIcon';
import { ScikitLearnLogo } from '@/components/icons/ScikitLearnLogo';
import BackendIcon from '@/components/icons/BackendIcon';
import DataScienceIcon from '@/components/icons/DataScienceIcon';

interface SkillsProps {
  className?: string;
}

const Skills = ({ className }: SkillsProps) => {
  const skills = [
    {
      title: 'Front-end Engineering',
      description: 'I am experienced in building responsive and interactive web applications using modern web   technologies',
      icons: [<RiNextjsFill size={25} key="nextjs" />, <SiTypescript size={20} key="typescript" />, <RiTailwindCssFill size={28} key="tailwind" />, <RiVuejsFill size={25} key="vuejs" />, <SiVite size={25} key="vite" />, <FaHtml5 size={25} key="html5" />, <FaCss3Alt size={25} key="css3" />],
      logo: <FrontendIcon className='h-[150px] text-neutral-400 fill-neutral-400 translate-x-1' />
    },
    {
      title: 'Back-end Engineering',
      description: 'I\'ve built RESTful APIs and microservices using various languages and frameworks',
      icons: [<FaPython size={28} key="python" />, <BiLogoPostgresql size={28} key="postgresql" />, <FaGolang size={30} key="golang" />, <FaJava size={28} key="java" />, <SiDjango size={25} key="django" />, <BiLogoSpringBoot size={28} key="springboot" />],
      logo: <BackendIcon className='h-[150px] text-neutral-400 fill-neutral-400' />
    },
    {
      title: 'Data Science',
      description: 'I\'ve done machine learning classification, regression, and clustering tasks using the below tools that I use',
      icons: [<FaPython size={28} key="python" />, <BiLogoPostgresql size={28} key="postgresql" />, <SiPandas size={28} key="pandas" />, <SiNumpy size={28} key="numpy" />, <LogosSeabornIcon className={`h-[28px] grayscale`} key="seaborn" />, <ScikitLearnLogo className={`h-[40px] grayscale`} key="scikit-learn" />],
      logo: <DataScienceIcon className='h-[150px] text-neutral-400 fill-neutral-400' />
    }
  ]

  return (
    <div id="skills">
      <Reveal>
        <div className={`flex flex-col w-full items-center md:items-start ${className}`}>
          <p className='text-3xl font-medium decoration-primary underline underline-offset-8'>Skills & Services</p>
          <div className='flex flex-col items-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
            {skills.map((skill, index) => (
              <Card key={index} className='p-3 border-1 border-white/10 hover:border-white/20 hover:bg-neutral-800'>
                <CardHeader className='justify-center'>
                  <div className='flex flex-col items-center space-y-3'>
                    {skill.logo}
                    <p className='text-xl'>{skill.title}</p>
                  </div>
                </CardHeader>
                <CardBody className='pt-0 items-center'>
                  <div className='flex flex-col items-center'>
                    <p className='text-sm text-neutral-400 text-center'>
                      {skill.description}
                    </p>
                    <div className='flex flex-row items-center justify-center mt-7 gap-3 text-neutral-400'>
                      {skill.icons.map((icon, index) => (
                        <div key={index}>{icon}</div>
                      ))}
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </Reveal>
    </div>


  )
}

export default Skills
