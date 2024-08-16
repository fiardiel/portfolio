'use client'

import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { RiNextjsFill, RiTailwindCssFill, RiVuejsFill } from 'react-icons/ri';
import { SiDjango, SiNumpy, SiPandas, SiTypescript, SiVite } from 'react-icons/si';
import { FaCss3Alt, FaDatabase, FaHtml5, FaJava, FaPython } from 'react-icons/fa';
import { BiLogoPostgresql, BiLogoSpringBoot } from 'react-icons/bi';
import { FaGolang } from 'react-icons/fa6';
import Reveal from '@/components/utils/Reveal';
import { GiMaterialsScience } from 'react-icons/gi';
import { FrontendIcon } from '@/components/icons/FrontendIcon';
import { LogosSeabornIcon } from '@/components/icons/SeabornIcon';
import { ScikitLearnLogo } from '@/components/icons/ScikitLearnLogo';

interface SkillsProps {
  className?: string;
}

const Skills = ({ className }: SkillsProps) => {
  return (
    <div id='skills'>
      <Reveal>
        <div className={`flex flex-col w-full items-center md:items-start ${className}`}>
          <p className='text-3xl font-medium decoration-primary underline underline-offset-8'>Skills & Services</p>
          <div className='flex flex-col items-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
            <Card className='p-3 border-1 border-white/10 hover:border-white/20 hover:bg-neutral-800'>
              <CardHeader className='justify-center'>
                <div className='flex flex-col items-center space-y-3'>
                  <FrontendIcon className='h-[150px] text-neutral-400 fill-neutral-400 translate-x-1' />
                  <p className='text-xl'>Front-end Engineering</p>
                </div>
              </CardHeader>
              <CardBody className='pt-0 items-center'>
                <div className='flex flex-col items-center w-4/5'>
                  <p className='text-sm text-neutral-400 text-center'>
                    I am experienced in building responsive and interactive web applications using modern web technologies
                  </p>
                  <div className='flex flex-row items-center justify-center mt-7 gap-3 text-neutral-400'>
                    <RiNextjsFill size={25} />
                    <SiTypescript size={20} />
                    <RiTailwindCssFill size={28} />
                    <RiVuejsFill size={25} />
                    <SiVite size={25} />
                    <FaHtml5 size={25} />
                    <FaCss3Alt size={25} />
                  </div>
                </div>
              </CardBody>
            </Card>
            <Card className='p-3 border-1 border-white/10 hover:border-white/20 hover:bg-neutral-800'>
              <CardHeader className='justify-center'>
                <div className='flex flex-col items-center space-y-3'>
                  <FaDatabase size={150} className='h-full text-neutral-400 fill-neutral-400' />
                  <p className='text-xl'>Back-end Engineering</p>
                </div>
              </CardHeader>
              <CardBody className='pt-0 items-center'>
                <div className='flex flex-col items-center w-4/5'>
                  <p className='text-sm text-neutral-400 text-center'>
                    I've built RESTful APIs and microservices using various programming languages and frameworks
                  </p>
                  <div className='flex flex-row items-center justify-center mt-7 gap-3 text-neutral-400'>
                    <FaPython size={28} />
                    <BiLogoPostgresql size={28} />
                    <FaGolang size={30} />
                    <FaJava size={28} />
                    <SiDjango size={25} />
                    <BiLogoSpringBoot size={28} />
                  </div>
                </div>
              </CardBody>
            </Card>
            <Card className='p-3 border-1 border-white/10 hover:border-white/20 hover:bg-neutral-800'>
              <CardHeader className='justify-center'>
                <div className='flex flex-col items-center space-y-3'>
                  <GiMaterialsScience size={150} className='h-full text-neutral-400 fill-neutral-400' />
                  <p className='text-xl'>Data Science</p>
                </div>
              </CardHeader>
              <CardBody className='pt-0 items-center'>
                <div className='flex flex-col items-center w-4/5'>
                  <p className='text-sm text-neutral-400 text-center'>
                    I've done machine learning classification, regression, and clustering tasks using the below tools that I use
                  </p>
                  <div className='flex flex-row items-center justify-center mt-7 gap-3 text-neutral-400'>
                    <FaPython size={28} />
                    <BiLogoPostgresql size={28} />
                    <SiPandas size={28} />
                    <SiNumpy size={28} />
                    <LogosSeabornIcon className={`h-[28px] grayscale`} />
                    <ScikitLearnLogo className={`h-[40px] grayscale`} />
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </Reveal>
    </div>


  )
}

export default Skills
