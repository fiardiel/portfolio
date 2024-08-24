'use client'

import { scrollToElementById, scrollToTop } from "@/utils";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosCall } from "react-icons/io";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 180)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    const menuItems = [
        { name: "Home", path: "top" },
        { name: "Projects", path: "projects" },
        { name: "Experiences", path: "experiences" },
    ]

    const [activeSection, setActiveSection] = useState('top');

    const isActive = (id: string) => {
        return activeSection === id;
    }

	useEffect(() => {
		const sections = document.querySelectorAll('section');
		const options = {
			root: null,
			rootMargin: '-40% 0px 40% 0px',
			threshold: 0,
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setActiveSection(entry.target.id);
				}
			});
		}, options);

		sections.forEach((section) => {
			observer.observe(section);
		});

		return () => {
			sections.forEach((section) => {
				observer.unobserve(section);
			});
		};
	}, []);

    return (
        <div className={`w-full hidden md:flex justify-center sticky top-0 z-50 pt-0 lg:pt-3`}>
            <nav className={`rounded-lg md:rounded-t-none md:rounded-b-lg lg:rounded-lg flex border-1 border-t-0 w-full lg:w-auto z-48 items-center h-20 transition duration-500 ${!isScrolled ? 'bg-transparent border-transparent' : 'border-white/5 shadow-xl bg-neutral-900/60 backdrop-blur-md'}  lg:justify-center`}>
                <div className="w-full lg:w-[1024px] md:px-6 flex justify-between items-center">
                    <div className="w-full md:w-auto">
                        <Button onPress={scrollToTop} disableRipple className="text-2xl font-semibold p-0 bg-transparent gap-1">
                            <span className="text-primary">@</span> <span>fiardiel</span>
                        </Button>
                    </div>
                    <div className="z-50 items-center justify-between hidden gap-6 md:flex">
                        {menuItems.map((item, index) =>
                        (
                            <div key={index} className="w-min h-min">
                                <Button disableRipple onPress={item.name === 'Home' ? scrollToTop : () => scrollToElementById(item.path)} className={`text-lg p-0 bg-transparent min-w-0 min-h-0 rounded-none underline-animation underline-animation-blue ${isActive(item.path) ? 'text-primary' : ''}`}>
                                    <span>{item.name}</span>
                                </Button>
                            </div>
                        )
                        )}
                    </div>
                    <div className="z-50 logo">
                        <Button
                            as={Link}
                            href="/"
                            className="transition-transform- hover:shadow-primary/50 border-2 border-primary/30"
                            color="primary"
                            radius="sm"
                            size="md"
                        >
                            Contact Me <IoIosCall size={20} />
                        </Button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;