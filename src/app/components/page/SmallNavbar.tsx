'use client'

import { HiBriefcase, HiMiniCodeBracket, HiOutlineBriefcase } from 'react-icons/hi2';
import { Button } from '@nextui-org/react';
import { FaRegStar, FaStar } from "react-icons/fa";
import { IoIosCall, IoMdPerson } from "react-icons/io";
import { MdOutlinePerson } from "react-icons/md";
import { useEffect, useState } from "react";
import { GrHomeRounded } from "react-icons/gr";
import { BsBriefcase } from "react-icons/bs";
import Link from 'next/link';

interface menuItem { 
    name: string
    href: string
    icon: React.ReactNode
}

const SmallNavbar = () => {
    const menuItems: menuItem[] = [
        { name: 'Home', href: '#', icon: <GrHomeRounded size={20} /> },
        { name: 'Skills', href: '#skills', icon: <FaRegStar size={25} fill='white' /> },
        { name: 'Projects', href: '#projects', icon: <HiMiniCodeBracket size={25} fill='white' /> },
        { name: 'Experiences', href: '#experiences', icon: <BsBriefcase size={25} color="white" /> },
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
            <div className={`transition duration-500 p-3 border ${!isScrolled ? 'bg-transparent border-transparent'  : 'border-white/10 shadow-lg bg-neutral-800/60 backdrop-blur-md'} rounded-lg`}>
                <div className="flex justify-between">
                    <div className="flex justify-start items-center gap-5">
                        {menuItems.map((item, index) => (
                            <Link key={index} href={item.href} className='bg-transparent'>
                                {item.icon}
                            </Link>
                        ))}                        
                    </div>
                    <div className="flex items-center">
                        <Link href={'#contact'} className="bg-primary p-2 rounded-md">
                            <IoIosCall size={20}/>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SmallNavbar;