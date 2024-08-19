'use client'

import HomeTypeWriter from '@/components/home/top/HomeTypeWriter'
import Reveal from '@/components/utils/Reveal'
import { Button } from '@nextui-org/react'
import { Link } from '@nextui-org/react'
import React from 'react'
import { Image } from "@nextui-org/image"
import { MdArrowOutward } from 'react-icons/md'
import InstagramIcon from '@/components/icons/InstagramIcon'
import SpotifyIcon from '@/components/icons/SpotifyIcon'
import LinkedinIcon from '@/components/icons/LinkedinIcon'
import GithubIcon from '@/components/icons/GithubIcon'

const Top = () => {
  const socialLinks = [
    { name: "Github", icon: <GithubIcon  />, href: "https://github.com/fiardiel" },
    { name: "LinkedIn", icon: <LinkedinIcon /> , href: "https://www.linkedin.com/in/rafiardiel" },
    { name: "Instagram", icon: <InstagramIcon />, href: "https://www.instagram.com/fiardiel" },
    { name: "Spotify", icon: <SpotifyIcon />, href: "https://open.spotify.com/user/gv0uezdxkd6lpfd65kp8cy4ca?si=4e2f3d6a7ad649b4"},
    
  ]
  return (
    <div id='top'>
      <Reveal>
        <div className="md:grid md:grid-cols-[auto,1fr] md:auto-cols-min md:gap-6 lg:gap-12 flex flex-col-reverse items-center">
          <div className="flex flex-col items-center w-full md:items-start md:w-full">

            <h1 className={`font-sans text-3xl lg:text-4xl font-medium`}>Hello<span className="text-blue-600">, World!</span></h1>
            <HomeTypeWriter className="font-semibold h-24 md:h-auto mt-2 md:mt-0" />

            <p className="mb-4 mt-2 font-light text-center text-gray-400 text-lg md:text-start">
              A Full-stack Engineer specializing in Next.js and
              Django Rest Framework / Springboot. Currently a Web
              Developer Intern at <Link href="https://www.linkedin.com/company/samakta-mitra---itaas/" className="text-lg transition-colors duration-300 hover:opacity-100 underline md:no-underline underline-offset-2 md:underline-animation md:underline-animation-red text-primary hover:text-white"> PT. Samakta Mitra</Link>
            </p>

            <div className='flex justify-center md:justify-start gap-4'>
              {socialLinks.map((item, index) => (
                <Link key={index} href={item.href} className='transition grayscale hover:opacity-100 hover:grayscale-0'>
                  <div className='h-[30px] w-[30px]'>
                    {item.icon}
                  </div>
                </Link>
              ))}
            </div>
            <div>
              <Button
                as={Link}
                href="/projects"
                className="shadow-lg shadow-primary mt-6"
                variant="bordered"
                radius="full"
                size="lg"
              >
                View Resume <MdArrowOutward size={20} />
              </Button>              
            </div>
          </div>
          <div className="w-[250px] h-[250px] md:w-[280px] md:h-[280px] mb-10 md:mb-0 opacity-70 grayscale transition hover:grayscale-0 hover:opacity-100 md:self-start">
            <Image
              src="/images/rafibulet.png"
              alt="rafi ardiel"
              className="rounded-full shadow-xl shadow-white/50"
            ></Image>
          </div>
        </div>
      </Reveal>
    </div>
  )
}

export default Top
