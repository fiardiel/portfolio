'use client'

import { HiMiniCodeBracket } from 'react-icons/hi2';
import { Button } from '@nextui-org/react';
import { GrHomeRounded } from "react-icons/gr";
import { BsBriefcase } from "react-icons/bs";
import { FiBriefcase, FiPhone, FiStar } from 'react-icons/fi';
import { scrollToElementById, scrollToTop } from '@/utils';
import React, { useEffect, useState } from 'react';

interface menuItem {
    name: string
    href: string
    icon: React.ReactNode
}

const SmallNavbar = () => {
    const menuItems: menuItem[] = [
        { name: 'Home', href: 'top', icon: <GrHomeRounded size={22} /> },
        { name: 'Projects', href: 'projects', icon: <HiMiniCodeBracket size={25} /> },
        { name: 'Experiences', href: 'experiences', icon: <FiBriefcase size={25} /> },
    ]
    const [activeSection, setActiveSection] = useState('top');

	useEffect(() => {
		const sections = document.querySelectorAll('section');
		const options = {
			root: null,
			rootMargin: '-40% 0px -40% 0px',
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
        <div className='p-3 px-6 md:hidden sticky bottom-0 z-50'>
            <div className={`transition duration-500 p-3 border border-white/10 shadow-lg bg-neutral-900/60 backdrop-blur-md rounded-b-lg`}>
                <div className="flex justify-between items-center px-3 p-1">
                    {menuItems.map((item, index) => (
                        <Button key={index} isIconOnly onPress={item.name === 'Home' ? scrollToTop : () => scrollToElementById(item.href)} className={`bg-transparent ${activeSection === item.href ? 'bg-primary' : ''}`}>
                            {item.icon && React.cloneElement(item.icon as React.ReactElement<any>, { className: activeSection === item.href ? 'text-white fill-white' : '' })}
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SmallNavbar;