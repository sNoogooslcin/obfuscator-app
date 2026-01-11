"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Box } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

export default function SignupPage() {
   return (
      <motion.div
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5, ease: "easeOut" }}
         className="flex flex-col gap-6"
      >
         <div className="flex flex-col items-center gap-2 text-center">
            <Link href="/">
               <div className="flex items-center gap-2.5 group mt-3 cursor-pointer">
                  <div className="relative w-6 h-6 flex items-center justify-center">
                     <div className="absolute inset-0 bg-blue-500/20 rounded-md blur-sm group-hover:bg-blue-500/40 transition-all"></div>
                     <Box className="size-6 text-white relative z-10" />
                  </div>
                  <span className="font-bold tracking-tight text-white text-base">
                     OBFUSCATOR<span className="text-zinc-500">.IO</span>
                  </span>
               </div>
            </Link>
            <h1 className="text-3xl font-bold tracking-tight mt-4">
               Create an account
            </h1>
            <p className="text-muted-foreground text-sm">
               Enter your information to create an account
            </p>
         </div>

         <div className="grid gap-6">
            <div className="grid gap-6">
               <Button
                  variant="outline"
                  className="w-full gap-2 h-10 bg-[#131313] border-border/80 hover:bg-white/10 hover:text-white transition-colors"
               >
                  <FaGithub className="w-4 h-4" />
                  Sign up with GitHub
               </Button>

               <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                     <span className="w-full border-t border-border/80" />
                  </div>
                  <div className="relative flex justify-center text-xs">
                     <span className="bg-background px-2 text-muted-foreground">
                        Or continue with
                     </span>
                  </div>
               </div>

               <form className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                     <div className="grid gap-2">
                        <Label htmlFor="first-name">First name</Label>
                        <Input
                           id="first-name"
                           placeholder="John"
                           required
                           className="bg-[#131313] h-10 border-border/80 focus:border-accent/50 focus:ring-accent/20"
                        />
                     </div>
                     <div className="grid gap-2">
                        <Label htmlFor="last-name">Last name</Label>
                        <Input
                           id="last-name"
                           placeholder="Doe"
                           required
                           className="bg-[#131313] h-10 border-border/80 focus:border-accent/50 focus:ring-accent/20"
                        />
                     </div>
                  </div>
                  <div className="grid gap-2">
                     <Label htmlFor="email">Email</Label>
                     <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        required
                        className="bg-[#131313] h-10 border-border/80 focus:border-accent/50 focus:ring-accent/20"
                     />
                  </div>
                  <div className="grid gap-2">
                     <Label htmlFor="password">Password</Label>
                     <Input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        required
                        className="bg-[#131313] h-10 border-border/80 focus:border-accent/50 focus:ring-accent/20"
                     />
                  </div>
                  <Button
                     type="submit"
                     className="w-full h-10 bg-accent/80 hover:bg-accent/90 shadow-lg shadow-accent/20"
                  >
                     Create Account
                  </Button>
               </form>
            </div>
         </div>

         <p className="px-8 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
               href="/login"
               className="underline underline-offset-4 hover:text-white transition-colors"
            >
               Sign in
            </Link>
         </p>
      </motion.div>
   );
}
