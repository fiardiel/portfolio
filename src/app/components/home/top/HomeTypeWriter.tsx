'use client'

import React from 'react'
import TypeIt from 'typeit-react';


interface HomeTypeWriterProps { 
    className?: string;
}

const HomeTypeWriter: React.FC<HomeTypeWriterProps> = ({className}) => {
    return (
        <div className={`text-4xl text-start ${className}`}>
            <TypeIt options={{
                strings: [
                    "Full-stack Developer",
                    "CS Student @UI"
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
