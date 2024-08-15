import React from 'react'
import Top from '@/components/home/top/Top';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between px-6">
      <div className="flex flex-col justify-center md:flex md:items-center w-full lg:w-[1024px] px-0 lg:px-6 py-10 pt-16">
        <Top/>
      </div>
    </main>
  );
}
