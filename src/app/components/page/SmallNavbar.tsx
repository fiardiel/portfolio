'use client'

import { HiBriefcase, HiMiniCodeBracket, HiOutlineBriefcase } from 'react-icons/hi2';
import { Button } from '@nextui-org/react';
import { FaRegStar, FaStar } from "react-icons/fa";
import { IoIosCall, IoMdPerson } from "react-icons/io";
import { MdOutlinePerson } from "react-icons/md";
import { useEffect, useState } from "react";
import { GrHomeRounded } from "react-icons/gr";
import { BsBriefcase } from "react-icons/bs";

interface menuItem { 
    name: string
    href: string
    icon: React.ReactNode
}

const SmallNavbar = () => {
    const menuItems: menuItem[] = [
        { name: 'Home', href: 'top', icon: <GrHomeRounded size={20} /> },
        { name: 'Skills', href: 'skills', icon: <FaRegStar size={25} fill='white' /> },
        { name: 'Projects', href: 'projects', icon: <HiMiniCodeBracket size={25} fill='white' /> },
        { name: 'Experiences', href: 'experiences', icon: <BsBriefcase size={25} color="white" /> },
        { name: 'About', href: 'about', icon: <MdOutlinePerson size={25}/> },
    ]

    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 60)
    }

    const handleNavigatePress = (href: string) => {
        const elem = document.getElementById(href);
        if (elem) {
            elem.scrollIntoView({ behavior: 'smooth' });
        }
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
                    <div className="flex justify-start items-center gap-2">
                        {menuItems.map((item, index) => (
                            <Button key={index} onPress={()=> handleNavigatePress(item.href)} variant='flat' className='bg-transparent' size='md' isIconOnly>
                                {item.icon}
                            </Button>
                        ))}                        
                    </div>
                    <div className="flex items-center">
                        <Button isIconOnly onPress={() => handleNavigatePress('contact')} color="primary"  className="">
                            <IoIosCall size={20}/>
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SmallNavbar;