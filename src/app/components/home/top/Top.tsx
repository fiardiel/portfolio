'use client'

import HomeTypeWriter from '@/components/home/top/HomeTypeWriter'
import Reveal from '@/components/utils/Reveal'
import { Button } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import { MdArrowOutward } from 'react-icons/md'
import { Image } from "@nextui-org/image"

const Top = () => {
  const navButtons = [
    { name: "Profile", path: "/profile" },
    { name: "Projects", path: "/projects" },
    { name: "Experiences", path: "/experiences" }
  ]
  return (
    <div>
      <Reveal>
        <div className="md:grid md:grid-cols-[auto,1fr] md:auto-cols-min md:gap-16 lg:gap-24 flex flex-col-reverse items-center">
          <div className="flex flex-col items-center md:items-start w-full md:w-full">

            <h1 className={`font-sans text-4xl font-medium`}>Hello<span className="text-blue-600">, World!</span></h1>
            <HomeTypeWriter className="mt-2" />

            <p className="text-md font-light text-gray-400 md:text-start text-center mb-6 mt-2">
              A Full-stack Developer specializing in Next.js and
              Django Rest Framework / Springboot. Currently a Web
              Developer Intern at <Link href="https://www.linkedin.com/company/samakta-mitra---itaas/" className="underline-animation underline-animation-red transition-colors duration-300 hover:text-white"> PT. Samakta Mitra</Link>
            </p>

            <div className="flex justify-center md:justify-start gap-4 flex-wrap">

              {navButtons.map((item, index) => (
                <Button key={index}
                  as={Link}
                  href={item.path}
                  variant="bordered"
                  className="border-1.5 border-neutral-500/60 shadow-lg shadow-blue-500/50 transition hover:scale-105 duration-150 hover:-translate-y-1 decoration-blue-500">
                  {item.name} <MdArrowOutward />
                </Button>
              ))}

            </div>
          </div>
          <div className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] mb-10 md:mb-0 opacity-70 grayscale transition hover:grayscale-0 hover:opacity-100 md:self-start">
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