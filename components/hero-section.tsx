import { Shield, Terminal } from "lucide-react";

export default function HeroSection() {
   return (
      <section className="relative z-10 pt-32 pb-20 px-6 border-b border-white/5">
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
               Invisible Armor for <br />
               <span className="text-transparent bg-clip-text bg-linear-to-br from-white via-zinc-400 to-zinc-600">
                  Your JavaScript
               </span>
            </h1>

            <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
               Transform readable source code into a custom virtual machine
               instruction set. The definitive standard for client-side logic
               protection.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
               <button className="flex-1 bg-zinc-100 hover:bg-white text-zinc-950 h-12 py-2 px-4 rounded flex items-center justify-center gap-2 font-medium transition-colors cursor-pointer">
                  <Shield className="w-4 h-4" />
                  Secure Code Now
               </button>
               <button className="flex-1 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 h-12 py-2 px-4 rounded flex items-center justify-center gap-2 font-medium transition-colors cursor-pointer">
                  <Terminal className="w-4 h-4" />
                  View API Docs
               </button>
            </div>

            {/* Abstract Visual */}
            <div className="mt-20 relative">
               <div className="absolute inset-x-0 -top-px h-px bg-linear-to-r from-transparent via-blue-500/50 to-transparent"></div>
               <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5 border border-white/5 bg-[#050507] rounded-lg overflow-hidden">
                  <div className="p-6 flex flex-col items-center gap-2 group hover:bg-white/2 transition-colors cursor-default">
                     <span className="text-2xl font-mono text-white tracking-tighter">
                        100%
                     </span>
                     <span className="text-xs text-zinc-500 uppercase tracking-widest font-semibold">
                        Custom OpCodes
                     </span>
                  </div>
                  <div className="p-6 flex flex-col items-center gap-2 group hover:bg-white/2 transition-colors cursor-default">
                     <span className="text-2xl font-mono text-white tracking-tighter">
                        0ms
                     </span>
                     <span className="text-xs text-zinc-500 uppercase tracking-widest font-semibold">
                        Decryption Lag
                     </span>
                  </div>
                  <div className="p-6 flex flex-col items-center gap-2 group hover:bg-white/2 transition-colors cursor-default">
                     <span className="text-2xl font-mono text-white tracking-tighter">
                        Poly
                     </span>
                     <span className="text-xs text-zinc-500 uppercase tracking-widest font-semibold">
                        Morphic Output
                     </span>
                  </div>
                  <div className="p-6 flex flex-col items-center gap-2 group hover:bg-white/2 transition-colors cursor-default">
                     <span className="text-2xl font-mono text-white tracking-tighter">
                        Node
                     </span>
                     <span className="text-xs text-zinc-500 uppercase tracking-widest font-semibold">
                        & Browser Support
                     </span>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
