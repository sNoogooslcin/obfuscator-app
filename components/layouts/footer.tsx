import { Box, Github, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
   return (
      <footer className="bg-background pt-16 pb-8 px-6">
         <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
               <div className="lg:col-span-2">
                  <div className="flex items-center gap-2 mb-4">
                     <Box className="w-5 h-5 text-white" />
                     <span className="font-bold tracking-tight text-white text-sm">
                        OBFUSCATOR.IO
                     </span>
                  </div>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-8 max-w-xs">
                     The standard for JavaScript security and code protection
                     since 2016. Trusted by millions of builds daily.
                  </p>
                  <div className="flex gap-4">
                     <Link
                        href="#"
                        className="text-zinc-500 hover:text-white transition-colors"
                     >
                        <Github className="w-5 h-5" />
                     </Link>
                     <Link
                        href="#"
                        className="text-zinc-500 hover:text-white transition-colors"
                     >
                        <Twitter className="w-5 h-5" />
                     </Link>
                  </div>
               </div>

               <div className="lg:col-span-1 lg:col-start-4">
                  <h4 className="text-white font-bold text-xs tracking-wider uppercase mb-6">
                     Product
                  </h4>
                  <ul className="space-y-4 text-sm text-zinc-500">
                     <li>
                        <Link
                           href="#"
                           className="hover:text-cyan-400 transition-colors"
                        >
                           Security Engine
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="#"
                           className="hover:text-cyan-400 transition-colors"
                        >
                           Performance
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="#"
                           className="hover:text-cyan-400 transition-colors"
                        >
                           Enterprise Plan
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="#"
                           className="hover:text-cyan-400 transition-colors"
                        >
                           Release Notes
                        </Link>
                     </li>
                  </ul>
               </div>

               <div className="lg:col-span-1">
                  <h4 className="text-white font-bold text-xs tracking-wider uppercase mb-6">
                     Resources
                  </h4>
                  <ul className="space-y-4 text-sm text-zinc-500">
                     <li>
                        <Link
                           href="#"
                           className="hover:text-cyan-400 transition-colors"
                        >
                           Documentation
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="#"
                           className="hover:text-cyan-400 transition-colors"
                        >
                           CLI Guide
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="#"
                           className="hover:text-cyan-400 transition-colors"
                        >
                           Plugin API
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="#"
                           className="hover:text-cyan-400 transition-colors"
                        >
                           Support
                        </Link>
                     </li>
                  </ul>
               </div>

               <div className="lg:col-span-1">
                  <h4 className="text-white font-bold text-xs tracking-wider uppercase mb-6">
                     Security
                  </h4>
                  <ul className="space-y-4 text-sm text-zinc-500">
                     <li>
                        <Link
                           href="#"
                           className="hover:text-cyan-400 transition-colors"
                        >
                           Security Policy
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="#"
                           className="hover:text-cyan-400 transition-colors"
                        >
                           Compliance
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="#"
                           className="hover:text-cyan-400 transition-colors"
                        >
                           Bug Bounty
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="#"
                           className="hover:text-cyan-400 transition-colors"
                        >
                           Status
                        </Link>
                     </li>
                  </ul>
               </div>
            </div>

            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
               <p className="text-zinc-600 text-xs font-medium">
                  © {new Date().getFullYear()} Obfuscator.io. All rights
                  reserved.
               </p>
               <div className="flex items-center gap-8">
                  <Link
                     href="#"
                     className="text-zinc-600 hover:text-zinc-400 text-xs font-medium transition-colors"
                  >
                     Privacy
                  </Link>
                  <Link
                     href="#"
                     className="text-zinc-600 hover:text-zinc-400 text-xs font-medium transition-colors"
                  >
                     Terms
                  </Link>
                  <div className="flex items-center gap-2 px-3 py-1 bg-emerald-950/30 border border-emerald-900/50 rounded-full">
                     <span className="relative flex size-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                     </span>
                     <span className="text-[10px] font-medium text-emerald-500 tracking-wider">
                        OPERATIONAL
                     </span>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
}
