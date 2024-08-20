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
import { FiPhone } from 'react-icons/fi';

interface menuItem {
    name: string
    href?: string | undefined
    icon: React.ReactNode
}

const SmallNavbar = () => {
    const menuItems: menuItem[] = [
        { name: 'Home', href: '', icon: <GrHomeRounded size={20} /> },
        { name: 'Skills', href: '#skills', icon: <FaRegStar size={25} fill='white' /> },
        { name: 'Projects', href: '#projects', icon: <HiMiniCodeBracket size={25} fill='white' /> },
        { name: 'Experiences', href: '#experiences', icon: <BsBriefcase size={25} color="white" /> },
        { name: 'Contact', href: '#contact', icon: <FiPhone size={25} /> },
    ]

    const [isScrolled, setIsScrolled] = useState(false);
    let scrollTimeout: NodeJS.Timeout;

    // TODO: handle the scroll better using intersection observer
    const handleScroll = () => {
        setIsScrolled(true);
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            setIsScrolled(false);
        }, 200);
    };

    const scrollToTop = () => {
        const urlWithoutHash = window.location.href.split('#')[0];
        window.history.replaceState(null, '', urlWithoutHash);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <div className='p-3 px-6 md:hidden sticky bottom-0 z-50'>
            <div className={`transition duration-500 p-3 border border-white/10 shadow-lg bg-neutral-900/60 backdrop-blur-md rounded-lg ${isScrolled ? 'brightness-50 opacity-70' : ''}`}>
                <div className="flex justify-between items-center px-3 p-1">
                    {menuItems.map((item, index) => (
                        <Button isIconOnly as={item.href ? Link : Button} key={index} href={item.href ? item.href : ''} onClick={item.name === 'Home' ? scrollToTop : undefined} className='bg-transparent'>
                            {item.icon}
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SmallNavbar;