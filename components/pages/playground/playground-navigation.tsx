"use client";

import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Box } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navigation({ className }: { className?: string }) {
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const pathname = usePathname();
   const router = useRouter();

   const isHtmlEditor = pathname.includes("/html-editor");
   const currentValue = isHtmlEditor ? "HTML Editor" : "JS/TS Editor";

   const handleLanguageChange = (value: string | null) => {
      if (!value) return;
      if (value === "HTML Editor") {
         router.push("/playground/html-editor");
      } else {
         router.push("/playground");
      }
   };

   useEffect(() => {
      if (isMobileMenuOpen) {
         document.body.style.overflow = "hidden";
      } else {
         document.body.style.overflow = "";
      }
      return () => {
         document.body.style.overflow = "";
      };
   }, [isMobileMenuOpen]);

   return (
      <>
         <nav className="sticky top-0 w-full z-50 transition-all duration-300 border-b border-transparent bg-transparent backdrop-blur-none py-5">
            <div
               className={cn(
                  "relative max-w-8xl mx-auto px-6 flex items-center justify-between",
                  className,
               )}
            >
               {/* Left Side: Logo & Language Selector */}
               <div className="flex items-center gap-6">
                  {/* Logo */}
                  <Link
                     href="/"
                     className="relative z-50"
                     onClick={() => setIsMobileMenuOpen(false)}
                  >
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
               </div>

               {/* Right Side: Actions */}
               <div className="flex items-center gap-6">
                  {/* Language Selector */}
                  <div>
                     <Select
                        value={currentValue}
                        onValueChange={handleLanguageChange}
                     >
                        <SelectTrigger className="w-35 h-9 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-[13px] font-medium text-zinc-300 focus:ring-zinc-700 transition-all shadow-sm">
                           <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-zinc-900 ring-border">
                           <SelectItem
                              value="JS/TS Editor"
                              className="text-[13px] py-2 text-zinc-400 focus:text-white focus:bg-zinc-800 cursor-pointer"
                           >
                              JS/TS Editor
                           </SelectItem>
                           <SelectItem
                              value="HTML Editor"
                              className="text-[13px] py-2 text-zinc-400 focus:text-white focus:bg-zinc-800 cursor-pointer"
                           >
                              HTML Editor
                           </SelectItem>
                        </SelectContent>
                     </Select>
                  </div>

                  <Link
                     href="/signup"
                     className="bg-zinc-100 hover:bg-white text-zinc-950 px-4 py-2 rounded text-xs font-semibold tracking-wide transition-colors uppercase"
                  >
                     Log in
                  </Link>
               </div>
            </div>
         </nav>
         {/* Mobile Menu Overlay */}
         <AnimatePresence>
            {isMobileMenuOpen && (
               <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: -20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="fixed inset-0 z-40 bg-zinc-950/95 backdrop-blur-xl flex flex-col pt-28 px-6 md:hidden"
               >
                  <div className="flex flex-col space-y-6 h-[calc(100%-2rem)]">
                     <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                           delay: 0.25,
                           type: "tween",
                           ease: "easeOut",
                           duration: 0.4,
                        }}
                        className="pt-8 flex flex-col gap-4 mt-auto"
                     >
                        <Link
                           href="/login"
                           onClick={() => setIsMobileMenuOpen(false)}
                           className="w-full text-center py-3 text-zinc-300 hover:text-white font-medium border border-zinc-800 rounded-sm hover:bg-zinc-900 transition-all"
                        >
                           Log in
                        </Link>
                     </motion.div>
                  </div>
               </motion.div>
            )}
         </AnimatePresence>
      </>
   );
}
