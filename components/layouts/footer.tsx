import { Box, Disc, Github, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
   return (
      <footer className="bg-background border-t border-white/5 py-12 px-6">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
            <div>
               <div className="flex items-center gap-2 mb-4">
                  <Box className="w-5 h-5 text-white" />
                  <span className="font-bold tracking-tight text-white text-sm">
                     OBFUSCATOR.IO
                  </span>
               </div>
               <p className="text-zinc-500 text-xs mb-6">
                  © 2024. All rights reserved.
               </p>
               <div className="flex gap-4">
                  <Link
                     href="#"
                     className="text-zinc-500 hover:text-white transition-colors"
                  >
                     <Github className="w-4 h-4" />
                  </Link>
                  <Link
                     href="#"
                     className="text-zinc-500 hover:text-white transition-colors"
                  >
                     <Twitter className="w-4 h-4" />
                  </Link>
                  <Link
                     href="#"
                     className="text-zinc-500 hover:text-white transition-colors"
                  >
                     <Disc className="w-4 h-4" />
                  </Link>
               </div>
            </div>

            <div className="flex gap-16">
               <div>
                  <h4 className="text-white font-medium text-xs mb-4">
                     Product
                  </h4>
                  <ul className="space-y-2 text-xs text-zinc-500">
                     <li>
                        <Link
                           href="#"
                           className="hover:text-blue-400 transition-colors"
                        >
                           Features
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="#"
                           className="hover:text-blue-400 transition-colors"
                        >
                           API
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="#"
                           className="hover:text-blue-400 transition-colors"
                        >
                           Pricing
                        </Link>
                     </li>
                  </ul>
               </div>
               <div>
                  <h4 className="text-white font-medium text-xs mb-4">
                     Resources
                  </h4>
                  <ul className="space-y-2 text-xs text-zinc-500">
                     <li>
                        <Link
                           href="#"
                           className="hover:text-blue-400 transition-colors"
                        >
                           Documentation
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="#"
                           className="hover:text-blue-400 transition-colors"
                        >
                           Blog
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="#"
                           className="hover:text-blue-400 transition-colors"
                        >
                           Community
                        </Link>
                     </li>
                  </ul>
               </div>
               <div>
                  <h4 className="text-white font-medium text-xs mb-4">Legal</h4>
                  <ul className="space-y-2 text-xs text-zinc-500">
                     <li>
                        <Link
                           href="#"
                           className="hover:text-blue-400 transition-colors"
                        >
                           Privacy
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="#"
                           className="hover:text-blue-400 transition-colors"
                        >
                           Terms
                        </Link>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </footer>
   );
}
