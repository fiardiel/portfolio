"use client";

import { NextUIProvider } from "@nextui-org/react";
import React from "react";

interface ProvidersProps {
  font?: string;
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ font, children }) => {
  return (
    <NextUIProvider className={font + " overscroll-none scroll-smooth"}>
      {children}
    </NextUIProvider>
  );
};

export default Providers;
