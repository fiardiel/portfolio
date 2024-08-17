'use client'

import { Button } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IoIosCall } from "react-icons/io";

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
        { name: "Home", path: "#top" },
        { name: "Skills", path: "#skills" },
        // { name: "Profile", path: "/profile" },
        // { name: "Projects", path: "/projects" },
        // { name: "Experiences", path: "/experiences" },
        // { name: "Contact", path: "/contact" },
    ]


    return (
        <div className={`w-auto flex justify-center sticky md:top-0 z-50 pt-2 lg:pt-5`}>
            <nav className={`rounded-full hidden md:flex lg:inline-flex border-1 md:w-full lg:w-auto z-48 items-center h-20 transition duration-500 ${!isScrolled ? 'bg-transparent border-transparent' : 'border-white/5 shadow-xl bg-neutral-900/40 backdrop-blur-md'}  lg:justify-center`}>
                <div className="w-full lg:w-[1024px] flex justify-between px-6">
                    <div className="z-50 items-center justify-between hidden gap-4 md:flex">
                        {menuItems.map((item, index) => (
                            <Link key={index} href={item.path}>
                                <p className={`${isActive(item.path) ? 'text-primary font-semibold' : 'text-white underline-animation underline-animation-blue'}`}>{item.name}</p>
                            </Link>
                        ))}
                    </div>
                    <div className="z-50 logo">
                        <Button
                            as={Link}
                            href="/"
                            className="bg-black shadow-lg transition-transform- hover:shadow-primary/50 hover:-translate-y-1 hover:scale-105 border-2 border-primary/30"
                            variant="bordered"
                            radius="full"
                            size="md"
                        >
                            Contact Me <IoIosCall/>
                        </Button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;