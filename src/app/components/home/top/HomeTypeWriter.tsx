'use client'

import React from 'react'
import TypeIt from 'typeit-react';


interface HomeTypeWriterProps { 
    className?: string;
}

const HomeTypeWriter: React.FC<HomeTypeWriterProps> = ({className}) => {
    return (
        <div className={`${className}`}>
            <TypeIt options={{
                strings: [
                    "Software Engineer",
                    "Data Scientist"
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
