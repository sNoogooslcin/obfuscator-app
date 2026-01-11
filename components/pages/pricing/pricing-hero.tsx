"use client";

import { Terminal } from "lucide-react";

export default function PricingHero() {
   const scrollToPricing = () => {
      const element = document.getElementById("pricing-plans");
      if (element) {
         element.scrollIntoView({ behavior: "smooth" });
      }
   };

   return (
      <section className="relative z-10 pt-28 pb-20 px-6">
         <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 mb-8">
               <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
               </span>
               <span className="text-xs font-medium text-blue-400 tracking-wide uppercase">
                  VM PROTECTION ACTIVE
               </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white mb-6 leading-[1.05]">
               Simple, transparent pricing <br />
               <span className="text-transparent bg-clip-text bg-linear-to-br from-white via-zinc-400 to-zinc-600">
                  for your JavaScript
               </span>
            </h1>

            <p className="font-inter text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
               Advanced virtualization and multi-layered protection for your
               source code. Choose the plan that fits your security requirements
               and scale.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
               <button
                  onClick={scrollToPricing}
                  className="flex-1 bg-zinc-100 hover:bg-white text-zinc-950 h-12 py-2 px-4 rounded flex items-center justify-center gap-2 font-medium transition-colors cursor-pointer"
               >
                  Get Started
               </button>
               <button className="flex-1 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 h-12 py-2 px-4 rounded flex items-center justify-center gap-2 font-medium transition-colors cursor-pointer">
                  <Terminal className="w-4 h-4" />
                  Documentation{" "}
               </button>
            </div>
         </div>
      </section>
   );
}
