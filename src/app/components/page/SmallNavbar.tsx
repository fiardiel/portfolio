'use client'

import { Link, Link as NextLink } from "@nextui-org/react"
import { usePathname } from "next/navigation";
import { GoHome, GoHomeFill } from 'react-icons/go';
import { HiBriefcase, HiMiniCodeBracket, HiOutlineBriefcase } from 'react-icons/hi2';
import { Button } from '@nextui-org/react';
import { FaRegStar, FaStar } from "react-icons/fa";
import { WhatsappIcon } from "@/components/icons/WhatsappIcon";
import { IoIosCall } from "react-icons/io";

const SmallNavbar = () => {
    const pathname = usePathname();
    const isActive = (path: string) => {
        if (path !== '/') {
            return pathname.startsWith(path)
        }
        return pathname === path
    }

    return (
        <div className='p-5 md:hidden sticky top-0 z-50'>
            <div className=' bg-neutral-800/40 border border-white/5 rounded-full p-3 backdrop-blur-lg shadow-lg'>
                <div className="flex justify-between">
                    <div className="flex justify-start items-center gap-3">
                        <Button className={isActive('/') ? 'bg-primary p-2' : 'bg-transparent'} isIconOnly href='/' as={NextLink}>{isActive('/') ? (
                            <GoHomeFill size={25} fill='white' />) : <GoHome size={25} fill='white' />} </Button>
                        <Button className={isActive('/test') ? 'bg-primary p-2' : 'bg-transparent'} isIconOnly href='#skills' as={NextLink}> {
                            isActive('/test') ? <FaStar size={25} fill='white' /> : <FaRegStar size={25} fill='white' />
                        } </Button>
                        <Button className={isActive('/projects') ? 'bg-primary p-2' : 'bg-transparent'} isIconOnly href='#projects' as={NextLink}><HiMiniCodeBracket size={25} fill='white' /></Button>
                        <Button className={isActive('/experiences') ? 'bg-primary p-2' : 'bg-transparent'} isIconOnly href='/experiences' as={NextLink}> {
                            isActive('/experiences') ? <HiBriefcase size={25} /> : <HiOutlineBriefcase size={25} />
                        } </Button>
                    </div>
                    <div className="flex items-center">
                        <Button isIconOnly radius="full" variant="bordered" as={Link} href="#contact" className="border-primary/30 bg-transparent shadow shadow-primary/40">
                            <IoIosCall size={20}/>
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SmallNavbar;