'use client'

import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import Reveal from '@/components/utils/Reveal';
import { FrontendIcon } from '@/components/icons/FrontendIcon';
import BackendIcon from '@/components/icons/BackendIcon';
import DataScienceIcon from '@/components/icons/DataScienceIcon';
import { mapIcon } from '@/components/utils/IconMapper';

interface SkillsProps {
  className?: string;
}

const Skills = ({ className }: SkillsProps) => {
  const skills = [
    {
      title: 'Front-end ',
      description: 'I am experienced in building responsive and interactive web applications using modern web   technologies',
      icons: ['nextJS', 'tailwind', 'typescript', 'vue', 'vite', 'html5', 'css3'],
      logo: <FrontendIcon className='h-[150px] text-neutral-400 fill-neutral-400 translate-x-1' />
    },
    {
      title: 'Back-end ',
      description: 'I\'ve built RESTful APIs and backends for various applications using various frameworks and languages',
      icons: ['python', 'postgresql', 'golang', 'java', 'springboot', 'django'],
      logo: <BackendIcon className='h-[150px] text-neutral-400 fill-neutral-400' />
    },
    {
      title: 'Data ',
      description: 'I\'ve done machine learning classification, regression, and clustering, including NLP, and Knowledge Graph datasets on campus',
      icons: ['python', 'postgresql', 'pandas', 'numpy', 'seaborn', 'scikitlearn'],
      logo: <DataScienceIcon className='h-[150px] text-neutral-400 fill-neutral-400' />
    }
  ]

  return (
    <div id="skills">
      <div className={`flex flex-col w-full items-center md:items-start ${className}`}>
        <Reveal className='text-center md:text-start'>
          <p className='text-3xl font-medium decoration-4 decoration-primary underline underline-offset-8'>Skills & Services</p>
        </Reveal>
        <div className='flex flex-col items-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
          {skills.map((skill, index) => (
            <Reveal key={index}>
              <Card radius='sm' className='w-full md:h-96 p-3 border-1 border-neutral-700/60 hover:border-neutral-700/70 bg-neutral-950 hover:bg-black group'>
                <CardHeader className='justify-center'>
                  <div className='flex flex-col items-center space-y-3'>
                    {skill.logo}
                    <p className='text-xl text-center text-primary-600 group-hover:text-primary font-medium transition duration-200'>{skill.title} <span className='text-white font-normal'>Engineering</span></p>
                  </div>
                </CardHeader>
                <CardBody className='pt-0 items-center'>
                  <div className='flex flex-col items-center'>
                    <p className='text-sm text-neutral-400 text-center'>
                      {skill.description}
                    </p>
                  </div>
                </CardBody>
                <CardFooter className='text-neutral-400 justify-center gap-3 flex-wrap md:flex-nowrap grayscale group-hover:grayscale-0 transition duration-200'>
                  {skill.icons.map((icon, index) => {
                    const elem = mapIcon(icon, 'w-full h-full')
                    return elem ? (
                      <div key={index} className='h-[30px] w-[30px] text-white'>
                        {elem}
                      </div>
                    ) : null
                  })}
                </CardFooter>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
