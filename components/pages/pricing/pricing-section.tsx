"use client";

import { PRICING_PLANS } from "@/data/pricing-plans";
import { cn } from "@/lib/utils";
import NumberFlow from "@number-flow/react";
import { ArrowRight, CheckCircle2, Info } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export default function PricingSection() {
   const [isYearly, setIsYearly] = useState(false);

   return (
      <section id="pricing-plans" className="relative z-10 py-12 px-6 md:px-12">
         <div className="max-w-8xl mx-auto">
            <div className="flex flex-col items-center justify-center mb-16">
               <div className="p-4 rounded-lg bg-blue-900/10 border border-blue-500/20 max-w-3xl text-center mb-8">
                  <div className="flex items-center gap-3">
                     <Info className="size-10 text-blue-400 mt-0.5" />
                     <p className="text-sm text-zinc-400 text-left">
                        <strong className="text-white">
                           All limits apply to VM (Virtualization) obfuscation
                           only.
                        </strong>{" "}
                        Standard obfuscation runs entirely in your browser and
                        is always free with no limits. Usage is measured by
                        input file size with a minimum of 0.1 MB per job.
                     </p>
                  </div>
               </div>

               <div className="bg-variant border border-border/50 p-1 rounded-full flex items-center relative">
                  <button
                     onClick={() => setIsYearly(false)}
                     className={cn(
                        "px-6 py-2 rounded-full text-sm font-medium transition-all relative cursor-pointer"
                     )}
                  >
                     {!isYearly && (
                        <motion.span
                           layoutId="pricing-toggle"
                           className="absolute inset-0 bg-blue-600 shadow-lg rounded-full"
                        />
                     )}
                     <span className="relative z-10">Monthly</span>
                  </button>
                  <button
                     onClick={() => setIsYearly(true)}
                     className={cn(
                        "px-6 py-2 rounded-full text-sm font-medium transition-all relative cursor-pointer"
                     )}
                  >
                     {isYearly && (
                        <motion.span
                           layoutId="pricing-toggle"
                           className="absolute inset-0 bg-blue-600 shadow-lg rounded-full"
                        />
                     )}
                     <span className="relative z-10">Yearly</span>
                     <span
                        className={cn(
                           "text-[10px] ml-1 relative z-10",
                           isYearly ? "text-blue-200" : "text-emerald-400"
                        )}
                     >
                        -20%
                     </span>
                  </button>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {PRICING_PLANS.map((plan) => {
                  const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
                  const isFree = price === 0;

                  return (
                     <div
                        key={plan.name}
                        className={`relative p-6 rounded-2xl transition-all flex flex-col ${
                           plan.isPopular
                              ? "bg-[#040813] border border-accent/10 shadow-[0_0_50px_-20px_rgba(59,130,246,0.1)]"
                              : "bg-variant border border-white/5 hover:border-white/10"
                        }`}
                     >
                        {plan.isPopular && (
                           <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full border border-blue-400 shadow-lg uppercase tracking-wide">
                              Most Popular
                           </div>
                        )}

                        <div className="flex items-center gap-2 mb-4">
                           <div
                              className={`p-2 rounded-lg border ${
                                 plan.isPopular
                                    ? "bg-blue-500/10 border-blue-500/20"
                                    : "bg-white/5 border-white/10"
                              }`}
                           >
                              <plan.icon
                                 className={`w-4 h-4 ${
                                    plan.isPopular
                                       ? "text-blue-400"
                                       : "text-zinc-400"
                                 }`}
                              />
                           </div>
                           <span className="text-xs font-medium text-white uppercase tracking-wider">
                              {plan.name}
                           </span>
                           {plan.isBeta && (
                              <span className="text-[9px] bg-yellow-500/10 text-yellow-500 px-1.5 py-0.5 rounded border border-yellow-500/20">
                                 BETA
                              </span>
                           )}
                        </div>

                        <p className="text-xs text-zinc-500 mb-6">
                           {plan.description}
                        </p>

                        <div
                           className={cn(
                              "flex items-end gap-1 mb-2",
                              isFree && "flex-col items-start mb-0"
                           )}
                        >
                           <div className="text-4xl font-semibold text-white">
                              {isFree ? (
                                 "Free"
                              ) : (
                                 <NumberFlow
                                    value={price}
                                    prefix="$"
                                    format={{ maximumFractionDigits: 0 }}
                                 />
                              )}
                           </div>
                           {!isFree && (
                              <div className="text-xs text-zinc-500 mb-2.5">
                                 {plan.priceSub}
                              </div>
                           )}
                           {isFree && (
                              <p className="text-[10px] text-zinc-500 uppercase tracking-wide">
                                 {plan.priceSub}
                              </p>
                           )}
                        </div>

                        <div className="space-y-3 flex-1 mt-6">
                           {plan.features.map((feature, idx) => (
                              <div
                                 key={idx}
                                 className={`flex gap-3 text-xs ${
                                    plan.isPopular
                                       ? "text-zinc-300"
                                       : "text-zinc-400"
                                 }`}
                              >
                                 <CheckCircle2
                                    className={`w-4 h-4 shrink-0 ${
                                       plan.isPopular
                                          ? "text-blue-500"
                                          : "text-zinc-600"
                                    }`}
                                 />
                                 {feature}
                              </div>
                           ))}
                        </div>

                        <button
                           className={`mt-8 w-full py-2.5 rounded-lg border text-sm font-medium transition-colors flex items-center justify-center gap-2 group ${
                              plan.isPopular
                                 ? "border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 text-white"
                                 : "border-white/10 bg-white/5 hover:bg-white/10 text-white"
                           }`}
                        >
                           {plan.buttonText}
                           {!isFree && (
                              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                           )}
                        </button>
                     </div>
                  );
               })}
            </div>
         </div>
      </section>
   );
}
