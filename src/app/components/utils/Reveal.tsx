import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: React.ReactNode;
  width?: "fit-content" | "100%"
}

const Reveal = ({ children, width = '100%' }: Props) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })  
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView])

  return (
    <motion.div
      ref={ref}
      style={ { width, position: 'relative' } }
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

export default Reveal
