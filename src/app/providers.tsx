"use client"

import { NextUIProvider } from '@nextui-org/react'
import React from 'react'

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </div>
  )
}

export default Providers
