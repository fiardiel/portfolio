'use client'

import { Poppins, Space_Mono, JetBrains_Mono } from 'next/font/google';
import React from 'react'
import Typewriter from 'typewriter-effect';

const spaceMono = Space_Mono({ subsets: ["latin"], weight: '700' });
const poppins = Poppins({ subsets: ["latin"], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900' ] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: ['100', '200', '300', '400', '500', '600', '700', '800' ] });

const HomeTypeWriter = () => {
    return (
        <div className={`${jetbrainsMono.className} mb-4 text-3xl font-semibold md:text-start text-center`}>
            <Typewriter options={{
                strings: [
                    " < Hi, I'm Rafi Ardiel! />",
                    " < Full-stack Developer />",
                    " < Computer Science @Fasilkom UI />",
                ],
                autoStart: true,
                loop: true,
                delay: 40,
                deleteSpeed: 20,
            }}>
            </Typewriter>
        </div>
    )
}

export default HomeTypeWriter
