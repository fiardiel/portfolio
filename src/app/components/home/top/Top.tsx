import React from 'react'
import About from './About'
import Skills from './Skills'

interface TopProps {
  className?: string
}

const Top = ({className}: TopProps) => {
  return (
    <section id='top' className={className}>
      <About />
      <Skills className='mt-10'/>
    </section>
  )
}

export default Top
