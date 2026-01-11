import { Cloud, Gamepad2, Lock, Puzzle } from "lucide-react";

export default function UseCasesSection() {
   return (
      <section className="relative z-10 py-24 bg-[#020203]">
         <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
               <div>
                  <h2 className="text-3xl font-semibold text-white tracking-tight mb-2">
                     Ecosystem Security
                  </h2>
                  <p className="text-zinc-400 text-sm">
                     Tailored protection vectors for specific industry
                     requirements.
                  </p>
               </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-background border border-border/50 rounded-xl overflow-hidden">
               {/* Sector 1 */}
               <div className="group bg-border/40 p-8 hover:bg-border/50 transition-colors relative">
                  <div className="mb-6 inline-flex items-center justify-center size-9 rounded-lg bg-zinc-900 border border-border/50 text-zinc-400 group-hover:text-blue-400 group-hover:border-blue-500/30 transition-all">
                     <Lock className="size-5" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">
                     Licensed Software
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-4">
                     Protect license validation and premium features with
                     tamper-resistant bytecode.
                  </p>
                  <span className="text-[10px] font-medium font-mono text-zinc-600 group-hover:text-blue-500 transition-colors">
                     LICENSED_SOFTWARE
                  </span>
               </div>

               {/* Sector 2 */}
               <div className="group bg-border/40 p-8 hover:bg-border/50 transition-colors relative">
                  <div className="mb-6 inline-flex items-center justify-center size-9 rounded-lg bg-zinc-900 border border-border/50 text-zinc-400 group-hover:text-purple-400 group-hover:border-purple-500/30 transition-all">
                     <Gamepad2 className="size-5" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">
                     HTML5 Gaming
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-4">
                     Prevent asset ripping, score spoofing, and logic hooking in
                     WebGL experiences.
                  </p>
                  <span className="text-[10px] font-medium font-mono text-zinc-600 group-hover:text-purple-500 transition-colors">
                     ANTI_CHEAT_Active
                  </span>
               </div>

               {/* Sector 3 */}
               <div className="group bg-border/40 p-8 hover:bg-border/50 transition-colors relative">
                  <div className="mb-6 inline-flex items-center justify-center size-9 rounded-lg bg-zinc-900 border border-border/50 text-zinc-400 group-hover:text-orange-400 group-hover:border-orange-500/30 transition-all">
                     <Cloud className="size-5" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">
                     SaaS Applications
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-4">
                     Protect proprietary frontend logic and business algorithms
                     from competitive analysis.
                  </p>
                  <span className="text-[10px] font-medium font-mono text-zinc-600 group-hover:text-orange-500 transition-colors">
                     FRONTEND_PROTECTION
                  </span>
               </div>

               {/* Sector 4 */}
               <div className="group bg-border/40 p-8 hover:bg-border/50 transition-colors relative">
                  <div className="mb-6 inline-flex items-center justify-center size-9 rounded-lg bg-zinc-900 border border-border/50 text-zinc-400 group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-all">
                     <Puzzle className="size-5" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">
                     Browser Extensions
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-4">
                     Defend against cloning and unauthorized modifications to
                     safeguard your intellectual property.
                  </p>
                  <span className="text-[10px] font-medium font-mono text-zinc-600 group-hover:text-emerald-500 transition-colors">
                     IP_PROTECTION
                  </span>
               </div>
            </div>
         </div>
      </section>
   );
}
