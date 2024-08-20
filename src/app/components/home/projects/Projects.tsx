'use client'

import { Button, Card, CardBody, CardFooter, CardHeader, Chip, Link } from '@nextui-org/react'
import React from 'react'
import { Image as NextImage } from '@nextui-org/react'
import Reveal from '@/components/utils/Reveal'
import { mapIcon } from '@/components/utils/IconMapper'
import { FiGithub } from 'react-icons/fi'
import { MdArrowForwardIos } from 'react-icons/md'

const Projects = ({ className }: { className: string }) => {
  const projects = [
    {
      name: 'fiardiel\'s Portfolio',
      description: 'Self explanatory website. Inspired by the themes of Next.js and from other developers (my friend\'s) portfolio',
      img: 'portfolio.png',
      githubLink: 'fiardiel/portfolio/',
      projectLink: 'https://fiardiel-portfolio.vercel.app',
      projectType: 'Front-end',
      toolIcons: ['nextJS', 'tailwind', 'typescript'],
      isProjectDisabled: false,
      isGithubDisabled: false
    },
    {
      name: 'PT. Samakta Mitra Company Profile',
      description: 'Created the front-end and back-end of the article page of Samakta Mitra\'s company profile web page',
      img: 'sam-web.png',
      projectLink: 'https://samakta-mitra.vercel.app/',
      projectType: 'Full-stack',
      githubLink: 'fiardiel/sam-web/',
      toolIcons: ['vue', 'vite', 'tailwind', 'typescript', 'python', 'directus'],
      isProjectDisabled: true,
      isGithubDisabled: true
    },
    {
      name: 'FlexTime',
      description: 'A rework project, originally by github.com/rice-science. A gym session planning app built for thriving students that want to keep their body in shape',
      img: null,
      githubLink: 'fiardiel/flextime-fe/',
      projectType: 'Full-stack',
      projectLink: 'https://samakta-mitra.vercel.app/',
      toolIcons: ['nextJS', 'tailwind', 'typescript', 'python'],
      isProjectDisabled: true,
      isGithubDisabled: false
    },
  ]

  const fallbackSrc = '/images/fallback.webp'

  return (
    <div id="projects" className={`w-full ${className}`}>
      <div className='flex flex-col items-center md:items-start w-full'>
        <Reveal className='text-center md:text-start'>
          <p className='text-3xl font-medium decoration-4 underline underline-offset-8 decoration-blue-500'>
            Projects
          </p>
        </Reveal>
        <div className='flex flex-col items-center mt-5 gap-5 md:grid md:grid-cols-2 lg:grid-cols-3 w-full'>
          {projects.map((project, index) => (
            <Reveal key={index} className='flex justify-center h-full'>
              <div className='w-full h-full'>
                <Card radius='sm' className='w-full hover:bg-black border-1 border-neutral-700/60 hover:border-neutral-700/70 bg-neutral-950 h-full'>
                  <CardHeader className='flex flex-col items-start p-0'>
                    <div className='w-full aspect-w-16 aspect-h-9'>
                      <NextImage removeWrapper className='absolute object-cover w-full h-full rounded-sm rounded-b-none' src={project.img ? `/images/projects/${project.img}` : fallbackSrc} fallbackSrc={fallbackSrc} />
                    </div>
                  </CardHeader>
                  <CardBody className='items-start p-5 pb-0'>
                    <div className='flex flex-row gap-2 h-[22px]'>
                      {project.toolIcons.map((icon) => (
                        <div key={icon} className='h-[25px] w-[25px] text-white'>
                          {mapIcon(icon, 'w-full h-full')}
                        </div>
                      ))}
                    </div>
                    <div className='flex w-full mt-5 gap-3 justify-start'>
                      <p className='text-white transition duration-300 text-xl font-medium leading-7 gap-2'>
                        <span className='mr-2'>
                          {project.name}
                        </span>
                        <span className='text-primary text-xs inline-flex font-normal border-1 border-primary p-1 px-2 rounded-full'>
                          {project.projectType}
                        </span>
                      </p>
                    </div>
                    <p className='mt-2 line-clamp-5 text-neutral-400'>
                      {project.description}
                    </p>
                  </CardBody>
                  <CardFooter className='justify-start items-center gap-3 p-5'>
                    <div>
                      <Button variant='bordered' radius='sm' isDisabled={project.isProjectDisabled} isIconOnly className='bg-transparent hover:border-none group hover:bg-primary' as={Link} href={project.projectLink}>
                        <MdArrowForwardIos className='group-hover:fill-current group-hover:text-white' size={18} />
                      </Button>
                    </div>
                    <div>
                      <Button radius='sm' variant='bordered' isDisabled={project.isGithubDisabled} isIconOnly className='group hover:bg-primary hover:border-0' as={Link} href={`https://github.com/${project.githubLink}`}>
                        <FiGithub className='group-hover:fill-white' size={22} />
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )

}

export default Projects