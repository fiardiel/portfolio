'use client'

import HomeTypeWriter from '@/components/home/top/HomeTypeWriter'
import Reveal from '@/components/utils/Reveal'
import { Button, Tooltip } from '@nextui-org/react'
import { Link } from '@nextui-org/react'
import React from 'react'
import { Image } from "@nextui-org/image"
import { MdArrowOutward } from 'react-icons/md'
import InstagramIcon from '@/components/icons/InstagramIcon'
import SpotifyIcon from '@/components/icons/SpotifyIcon'
import LinkedinIcon from '@/components/icons/LinkedinIcon'
import GithubIcon from '@/components/icons/GithubIcon'

interface AboutProps {
  className?: string
}

const Summary = ({ className }: AboutProps) => {
  const socialLinks = [
    { name: "Github", icon: <GithubIcon  />, href: "https://github.com/fiardiel" },
    { name: "LinkedIn", icon: <LinkedinIcon /> , href: "https://www.linkedin.com/in/rafiardiel" },
    { name: "Instagram", icon: <InstagramIcon />, href: "https://www.instagram.com/fiardiel" },
    { name: "Spotify", icon: <SpotifyIcon />, href: "https://open.spotify.com/user/gv0uezdxkd6lpfd65kp8cy4ca?si=4e2f3d6a7ad649b4"},
  ]
  return (
    <div className={className}>
      <Reveal>
        <div className="lg:gap-16 flex items-center">
          <div className="flex flex-col lg:w-3/5 items-start">
            <div>
              <h1 className={`text-5xl`}>Hello<span className="text-blue-600">, World!</span></h1>
              <h1 className='text-5xl'><span>I&apos;m </span> <span className='font-semibold'>Rafi Ardiel Erinaldi</span></h1>
              <HomeTypeWriter className="text-4xl text-start mt-2 text-gray-400/90" />
              <p className="mb-4 mt-3 font-light text-gray-400 text-lg text-start">
                A Full-stack Engineer specializing in Next.js and
                Django Rest Framework / Springboot, also a data science enthusiast. Currently a Web
                Developer Intern at <Link href="https://www.linkedin.com/company/samakta-mitra---itaas/" className="text-lg transition-colors duration-300 hover:opacity-100 underline-animation underline-animation-red text-primary hover:text-white"> PT. Samakta Mitra</Link>
              </p>
            </div>

            <div className='flex justify-center md:justify-start gap-3'>
              {socialLinks.map((item, index) => (
                <Tooltip key={index} content={item.name}>
                  <Link href={item.href} className='transition hover:opacity-100 hover:-translate-y-1 underline-animation underline-animation-white hover:scale-105 pb-2'>
                    <div className='h-[30px] w-[30px]'>
                      {item.icon}
                    </div>
                  </Link>
                </Tooltip>
              ))}
            </div>
            <div>
              <Button
                as={Link}
                href="#projects"
                className="shadow-lg shadow-primary mt-4 hover:scale-105 hover:-translate-y-1 hover:text-white text-gray-400"
                variant="bordered"
                radius="full"
                size="lg"
              >
                View Resume <MdArrowOutward size={20} />
              </Button>              
            </div>
          </div>
          <div className="hidden w-2/5 lg:block opacity-70 grayscale transition hover:grayscale-0 hover:opacity-100">
            <Image
              removeWrapper
              src="/images/rafibulet.png"
              alt="rafi ardiel"
              className="rounded-full shadow-xl shadow-white/50 object-cover"
            ></Image>
          </div>
        </div>
      </Reveal>
    </div>
  )
}

export default Summary
