'use client'

import HomeTypeWriter from '@/components/home/top/HomeTypeWriter'
import Reveal from '@/components/utils/Reveal'
import { Button } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import { Image } from "@nextui-org/image"
import { FaGithub, FaInstagram, FaLinkedin, FaSpotify } from 'react-icons/fa'
import { MdArrowOutward } from 'react-icons/md'

const Top = () => {
  const socialLinks = [
    { name: "Github", icon: <FaGithub size={30}/>, href: "https://github.com/fiardiel" },
    { name: "LinkedIn", icon: <FaLinkedin size={30}/>, href: "https://www.linkedin.com/in/rafiardiel" },
    { name: "Instagram", icon: <FaInstagram size={30}/>, href: "https://www.instagram.com/fiardiel" },
    { name: "Spotify", icon: <FaSpotify size={30}/>, href: "https://open.spotify.com/user/gv0uezdxkd6lpfd65kp8cy4ca?si=4e2f3d6a7ad649b4"},
    
  ]
  return (
    <div id='top'>
      <Reveal>
        <div className="md:grid md:grid-cols-[auto,1fr] md:auto-cols-min md:gap-16 lg:gap-24 flex flex-col-reverse items-center">
          <div className="flex flex-col items-center w-full md:items-start md:w-full">

            <h1 className={`font-sans text-3xl lg:text-4xl font-medium`}>Hello<span className="text-blue-600">, World!</span></h1>
            <HomeTypeWriter className="" />

            <p className="mt-2 mb-6 font-light text-center text-gray-400 text-lg md:text-start">
              A Full-stack Engineer specializing in Next.js and
              Django Rest Framework / Springboot. Currently a Web
              Developer Intern at <Link href="https://www.linkedin.com/company/samakta-mitra---itaas/" className="transition-colors duration-300 underline md:no-underline underline-offset-2 md:underline-animation md:underline-animation-red hover:text-white"> PT. Samakta Mitra</Link>
            </p>

            <div className='flex justify-center gap-4 md:justify-start'>
              {socialLinks.map((item, index) => (
                <Button key={index}
                  as={Link}
                  href={item.href}
                  isIconOnly
                  size='lg'
                  className="inline bg-white/0 text-neutral-400 hover:text-white">
                  {item.icon}
                </Button>
              ))}
            </div>
            <div>
              <Button
                as={Link}
                href="/projects"
                className="mt-2 shadow-lg shadow-primary"
                variant="bordered"
                radius="full"
                size="lg"
              >
                View Resume <MdArrowOutward size={20} />
              </Button>              
            </div>
          </div>
          <div className="w-[200px] h-[200px] md:w-[280px] md:h-[280px] mb-10 md:mb-0 opacity-70 grayscale transition hover:grayscale-0 hover:opacity-100 md:self-start">
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
