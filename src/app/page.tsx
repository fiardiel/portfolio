import { Button } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import HomeTypeWriter from "./components/HomeTypeWriter";
import { Image } from "@nextui-org/image"
import { MdArrowOutward } from "react-icons/md";
import { Poppins, Space_Mono, JetBrains_Mono } from 'next/font/google';
import React from 'react'

const spaceMono = Space_Mono({ subsets: ["latin"], weight: '700' });
const poppins = Poppins({ subsets: ["latin"], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900' ] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: ['100', '200', '300', '400', '500', '600', '700', '800' ] });

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between px-6">
      <div className="flex flex-col justify-center md:flex md:items-center w-full lg:w-[1024px] px-0 lg:px-6 py-10 pt-16">
        <div className="md:grid md:grid-cols-[auto,1fr] md:auto-cols-min md:gap-20 flex flex-col-reverse items-center">
          <div className="flex flex-col items-center md:items-start w-full md:w-full">

            <h1 className={`font-sans text-4xl font-medium`}>Hello<span className="text-blue-600">, World!</span></h1>
            <HomeTypeWriter className="mt-2"/>
            
            <p className="text-md font-light text-gray-400 md:text-start text-center mb-6 mt-2">
              A Full-stack Developer specializing in Next.js and
              Django Rest Framework / Springboot. Currently a Web
              Developer Intern at <Link underline="always" href="https://www.linkedin.com/company/samakta-mitra---itaas/" className="decoration-2 underline hover:decoration-red-500 text-gray-400"> PT. Samakta Mitra</Link> 
            </p>

            <div className="flex justify-center md:justify-start gap-4 flex-wrap">
              <Button as={Link} href={`/profile`} variant="bordered" className="shadow-lg shadow-blue-500/50 transition hover:scale-105 duration-150 hover:-translate-y-1 decoration-blue-500">
                About me <MdArrowOutward />
              </Button>
              <Button as={Link} href={`/projects`} variant="bordered" className="shadow-lg shadow-blue-500/50 transition hover:scale-105 duration-150 hover:-translate-y-1 decoration-blue-500">
                My Projects <MdArrowOutward />
              </Button>
              <Button as={Link} href={`/experiences`} variant="bordered" className="shadow-lg shadow-blue-500/50 transition hover:scale-105 duration-150 hover:-translate-y-1 decoration-blue-500">
                Experiences <MdArrowOutward />
              </Button>
            </div>

          </div>
          <div className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] mb-10 md:mb-0 opacity-70 grayscale transition hover:grayscale-0 hover:opacity-100">
            <Image
              src="/images/rafibulet.png"
              alt="rafi ardiel"
              className="rounded-full shadow-2xl shadow-white/50"
            ></Image>
          </div>
        </div>
      </div>
    </main>
  );
}
