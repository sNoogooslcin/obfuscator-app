import { AlertTriangle, ArrowUpRight, Cpu, EyeOff, Split } from "lucide-react";
import Link from "next/link";

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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
               {/* Feature 1: Large */}
               <div className="md:col-span-2 rounded-xl bg-surface border border-white/5 p-8 relative overflow-hidden group hover:border-white/10 transition-colors">
                  <div className="absolute right-0 top-0 w-64 h-64 bg-linear-to-br from-blue-500/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

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
               <div className="md:col-span-1 rounded-xl bg-surface border border-white/5 p-8 relative overflow-hidden group hover:border-white/10 transition-colors">
                  <div className="h-full flex flex-col justify-between">
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
               <div className="md:col-span-1 rounded-xl bg-surface border border-white/5 p-8 relative overflow-hidden group hover:border-white/10 transition-colors">
                  <div className="h-full flex flex-col justify-between">
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
               <div className="md:col-span-2 rounded-xl bg-surface border border-white/5 p-8 relative overflow-hidden group hover:border-white/10 transition-colors flex items-center">
                  <div className="grid md:grid-cols-2 gap-8 items-center w-full">
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
                     <div className="hidden md:block bg-[#050507] rounded-lg border border-white/5 p-4 font-mono text-xs text-zinc-500 select-none opacity-70">
                        <div className="flex gap-2 mb-2">
                           <span className="w-3 h-3 rounded-full bg-red-500/20"></span>
                           <span className="w-3 h-3 rounded-full bg-yellow-500/20"></span>
                        </div>
                        <div className="space-y-1">
                           <p>
                              <span className="text-purple-400">Error:</span>{" "}
                              Unknown OpCode
                           </p>
                           <p>at VirtualMachine.exec (vm.js:402)</p>
                           <p>at Generator.next (&lt;anonymous&gt;)</p>
                           <p className="text-zinc-600">
                              ... Stack trace hidden
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
