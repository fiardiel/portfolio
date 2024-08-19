'use client'

import { Link, Link as NextLink } from "@nextui-org/react"
import { GoHome, GoHomeFill } from 'react-icons/go';
import { HiBriefcase, HiMiniCodeBracket, HiOutlineBriefcase } from 'react-icons/hi2';
import { Button } from '@nextui-org/react';
import { FaRegStar, FaStar } from "react-icons/fa";
import { IoIosCall, IoMdPerson } from "react-icons/io";
import { MdOutlinePerson } from "react-icons/md";
import { useEffect, useState } from "react";

interface menuItem { 
    name: string
    href: string
    icon: React.ReactNode
}

const SmallNavbar = () => {
    const menuItems: menuItem[] = [
        { name: 'Home', href: '#', icon: <GoHome size={25} fill='white' /> },
        { name: 'Skills', href: '#skills', icon: <FaRegStar size={25} fill='white' /> },
        { name: 'Projects', href: '#projects', icon: <HiMiniCodeBracket size={25} fill='white' /> },
        { name: 'Experiences', href: '#experiences', icon: <HiOutlineBriefcase size={25} color="white" /> },
        { name: 'About', href: '#about', icon: <MdOutlinePerson size={25}/> },
    ]

    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 60)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <div className='p-2 px-5 md:hidden sticky top-0 z-50'>
            <div className={`transition duration-500 bg-transparent p-3 ${!isScrolled ? 'bg-transparent border-transparent' : 'border border-white/5 shadow-xl bg-neutral-800/50 backdrop-blur-lg rounded-full'}`}>
                <div className="flex justify-between">
                    <div className="flex justify-start items-center gap-2">
                        {menuItems.map((item, index) => (
                            <Button key={index} as={NextLink} href={item.href} variant='flat' className='bg-transparent' size='md' isIconOnly>
                                {item.icon}
                            </Button>
                        ))}                        
                    </div>
                    <div className="flex items-center">
                        <Button isIconOnly radius="full" variant="bordered" as={Link} href="#contact" className="border-primary/30 bg-transparent shadow-lg shadow-primary/50">
                            <IoIosCall size={20}/>
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SmallNavbar;