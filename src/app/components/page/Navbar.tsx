'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
    const pathname = usePathname();

    const isActive = (path: string) => {
        if (path !== '/') {
            return pathname.startsWith(path);
        }
        return pathname === path;
    };

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

    const menuItems = [
        { name: "Home", path: "/" },
        { name: "Profile", path: "/profile" },
        { name: "Projects", path: "/projects" },
        { name: "Experiences", path: "/experiences" }
    ]


    return (
        <div className={`w-auto flex justify-center sticky md:top-0 z-50 lg:pt-8`}>
            <nav className={`lg:rounded-xl rounded-b-xl hidden md:flex lg:inline-flex border-1 md:w-full lg:w-auto z-48 items-center h-20 transition duration-500 ${!isScrolled ? 'bg-transparent border-transparent' : 'border-white/10 shadow-xl bg-neutral-800/30 backdrop-blur-xl'}  lg:justify-center`}>
                <div className="w-full lg:w-[1024px] flex justify-between px-6">
                    <div className="logo z-50">
                        <Link href={'/'}>
                            <p className={`text-2xl font-semibold`}>
                                <span className="text-primary font-sans">@ </span>
                                <span className="text-white">fiardiel</span>
                            </p>
                        </Link>
                    </div>
                    <div className="md:flex justify-between gap-4 items-center hidden z-50">
                        {menuItems.map((item, index) => (
                            <Link key={index} href={item.path}>
                                <p className={`${isActive(item.path) ? 'text-primary font-semibold' : 'text-white underline-animation underline-animation-blue'}`}>{item.name}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;