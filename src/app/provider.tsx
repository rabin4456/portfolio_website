"use client";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";
import { useFollowPointer } from "./hooks/useFollowPointer";
import { motion } from "framer-motion";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const ref = React.useRef(null);
  const { x, y } = useFollowPointer(ref);
  console.log(x, y, "x,y====");
  return (
    <NextThemesProvider {...props}>
      <motion.div
        ref={ref}
        className='absolute flex justify-center items-center'
        animate={{ x, y }}
        transition={{
          type: "spring",
          duration: 0.001,
          // stiffness: 300,
          // delay:0.001,
          // restDelta:0,
          // damping:20,
          // mass:0.5,
          velocity: 5,
          // restSpeed:0.5,
          // restDelta:0.5,
          bounce: 0,
        }}
      >
        <div className='relative animate-ping h-20 w-20 bg-primary-500 z-[99999]  rounded-full opacity-[0.3]' />

        <div className='absolute left-9 h-2 w-2 bg-primary-500  rounded-full z-[99999] ' />
      </motion.div>
      {children}
    </NextThemesProvider>
  );
}
