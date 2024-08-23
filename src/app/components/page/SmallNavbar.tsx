'use client'

import { HiMiniCodeBracket } from 'react-icons/hi2';
import { Button } from '@nextui-org/react';
import { FaRegStar } from "react-icons/fa";
import { GrHomeRounded } from "react-icons/gr";
import { BsBriefcase } from "react-icons/bs";
import Link from 'next/link';
import { FiPhone } from 'react-icons/fi';
import { scrollToElementById, scrollToTop } from '@/utils';

interface menuItem {
    name: string
    href: string
    icon: React.ReactNode
}

const SmallNavbar = () => {
    const menuItems: menuItem[] = [
        { name: 'Home', href: 'top', icon: <GrHomeRounded size={22} /> },
        { name: 'Skills', href: 'skills', icon: <FaRegStar size={25} fill='white' /> },
        { name: 'Projects', href: 'projects', icon: <HiMiniCodeBracket size={25} fill='white' /> },
        { name: 'Experiences', href: 'experiences', icon: <BsBriefcase size={25} color="white" /> },
        { name: 'Contact', href: 'contact', icon: <FiPhone size={25} /> },
    ]

    return (
        <div className='p-3 px-6 md:hidden sticky bottom-0 z-50'>
            <div className={`transition duration-500 p-3 border border-white/10 shadow-lg bg-neutral-900/60 backdrop-blur-md rounded-lg`}>
                <div className="flex justify-between items-center px-3 p-1">
                    {menuItems.map((item, index) => (
                        <Button key={index} isIconOnly onPress={item.name === 'Home' ? scrollToTop : () => scrollToElementById(item.href)} className='bg-transparent'>
                            {item.icon}
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SmallNavbar;