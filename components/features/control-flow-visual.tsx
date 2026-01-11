"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function ControlFlowVisual() {
   const [nodes, setNodes] = useState([
      { id: 1, x: 20, y: 20 },
      { id: 2, x: 80, y: 20 },
      { id: 3, x: 80, y: 80 },
      { id: 4, x: 20, y: 80 },
   ]);

   useEffect(() => {
      const interval = setInterval(() => {
         setNodes((prev) =>
            prev.map((n) => ({
               ...n,
               x: Math.random() * 60 + 20, // Keep within 20-80% to avoid edge clipping
               y: Math.random() * 60 + 20,
            }))
         );
      }, 3000);
      return () => clearInterval(interval);
   }, []);

   return (
      <div className="absolute inset-0 pointer-events-none opacity-20">
         <svg className="w-full h-full">
            {/* Connections */}
            <motion.line
               x1={`${nodes[0].x}%`}
               y1={`${nodes[0].y}%`}
               x2={`${nodes[1].x}%`}
               y2={`${nodes[1].y}%`}
               className="stroke-blue-500"
               strokeWidth="1.5"
               animate={{
                  x1: `${nodes[0].x}%`,
                  y1: `${nodes[0].y}%`,
                  x2: `${nodes[1].x}%`,
                  y2: `${nodes[1].y}%`,
               }}
               transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.line
               x1={`${nodes[1].x}%`}
               y1={`${nodes[1].y}%`}
               x2={`${nodes[2].x}%`}
               y2={`${nodes[2].y}%`}
               className="stroke-blue-500"
               strokeWidth="1.5"
               animate={{
                  x1: `${nodes[1].x}%`,
                  y1: `${nodes[1].y}%`,
                  x2: `${nodes[2].x}%`,
                  y2: `${nodes[2].y}%`,
               }}
               transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.line
               x1={`${nodes[2].x}%`}
               y1={`${nodes[2].y}%`}
               x2={`${nodes[3].x}%`}
               y2={`${nodes[3].y}%`}
               className="stroke-blue-500"
               strokeWidth="1.5"
               animate={{
                  x1: `${nodes[2].x}%`,
                  y1: `${nodes[2].y}%`,
                  x2: `${nodes[3].x}%`,
                  y2: `${nodes[3].y}%`,
               }}
               transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.line
               x1={`${nodes[3].x}%`}
               y1={`${nodes[3].y}%`}
               x2={`${nodes[0].x}%`}
               y2={`${nodes[0].y}%`}
               className="stroke-blue-500"
               strokeWidth="1.5"
               animate={{
                  x1: `${nodes[3].x}%`,
                  y1: `${nodes[3].y}%`,
                  x2: `${nodes[0].x}%`,
                  y2: `${nodes[0].y}%`,
               }}
               transition={{ duration: 2, ease: "easeInOut" }}
            />
            {/* Cross connection */}
            <motion.line
               x1={`${nodes[0].x}%`}
               y1={`${nodes[0].y}%`}
               x2={`${nodes[2].x}%`}
               y2={`${nodes[2].y}%`}
               className="stroke-blue-500/50"
               strokeDasharray="4 4"
               strokeWidth="1"
               animate={{
                  x1: `${nodes[0].x}%`,
                  y1: `${nodes[0].y}%`,
                  x2: `${nodes[2].x}%`,
                  y2: `${nodes[2].y}%`,
               }}
               transition={{ duration: 2, ease: "easeInOut" }}
            />
         </svg>

         {/* Node Dots */}
         {nodes.map((node) => (
            <motion.div
               key={node.id}
               className="absolute w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
               animate={{ left: `${node.x}%`, top: `${node.y}%` }}
               transition={{ duration: 2, ease: "easeInOut" }}
               style={{ translateX: "-50%", translateY: "-50%" }}
            />
         ))}
      </div>
   );
}
