"use client";

import { Box } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navigation() {
   const [scrolled, setScrolled] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         setScrolled(window.scrollY > 150);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   return (
      <nav
         className={`sticky top-0 w-full z-50 transition-all duration-300 ${
            scrolled
               ? "border-b border-white/5 bg-background/80 backdrop-blur-md py-4"
               : "border-b border-transparent bg-transparent backdrop-blur-none py-6"
         }`}
      >
         <div className="relative max-w-7xl mx-auto px-6 flex items-center justify-between">
            {/* Logo */}
            <Link href="/">
               <div className="flex items-center gap-2.5 group cursor-pointer">
                  <div className="relative w-6 h-6 flex items-center justify-center">
                     <div className="absolute inset-0 bg-blue-500/20 rounded-md blur-sm group-hover:bg-blue-500/40 transition-all"></div>
                     <Box className="w-5 h-5 text-white relative z-10" />
                  </div>
                  <span className="font-bold tracking-tight text-white text-sm">
                     OBFUSCATOR<span className="text-zinc-500">.IO</span>
                  </span>
               </div>
            </Link>

            {/* Links */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
               <Link
                  href="/pricing"
                  className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
               >
                  Pricing
               </Link>
               <Link
                  href="#"
                  className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
               >
                  Documentation
               </Link>
               <Link
                  href="#"
                  className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
               >
                  Playground
               </Link>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-6">
               <Link
                  href="#"
                  className="text-sm font-medium text-zinc-400 hover:text-white transition-colors hidden sm:block"
               >
                  Log in
               </Link>
               <Link
                  href="#"
                  className="bg-zinc-100 hover:bg-white text-zinc-950 px-4 py-2 rounded text-xs font-semibold tracking-wide transition-colors uppercase"
               >
                  Start Protecting
               </Link>
            </div>
         </div>
      </nav>
   );
}
