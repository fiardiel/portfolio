'use client'

import React from 'react'
import TypeIt from 'typeit-react';


interface HomeTypeWriterProps { 
    className?: string;
}

const HomeTypeWriter: React.FC<HomeTypeWriterProps> = ({className}) => {
    return (
        <div className={`text-4xl md:text-[32px] md:px-0 leading-[40px] lg:text-5xl md:text-start text-center ${className}`}>
            <TypeIt options={{
                strings: [
                    "I'm Rafi Ardiel Erinaldi 👋",
                    "I'm a Full-stack Developer",
                    "I'm a CS Student @UI 🎓"
                ],
                loop: true,
                speed: 40,
                deleteSpeed: 30,
                html: false,
                breakLines: false,
                lifeLike: true,
            }}>
            </TypeIt>
        </div>
    )
}

export default HomeTypeWriter
