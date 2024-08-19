'use client'

import { Card, CardBody, CardFooter, CardHeader, Link } from '@nextui-org/react'
import React from 'react'
import { Image as NextImage } from '@nextui-org/react'
import GithubIcon from '@/components/icons/GithubIcon'
import { MdArrowOutward } from 'react-icons/md'
import Reveal from '@/components/utils/Reveal'
import { mapIcon } from '@/components/utils/IconMapper'

const Projects = ({ className }: { className: string }) => {
  const projects = [
    { name: 'PT. Samakta Mitra Company Profile', description: 'Created the front-end and back-end of the article page of Samakta Mitra\'s company profile web page', img: '/images/projects/sam-web.png', githubLink: 'fiardiel/sam-web/', toolIcons: ['vue', 'vite', 'tailwind', 'typescript', 'python', 'directus']}, 
  ]

  return (
    <div id="projects" className={`w-full ${className}`}>
      <div className='flex flex-col items-center md:items-start w-full'>
        <Reveal className='text-center md:text-start'>
          <p className='text-3xl font-medium underline underline-offset-8 decoration-blue-500'>
            Projects
          </p>
        </Reveal>
        <div className='flex flex-col items-center mt-5 gap-5 md:grid md:grid-cols-2 lg:grid-cols-3 w-full'>
          {projects.map((project, index) => (
            <Reveal key={index} className='flex justify-center'>
              <Card radius='sm' className='h-[450px] sm:h-[510px] md:h-[500px] lg:h-[450px] w-4/5 md:w-full border-2 border-neutral-700/50 hover:-translate-y-2'>
                <CardHeader className='flex flex-col items-start p-0'>
                  <div className='w-full aspect-w-16 aspect-h-8 md:aspect-w-6 md:aspect-h-3'>
                    <NextImage removeWrapper className='absolute object-cover w-full h-full rounded-sm rounded-b-none' src={project.img} />
                  </div>
                </CardHeader>
                <CardBody className='items-start p-5 pb-0'>
                  <div className='flex flex-row gap-2 h-[22px]'>
                    {project.toolIcons.map((icon) => (
                      <div key={icon} className='h-[22px] w-[22px] text-neutral-400'>
                        {mapIcon(icon, 'w-full h-full')} 
                      </div>
                    ))}
                  </div>
                  <p className='text-xl font-medium leading-7 line-clamp-2 mt-5'>
                    {project.name}
                  </p>
                  <p className='mt-2 line-clamp-3 text-neutral-400'>
                    {project.description}
                  </p>
                </CardBody>
                <CardFooter className='justify-between p-5 pt-0'>
                  <div className=''>
                    <Link isDisabled href={``} className='flex gap-2 underline-animation-blue underline-animation text-neutral-400 hover:text-white transition-colors hover:opacity-100 duration-300'>
                      See Project <MdArrowOutward size={15}/>
                    </Link>
                  </div>
                  <div className=''>
                    <Link href={`https://github.com/${project.githubLink}`} className='transition grayscale hover:opacity-100 hover:grayscale-0'>
                      <GithubIcon className='h-7' />
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )

}

export default Projects