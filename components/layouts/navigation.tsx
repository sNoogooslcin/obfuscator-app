"use client";

import { Logo } from "@/components/brand/logo";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navigation({ className }: { className?: string }) {
   const [scrolled, setScrolled] = useState(false);
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         setScrolled(window.scrollY > 150);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

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
         <nav
            className={`sticky top-0 w-full z-50 transition-all duration-300 ${
               scrolled
                  ? "border-b border-white/5 bg-background/80 backdrop-blur-md py-4"
                  : "border-b border-transparent bg-transparent backdrop-blur-none py-6"
            }`}
         >
            <div
               className={cn(
                  "relative max-w-7xl mx-auto px-6 flex items-center justify-between",
                  className,
               )}
            >
               {/* Logo */}
               <Link
                  href="/"
                  className="relative z-50"
                  onClick={() => setIsMobileMenuOpen(false)}
               >
                  <Logo />
               </Link>

               {/* Desktop Links */}
               <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
                  <Link
                     href="/pricing"
                     className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                  >
                     Pricing
                  </Link>
                  <Link
                     href="/docs"
                     className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                  >
                     Documentation
                  </Link>
                  <Link
                     href="/playground"
                     className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                  >
                     Playground
                  </Link>
               </div>

               {/* Actions */}
               <div className="hidden md:flex items-center gap-6">
                  <Link
                     href="/login"
                     className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                  >
                     Log in
                  </Link>
                  <Link
                     href="/signup"
                     className="bg-zinc-100 hover:bg-white text-zinc-950 px-4 py-2 rounded text-xs font-semibold tracking-wide transition-colors uppercase"
                  >
                     Start Protecting
                  </Link>
               </div>

               {/* Mobile Menu Button */}
               <div className="md:hidden relative z-50">
                  <button
                     onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                     className="flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none"
                  >
                     <motion.span
                        animate={
                           isMobileMenuOpen
                              ? { rotate: 45, y: 8 }
                              : { rotate: 0, y: 0 }
                        }
                        transition={{
                           type: "tween",
                           ease: "easeInOut",
                           duration: 0.2,
                        }}
                        className="w-6 h-0.5 bg-white block rounded-full"
                     ></motion.span>
                     <motion.span
                        animate={
                           isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }
                        }
                        transition={{
                           type: "tween",
                           ease: "easeInOut",
                           duration: 0.2,
                        }}
                        className="w-6 h-0.5 bg-white block rounded-full"
                     ></motion.span>
                     <motion.span
                        animate={
                           isMobileMenuOpen
                              ? { rotate: -45, y: -8 }
                              : { rotate: 0, y: 0 }
                        }
                        transition={{
                           type: "tween",
                           ease: "easeInOut",
                           duration: 0.2,
                        }}
                        className="w-6 h-0.5 bg-white block rounded-full"
                     ></motion.span>
                  </button>
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
                     {[
                        { href: "/pricing", label: "Pricing" },
                        { href: "#", label: "Documentation" },
                        { href: "/playground", label: "Playground" },
                     ].map((link, i) => (
                        <motion.div
                           key={link.label}
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           transition={{
                              delay: 0.1 + i * 0.05,
                              type: "tween",
                              ease: "easeOut",
                              duration: 0.4,
                           }}
                        >
                           <Link
                              href={link.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="text-2xl font-semibold text-zinc-300 hover:text-white transition-colors block"
                           >
                              {link.label}
                           </Link>
                        </motion.div>
                     ))}

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
                        <Link
                           href="/signup"
                           onClick={() => setIsMobileMenuOpen(false)}
                           className="w-full text-center py-3 bg-white text-zinc-950 font-semibold rounded-sm hover:bg-zinc-200 transition-colors"
                        >
                           START PROTECTING
                        </Link>
                     </motion.div>
                  </div>
               </motion.div>
            )}
         </AnimatePresence>
      </>
   );
}
