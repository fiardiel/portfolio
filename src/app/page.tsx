import React from 'react'
import Top from '@/components/home/top/Top';
import Skills from '@/components/home/skills/Skills';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen px-6">
      <div className="flex flex-col justify-center md:flex md:items-center w-full lg:w-[1024px] px-0 lg:px-6 py-10 md:pt-16 pt-5">
        <Top />
        <Skills className='mt-20'/>
      </div>
    </main>
  );
}
