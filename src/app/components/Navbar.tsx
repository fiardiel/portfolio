'use client'

import { Poppins } from "next/font/google";
import { Space_Mono } from 'next/font/google';
import Link from "next/link";
import { usePathname } from "next/navigation";

const spaceMono = Space_Mono({
    subsets: ["latin"],
    weight: '700'
});

const Navbar = () => {
    const pathname = usePathname();

    const isActive = (path: string) => {
        if (path !== '/') {
            return pathname.startsWith(path);
        }
        return pathname === path;
    };
    return (
        <div className='w-full sticky md:top-0 z-50'>
            <nav className={`hidden md:flex md:w-full z-48 items-center h-20 border-b border-white/5 shadow-xl bg-neutral-900/30 backdrop-blur-xl lg:justify-center`}>
                <div className="w-full lg:w-[1024px] flex justify-between px-6">
                    <div className="logo z-50">
                        <Link href={'/'}>
                            <p className={`${spaceMono.className} text-2xl font-extrabold`}>
                                <span className="text-primary font-sans">@ </span>
                                <span className="text-white">fiardiel</span>
                            </p>
                        </Link>
                    </div>
                    <div className="md:flex justify-between gap-4 items-center hidden z-50">
                        <Link className={`${isActive('/') ? 'text-primary font-semibold' : 'text-white'} transition hover:text-gray-400`} href={'/'}>Home</Link>
                        <Link className={`${isActive('/profile') ? 'text-primary font-semibold' : 'text-white'} transition hover:text-gray-400`} href={'/profile'}>Profile</Link>
                        <Link className={`${isActive('/projects') ? 'text-primary font-semibold' : 'text-white'} transition hover:text-gray-400`} href={'/projects'}>Projects</Link>
                        <Link className={`${isActive('/experiences') ? 'text-primary font-semibold' : 'text-white'} transition hover:text-gray-400`} href={'/experiences'}>Experiences</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;