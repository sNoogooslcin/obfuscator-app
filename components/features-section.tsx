"use client";

import { AlertTriangle, ArrowUpRight, Cpu, EyeOff, Split } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { AntiTamperVisual } from "./features/anti-tamper-visual";
import { ConsoleAnimation } from "./features/console-animation";
import { ControlFlowVisual } from "./features/control-flow-visual";

const VmSynthesisVisual = dynamic(
   () =>
      import("./features/vm-synthesis-visual").then(
         (mod) => mod.VmSynthesisVisual
      ),
   { ssr: false }
);

export default function FeaturesSection() {
   return (
      <section className="relative z-10 py-24 px-6 bg-background">
         <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
               <div>
                  <h2 className="text-3xl font-semibold text-white tracking-tight mb-2">
                     Defense in Depth
                  </h2>
                  <p className="text-zinc-500">
                     Advanced features designed to frustrate reverse engineering
                     attempts.
                  </p>
               </div>
               <Link
                  href="#"
                  className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1"
               >
                  View full specs <ArrowUpRight className="w-3 h-3" />
               </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
               {/* Feature 1: Large */}
               <div className="md:col-span-2 rounded-xl bg-[#101010] border border-border/30 p-8 relative overflow-hidden group transition-colors">
                  <VmSynthesisVisual />

                  <div className="h-full flex flex-col justify-between relative z-10">
                     <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-white mb-4">
                        <Cpu className="w-5 h-5" />
                     </div>
                     <div>
                        <h3 className="text-xl font-medium text-white mb-2">
                           Virtual Machine Synthesis
                        </h3>
                        <p className="text-zinc-400 text-sm leading-relaxed max-w-md">
                           The core of our protection. We compile your
                           JavaScript into a custom bytecode format, then embed
                           a unique interpreter that executes it. No two
                           obfuscations generate the same VM.
                        </p>
                     </div>
                  </div>
               </div>

               {/* Feature 2 */}
               <div className="md:col-span-1 rounded-xl bg-[#101010] border border-border/30 p-8 relative overflow-hidden group transition-colors">
                  <AntiTamperVisual />
                  <div className="h-full flex flex-col justify-between relative z-10">
                     <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-white mb-4">
                        <EyeOff className="w-5 h-5" />
                     </div>
                     <div>
                        <h3 className="text-lg font-medium text-white mb-2">
                           Anti-Tamper
                        </h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                           Code that detects modification and self-destructs or
                           hangs if tampered with.
                        </p>
                     </div>
                  </div>
               </div>

               {/* Feature 3 */}
               <div className="md:col-span-1 rounded-xl bg-[#101010] border border-border/30 p-8 relative overflow-hidden group transition-colors">
                  <ControlFlowVisual />
                  <div className="h-full flex flex-col justify-between relative z-10">
                     <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-white mb-4">
                        <Split className="w-5 h-5" />
                     </div>
                     <div>
                        <h3 className="text-lg font-medium text-white mb-2">
                           Control Flow
                        </h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                           Flattens logic structure, turning clean loops into a
                           maze of jumps.
                        </p>
                     </div>
                  </div>
               </div>

               {/* Feature 4: Large */}
               <div className="md:col-span-2 rounded-xl bg-[#101010] border border-border/30 p-8 relative overflow-hidden group transition-colors flex items-center">
                  {/* <IrreversibleVisual /> */}
                  <div className="grid md:grid-cols-2 gap-8 items-center w-full relative z-10">
                     <div>
                        <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-white mb-4">
                           <AlertTriangle className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-medium text-white mb-2">
                           Irreversible by Design
                        </h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                           Unlike minification, VM obfuscation destroys the
                           original syntax tree structure. There is no mapping
                           back to the original source code, making automated
                           deobfuscators ineffective.
                        </p>
                     </div>
                     <ConsoleAnimation />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
