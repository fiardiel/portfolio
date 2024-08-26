import React from 'react'
import Projects from '@/components/home/projects/Projects';
import { Image } from '@nextui-org/react';
import Top from '@/components/home/top/Top';
import Skills from './components/home/skills/Skills';
import Contact from './components/home/contact/Contact';

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-between px-6 lg:px-0">
      <div className='w-full h-screen opacity-40 z-0 absolute top-0'>
        <Image removeWrapper src='/images/topbg.jpeg' className='hidden md:block object-cover h-full w-full' />
        <Image removeWrapper src='/images/smalltopbg.jpg' className='md:hidden h-full w-full' />
        <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-transparent to-black/80" style={{ backgroundImage: 'linear-gradient(to top, transparent 75%, black 100%)' }}></div>
      </div>
      <div className="flex flex-col justify-center md:flex md:items-center w-full lg:w-[1024px] lg:px-6 pb-10 z-[1]">
        <Top className='relative flex items-center h-screen' />
        <Skills className='md:my-20 md:mt-10 mt-10' />
        <Projects className='md:my-20 mt-28' />
      </div>
      <div className='flex justify-center relative w-full'>
        <Image removeWrapper src='/images/umbra-12.jpeg' className='scale-x-[-1] absolute top-0 hidden md:block object-scale-down md:object-cover h-full w-full xl:w-[90%] z-0' />
        <Contact className='lg:w-[1024px] lg:px-6 md:my-20 mb-28 mt-28 z-10' />
      </div>
    </main>
  );
}
