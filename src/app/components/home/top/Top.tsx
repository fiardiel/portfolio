import React from 'react'
import Summary from './Summary'
import Skills from './Skills'

interface TopProps {
  className?: string
}

const Top = ({className}: TopProps) => {
  return (
    <section id='top' className={className}>
      <Summary />
      <Skills className='mt-14'/>
    </section>
  )
}

export default Top
