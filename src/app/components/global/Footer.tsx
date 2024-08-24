import { Tooltip } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaSpotify } from 'react-icons/fa'
import { MdArrowOutward } from 'react-icons/md'

const Footer = () => {
  const socialLinks = [
    { name: "Github", icon: <FaGithub size={20} />, href: "https://github.com/fiardiel" },
    { name: "LinkedIn", icon: <FaLinkedin size={20} /> , href: "https://www.linkedin.com/in/rafiardiel" },
    { name: "Instagram", icon: <FaInstagram size={20} />, href: "https://www.instagram.com/fiardiel" },
    { name: "Spotify", icon: <FaSpotify size={20} />, href: "https://open.spotify.com/user/gv0uezdxkd6lpfd65kp8cy4ca?si=4e2f3d6a7ad649b4"},
  ]
  return (
    <div className='w-full border-t border-white/10 shadow-xl bg-neutral-900/60 backdrop-blur-md h-auto'>
      <div className='flex flex-col md:flex-row md:justify-between gap-y-4 items-center px-7 p-5 lg:w-[1024px] w-full mx-auto '>
        <p className='text-neutral-500 hover:text-white transition duration-300'>© 2024 fiardiel. All rights reserved.</p>
        <div className='flex flex-wrap gap-3'>
          {socialLinks.map((item, index) => (
            <Tooltip key={index} content={item.name}>
              <Link className='text-neutral-500 hover:text-white transition duration-300' href={item.href}> {item.icon} </Link>
            </Tooltip>
          ))}
        </div>
        <Tooltip content='github.com/fiardiel/portfolio'>
          <Link className='text-neutral-500 hover:text-white transition duration-300 flex items-center gap-2' href='https://github.com/fiardiel/portfolio'>
            <span>
              Source code
            </span>
            <span>
              <MdArrowOutward/>
            </span>
          </Link>
        </Tooltip>
      </div>
    </div>
  )
}

export default Footer
