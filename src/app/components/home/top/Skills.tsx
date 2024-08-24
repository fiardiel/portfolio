'use client'

import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import Reveal from '@/components/utils/Reveal';
import { FrontendIcon } from '@/components/icons/FrontendIcon';
import BackendIcon from '@/components/icons/BackendIcon';
import DataScienceIcon from '@/components/icons/DataScienceIcon';
import { mapIcon } from '@/components/utils/IconMapper';
import { Tooltip } from '@nextui-org/react';

interface SkillsProps {
  className?: string;
}

const Skills = ({ className }: SkillsProps) => {
  const skills = [
    {
      title: 'Front-end ',
      description: 'I am experienced in building responsive and interactive web applications using modern web   technologies',
      techs: [
        { 'name': 'nextJS', 'title': 'Next.js' },
        { 'name': 'react', 'title': 'React' },
        { 'name': 'tailwind', 'title': 'Tailwind CSS' },
        { 'name': 'typescript', 'title': 'TypeScript' },
        { 'name': 'vue', 'title': 'Vue' },
        { 'name': 'vite', 'title': 'Vite' }
      ],
      logo: <FrontendIcon className='h-[150px] text-neutral-400 fill-neutral-400 translate-x-1' />
    },
    {
      title: 'Back-end ',
      description: 'I\'ve built RESTful APIs and backends for various applications using various frameworks and languages',
      techs: [
        { 'name': 'python', 'title': 'Python' },
        { 'name': 'postgresql', 'title': 'PostgreSQL' },
        { 'name': 'golang', 'title': 'Golang' },
        { 'name': 'java', 'title': 'Java' },
        { 'name': 'springboot', 'title': 'Spring Boot' },
        { 'name': 'django', 'title': 'Django' }
      ],
      logo: <BackendIcon className='h-[150px] text-neutral-400 fill-neutral-400' />
    },
    {
      title: 'Data ',
      description: 'I\'ve done machine learning classification, regression, and clustering, including NLP, and Knowledge Graph datasets on campus',
      icons: ['python', 'postgresql', 'pandas', 'numpy', 'seaborn', 'scikitlearn'],
      techs: [
        { 'name': 'python', 'title': 'Python' },
        { 'name': 'postgresql', 'title': 'PostgreSQL' },
        { 'name': 'pandas', 'title': 'Pandas' },
        { 'name': 'numpy', 'title': 'Numpy' },
        { 'name': 'seaborn', 'title': 'Seaborn' },
        { 'name': 'scikitlearn', 'title': 'Scikit-learn' }
      ],
      logo: <DataScienceIcon className='h-[150px] text-neutral-400 fill-neutral-400' />,
    }
  ]

  return (
    <div>
      <div className={`flex flex-col w-full items-center md:items-start ${className}`}>
        <div className='flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch'>
          {skills.map((skill, index) => (
            <Reveal key={index} className=''>
              <Card radius='sm' className='w-full h-full p-3 border-1 border-neutral-700/60 hover:border-neutral-700/70 bg-neutral-950 hover:bg-neutral-900 group'>
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
                  {skill.techs.map((tech, index) => {
                    const elem = mapIcon(tech.name, 'w-full h-full')
                    return elem ? (
                      <Tooltip content={tech.title} key={index}>
                        <div className='h-[30px] w-[30px] text-white'>
                          {elem}
                        </div>
                      </Tooltip>
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
