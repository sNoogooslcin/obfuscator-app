import { Box, Gamepad2, Puzzle, Wallet } from "lucide-react";

export default function UseCasesSection() {
   return (
      <section className="relative z-10 py-24 bg-surfaceHighlight/30 border-t border-white/5">
         <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-semibold text-white tracking-tight mb-12 text-center">
               Securing the Ecosystem
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
               {/* Item */}
               <div className="group flex items-start gap-4 p-5 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                  <div className="mt-1 w-8 h-8 rounded bg-zinc-800 flex items-center justify-center shrink-0">
                     <Gamepad2 className="w-4 h-4 text-zinc-300" />
                  </div>
                  <div>
                     <h3 className="text-white font-medium text-sm mb-1">
                        HTML5 Gaming
                     </h3>
                     <p className="text-zinc-500 text-xs leading-relaxed">
                        Prevent logic tampering, score spoofing, and asset theft
                        in browser-based games.
                     </p>
                  </div>
               </div>

               {/* Item */}
               <div className="group flex items-start gap-4 p-5 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                  <div className="mt-1 w-8 h-8 rounded bg-zinc-800 flex items-center justify-center shrink-0">
                     <Wallet className="w-4 h-4 text-zinc-300" />
                  </div>
                  <div>
                     <h3 className="text-white font-medium text-sm mb-1">
                        FinTech & Crypto
                     </h3>
                     <p className="text-zinc-500 text-xs leading-relaxed">
                        Obscure client-side validation logic and wallet
                        interaction algorithms.
                     </p>
                  </div>
               </div>

               {/* Item */}
               <div className="group flex items-start gap-4 p-5 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                  <div className="mt-1 w-8 h-8 rounded bg-zinc-800 flex items-center justify-center shrink-0">
                     <Box className="w-4 h-4 text-zinc-300" />
                  </div>
                  <div>
                     <h3 className="text-white font-medium text-sm mb-1">
                        Node.js Backends
                     </h3>
                     <p className="text-zinc-500 text-xs leading-relaxed">
                        Protect proprietary algorithms when deploying code to
                        on-premise client environments.
                     </p>
                  </div>
               </div>

               {/* Item */}
               <div className="group flex items-start gap-4 p-5 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                  <div className="mt-1 w-8 h-8 rounded bg-zinc-800 flex items-center justify-center shrink-0">
                     <Puzzle className="w-4 h-4 text-zinc-300" />
                  </div>
                  <div>
                     <h3 className="text-white font-medium text-sm mb-1">
                        Browser Extensions
                     </h3>
                     <p className="text-zinc-500 text-xs leading-relaxed">
                        Secure your intellectual property in publicly accessible
                        extension packages.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
