"use client";

import { motion } from "motion/react";
import { useState } from "react";

const characters = "0123456789ABCDEF";

interface GridItem {
   char: string;
   duration: number;
}

export function VmSynthesisVisual() {
   const [grid] = useState<GridItem[]>(() => {
      // Generate a static grid of hex chars
      return Array.from({ length: 64 }, () => ({
         char:
            characters.charAt(Math.floor(Math.random() * characters.length)) +
            characters.charAt(Math.floor(Math.random() * characters.length)),
         duration: Math.random() * 2 + 1,
      }));
   });

   return (
      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
         {/* Background Grid */}
         <div className="absolute inset-0 grid grid-cols-8 gap-1 p-4 opacity-20 mask-[linear-gradient(to_bottom,white,transparent)]">
            {grid.map((item, i) => (
               <motion.div
                  key={i}
                  className="flex items-center justify-center text-[10px] font-mono text-blue-500/50"
                  animate={{
                     opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                     duration: item.duration,
                     repeat: Infinity,
                     ease: "easeInOut",
                  }}
               >
                  {item.char}
               </motion.div>
            ))}
         </div>

         {/* Central Core */}
         <div className="relative z-10">
            <motion.div
               className="w-24 h-24 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center backdrop-blur-sm"
               animate={{
                  scale: [1, 1.1, 1],
                  borderColor: [
                     "rgba(59, 130, 246, 0.3)",
                     "rgba(59, 130, 246, 0.6)",
                     "rgba(59, 130, 246, 0.3)",
                  ],
               }}
               transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
               }}
            >
               <motion.div
                  className="w-16 h-16 rounded-full bg-blue-500/20 border border-blue-500/50"
                  animate={{
                     rotate: 360,
                     scale: [1, 0.9, 1],
                  }}
                  transition={{
                     rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                     scale: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                     },
                  }}
               />
            </motion.div>

            {/* Orbiting particles */}
            <motion.div
               className="absolute inset-0 rounded-full border border-dashed border-blue-400/20"
               animate={{ rotate: -360 }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
         </div>
      </div>
   );
}
