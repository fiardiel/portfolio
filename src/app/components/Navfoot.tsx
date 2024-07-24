'use client'

import {Link as NextLink} from "@nextui-org/react"
import { usePathname } from "next/navigation";
import { GoHome, GoHomeFill } from 'react-icons/go';
import { MdPerson, MdPersonOutline } from 'react-icons/md';
import { HiBriefcase, HiMiniCodeBracket, HiOutlineBriefcase } from 'react-icons/hi2';
import { Button } from '@nextui-org/react';

const Navfoot = () => {
    const pathname = usePathname();
    const isActive = (path: string) => {
        if (path !== '/') {
            return pathname.startsWith(path)
        }
        return pathname === path
    }

    return (
        <div className='p-5 md:hidden sticky bottom-0'>
            <div className='flex items-center justify-around bg-neutral-800/40 border border-white/5 rounded-xl p-3 backdrop-blur-lg shadow-lg'>
                <Button className={isActive('/') ? 'bg-primary p-2' : 'bg-transparent'} isIconOnly href='/' as={NextLink}>{isActive('/') ? (
                    <GoHomeFill size={25} fill='white' /> ) : <GoHome size={25} fill='white' />} </Button>
                <Button className={isActive('/profile') ? 'bg-primary p-2' : 'bg-transparent'} isIconOnly href='/profile' as={NextLink}> { 
                    isActive('/profile') ? <MdPerson size={25} fill='white' /> : <MdPersonOutline size={25} fill='white' />
                } </Button>
                <Button className={isActive('/projects') ? 'bg-primary p-2' : 'bg-transparent'} isIconOnly href='/projects' as={NextLink}><HiMiniCodeBracket size={25} fill='white' /></Button>
                <Button className={isActive('/experiences') ? 'bg-primary p-2' : 'bg-transparent'} isIconOnly href='/experiences' as={NextLink}> {
                    isActive('/experiences') ? <HiBriefcase size={25}/> : <HiOutlineBriefcase size={25}/>
                } </Button>
            </div>
        </div>
    );
};

export default Navfoot;