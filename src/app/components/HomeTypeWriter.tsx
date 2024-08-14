'use client'

import React from 'react'
import TypeIt from 'typeit-react';


interface HomeTypeWriterProps { 
    className?: string;
}

const HomeTypeWriter: React.FC<HomeTypeWriterProps> = ({className}) => {
    return (
        <div className={`text-3xl md:text-start text-center ${className}`}>
            <TypeIt options={{
                strings: [
                    "I'm Rafi Ardiel Erinaldi 👋",
                    "I'm a Full-stack Developer 💻",
                    "I'm a CSUI2022 Student 🎓"
                ],
                loop: true,
                speed: 40,
                deleteSpeed: 30,
                html: false,
                breakLines: false,
                nextStringDelay: 4000,
                loopDelay: [4000, 4000, 4000],
            }}>
            </TypeIt>
        </div>
    )
}

export default HomeTypeWriter
