import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: React.ReactNode;
  width?: "fit-content" | "100%"
}

const Reveal = ({ children, width = 'fit-content' }: Props) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {children}
    </motion.div>
    // TODO: Add slide thingy
  )
}

export default Reveal
