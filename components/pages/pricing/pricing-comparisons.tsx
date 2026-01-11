import {
   FEATURE_COMPARISON,
   TECHNICAL_COMPARISON,
} from "@/data/pricing-comparisons";
import {
   CheckIcon,
   CpuIcon,
   FileCodeIcon,
   UnlockIcon,
   XIcon,
} from "lucide-react";

export default function PricingComparisons() {
   return (
      <section className="relative z-10 py-24 px-6">
         <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
               <h2 className="text-2xl font-semibold text-white tracking-tight mb-2">
                  Standard vs VM Obfuscation
               </h2>
               <p className="text-zinc-400 text-sm">
                  Choose the right level of protection for your JavaScript code
               </p>
            </div>

            {/* Cards Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
               {/* Standard */}
               <div className="p-8 rounded-2xl bg-variant border border-border/50 flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                     <div className="flex items-center gap-3">
                        <div className="p-2 rounded bg-zinc-800 text-zinc-400">
                           <FileCodeIcon className="w-5 h-5" />
                        </div>
                        <div>
                           <h3 className="text-base font-medium text-white">
                              Standard obfuscation
                           </h3>
                           <div className="text-[10px] font-bold text-zinc-500 mt-0.5 bg-zinc-800/50 inline-block px-1.5 rounded">
                              FREE
                           </div>
                        </div>
                     </div>
                     <UnlockIcon className="w-4 h-4 text-zinc-600" />
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                     Open-source obfuscation that runs entirely in your browser.
                     Good for basic protection and quick transformations.
                  </p>
                  <div className="space-y-2 mt-auto">
                     <div className="flex gap-2 text-xs text-zinc-500">
                        <CheckIcon className="w-4 h-4 shrink-0" /> Syntax-level
                        transformations
                     </div>
                     <div className="flex gap-2 text-xs text-zinc-500">
                        <CheckIcon className="w-4 h-4 shrink-0" /> Output still
                        resembles JavaScript structure
                     </div>
                     <div className="flex gap-2 text-xs text-zinc-500">
                        <CheckIcon className="w-4 h-4 shrink-0" /> Logic flow
                        partially recoverable
                     </div>
                  </div>
               </div>

               {/* VM */}
               <div className="relative p-8 rounded-2xl bg-[#070e1e] border border-accent/10 flex flex-col overflow-hidden">
                  <div className="absolute top-0 right-0 p-4">
                     <span className="text-[9px] font-bold bg-blue-600 text-white px-2 py-0.5 rounded shadow">
                        RECOMMENDED
                     </span>
                  </div>
                  <div className="flex justify-between items-start mb-6">
                     <div className="flex items-center gap-3">
                        <div className="p-2 rounded bg-blue-900/20 text-blue-400">
                           <CpuIcon className="w-5 h-5" />
                        </div>
                        <div>
                           <h3 className="text-base font-medium text-white">
                              VM Protection
                           </h3>
                           <div className="text-[10px] font-bold text-blue-400 mt-0.5 bg-blue-900/20 inline-block px-1.5 rounded border border-blue-500/20">
                              PRO
                           </div>
                        </div>
                     </div>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                     Advanced bytecode virtualization with custom VM runtime.
                     Maximum protection against reverse engineering.
                  </p>
                  <div className="space-y-2 mt-auto">
                     <div className="flex gap-2 text-xs text-white">
                        <CheckIcon className="w-4 h-4 text-blue-500 shrink-0" />{" "}
                        Code fully transformed to bytecode
                     </div>
                     <div className="flex gap-2 text-xs text-white">
                        <CheckIcon className="w-4 h-4 text-blue-500 shrink-0" />{" "}
                        No trace of original source code remains
                     </div>
                     <div className="flex gap-2 text-xs text-white">
                        <CheckIcon className="w-4 h-4 text-blue-500 shrink-0" />{" "}
                        Executed by custom VM runtime
                     </div>
                  </div>
               </div>
            </div>

            {/* Detailed Comparison Table */}
            <div className="mb-20">
               <h3 className="text-lg font-semibold text-white mb-6">
                  Feature Comparison
               </h3>
               <div className="overflow-x-auto rounded-xl border border-white/5 bg-surface/50">
                  <table className="w-full text-xs text-left border-collapse">
                     <thead>
                        <tr className="bg-white/5">
                           <th className="text-sm font-medium text-zinc-300 w-1/3">
                              Feature
                           </th>
                           <th className="text-sm font-medium text-zinc-500 text-center w-1/3">
                              Standard
                           </th>
                           <th className="text-sm font-medium text-white text-center w-1/3">
                              VM Protection
                           </th>
                        </tr>
                     </thead>
                     <tbody className="text-zinc-400">
                        {FEATURE_COMPARISON.map((item) => (
                           <tr key={item.feature}>
                              <td className="text-sm">{item.feature}</td>
                              <td className="text-center">
                                 {item.standard ? (
                                    <CheckIcon className="size-4 inline text-emerald-500" />
                                 ) : (
                                    <XIcon className="size-4 inline text-zinc-600" />
                                 )}
                              </td>
                              <td className="text-center">
                                 {item.vm ? (
                                    <CheckIcon className="size-4 inline text-emerald-500" />
                                 ) : (
                                    <XIcon className="size-4 inline text-zinc-600" />
                                 )}
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>

            {/* Technical Comparison */}
            <div>
               <h3 className="text-lg font-semibold text-white mb-6">
                  Detailed Comparison
               </h3>
               <div className="overflow-x-auto rounded-xl border border-white/5 bg-surface/50">
                  <table className="w-full text-xs text-left border-collapse">
                     <thead>
                        <tr className="bg-white/5">
                           <th className="text-sm font-medium text-zinc-300 w-1/3">
                              Aspect
                           </th>
                           <th className="text-sm font-medium text-zinc-500 w-1/3">
                              Standard
                           </th>
                           <th className="text-sm font-medium text-white w-1/3">
                              VM Protection
                           </th>
                        </tr>
                     </thead>
                     <tbody className="text-zinc-400">
                        {TECHNICAL_COMPARISON.map((item) => (
                           <tr key={item.aspect}>
                              <td className="text-sm">{item.aspect}</td>
                              <td className="text-sm">{item.standard}</td>
                              <td className="text-accent text-sm">{item.vm}</td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </section>
   );
}
