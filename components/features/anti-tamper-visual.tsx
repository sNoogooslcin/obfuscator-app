"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function AntiTamperVisual() {
   const [isGlitching, setIsGlitching] = useState(false);

   useEffect(() => {
      const triggerGlitch = () => {
         setIsGlitching(true);
         setTimeout(() => setIsGlitching(false), 200 + Math.random() * 300);
      };

      const interval = setInterval(() => {
         if (Math.random() > 0.7) {
            triggerGlitch();
         }
      }, 2000);

      return () => clearInterval(interval);
   }, []);

   return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
         {/* Background Pulse */}
         <motion.div
            // className={`absolute inset-0 opacity-20 transition-colors duration-200 ${
            //    isGlitching ? "bg-red-500/20" : "bg-blue-500/5"
            // }`}
            className={`absolute inset-0 opacity-20 transition-colors duration-200 bg-blue-500/5`}
         />

         {/* Grid Pattern */}
         <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
               backgroundImage:
                  "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
               backgroundSize: "20px 20px",
            }}
         />

         {/* Scanning Line */}
         <motion.div
            className={`absolute left-0 w-full h-0.5 ${
               isGlitching
                  ? "bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]"
                  : "bg-blue-400/50 shadow-[0_0_10px_rgba(96,165,250,0.5)]"
            }`}
            animate={{
               top: ["0%", "100%", "0%"],
            }}
            transition={{
               duration: isGlitching ? 0.2 : 4,
               repeat: Infinity,
               ease: "linear",
            }}
         />

         {/* Glitch Artifacts */}
         {/* {isGlitching && (
            <>
               <div className="absolute top-1/4 left-0 w-full h-1 bg-red-500/30" />
               <div className="absolute top-3/4 left-0 w-full h-2 bg-red-500/30" />
               <div className="absolute inset-0 mix-blend-color-dodge bg-red-900/20" />
            </>
         )} */}
      </div>
   );
}
