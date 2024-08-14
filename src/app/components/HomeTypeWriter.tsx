'use client'

import { Poppins, Space_Mono, JetBrains_Mono } from 'next/font/google';
import React from 'react'
import TypeIt from 'typeit-react';

const spaceMono = Space_Mono({ subsets: ["latin"], weight: '700' });
const poppins = Poppins({ subsets: ["latin"], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900' ] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: ['100', '200', '300', '400', '500', '600', '700', '800' ] });

const HomeTypeWriter = () => {
    return (
        <div className={`${jetbrainsMono.className} mb-4 text-3xl font-semibold md:text-start text-center`}>
            <TypeIt options={{
                strings: [
                    "<h3> Hi, I'm Rafi Ardiel! 👋 </h3>",
                    "<p> Full-stack Developer 💻 </p> ",
                    "<p> Computer Science @Fasilkom UI 🎓 </p>",
                ],
                loop: true,
                speed: 40,
                deleteSpeed: 30,
                html: false,
                breakLines: false,
                nextStringDelay: 2000,
                loopDelay: 3000,
            }}>
            </TypeIt>
        </div>
    )
}

export default HomeTypeWriter
