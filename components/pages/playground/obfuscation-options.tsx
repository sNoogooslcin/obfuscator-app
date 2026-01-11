"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Info, Settings, Sliders } from "lucide-react";
import { FaSave } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";

// Mock data for options
const OPTION_GROUPS = [
   {
      title: "Basic Options",
      description: "Fundamental obfuscation settings",
      options: [
         {
            id: "compact",
            label: "Compact Code",
            description: "Remove whitespace and comments",
            type: "toggle",
            default: true,
         },
         {
            id: "controlFlowFlattening",
            label: "Control Flow Flattening",
            description: "Enables code control flow flattening.",
            type: "toggle",
            default: false,
         },
         {
            id: "numbersToExpressions",
            label: "Numbers To Expressions",
            description: "Converts numbers to complex expressions",
            type: "toggle",
            default: false,
         },
         {
            id: "simplify",
            label: "Simplify",
            description: "Simplify code",
            type: "toggle",
            default: true,
         },
      ],
   },
   {
      title: "Strings",
      description: "String array and transformation settings",
      options: [
         {
            id: "stringArray",
            label: "String Array",
            description:
               "Remove string literals and place them in a special array",
            type: "toggle",
            default: true,
         },
         {
            id: "stringArrayRotate",
            label: "Rotate String Array",
            description:
               "Shift the string array by a fixed and random amount of places",
            type: "toggle",
            default: true,
         },
         {
            id: "stringArrayShuffle",
            label: "Shuffle String Array",
            description: "Randomly shuffle the string array items",
            type: "toggle",
            default: true,
         },
      ],
   },
   {
      title: "Identifiers",
      description: "Variable and function naming",
      options: [
         {
            id: "renameGlobals",
            label: "Rename Globals",
            description: "Rename global variables and functions coverage",
            type: "toggle",
            default: false,
         },
         {
            id: "renameProperties",
            label: "Rename Properties",
            description:
               "Rename property names including properties on browser specific objects",
            type: "toggle",
            default: false,
         },
      ],
   },
];

export function ObfuscationOptions() {
   return (
      <div className="flex flex-col h-full bg-neutral-900/70">
         {/* Header */}
         <div className="sticky top-0 z-10 h-16 flex items-center justify-between px-6 border-b border-border">
            <div className="flex items-center gap-3">
               <Sliders className="h-5 w-5 text-blue-500" />
               <div className="flex flex-col gap-2">
                  <h2 className="text-sm font-bold text-white uppercase tracking-wider">
                     Configuration
                  </h2>
                  <p className="text-xs text-secondary/70 -mt-2">
                     Customize how your code is transformed
                  </p>
               </div>
            </div>
            <div className="flex items-center gap-3">
               <button className="text-secondary hover:text-white transition-colors">
                  <IoMdDownload className="h-4 w-4" />
               </button>
               <button className="text-secondary hover:text-white transition-colors">
                  <FaSave className="h-4 w-4" />
               </button>
               <div className="h-4 w-px bg-border" />
               <button className="text-xs font-medium text-blue-400 hover:text-blue-300 transition-colors">
                  Reset All
               </button>
            </div>
         </div>

         <div className="relative flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
            {/* VM Promo */}
            <div className="relative overflow-hidden rounded-xl border border-blue-500/20 bg-blue-900/10 p-5 group hover:border-blue-500/30 transition-colors">
               <div className="flex justify-between items-start">
                  <div className="space-y-2">
                     <div className="flex items-center gap-2">
                        <h3 className="text-base font-bold text-white">
                           VM Obfuscation
                        </h3>
                        <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wide">
                           Pro
                        </span>
                     </div>
                     <p className="text-xs text-blue-200/60 max-w-60 leading-relaxed">
                        Transform your code into virtual machine bytecode for
                        maximum protection against reverse engineering.
                     </p>
                  </div>
                  <div className="bg-blue-500/10 p-2 rounded-lg">
                     <ShieldCheck className="h-8 w-8 text-blue-400" />
                  </div>
               </div>

               <div className="flex gap-3 mt-4">
                  <Button
                     size="sm"
                     className="bg-blue-600 hover:bg-blue-500 text-white h-8 text-xs font-medium px-4"
                  >
                     Get VM Protection
                  </Button>
                  <Button
                     size="sm"
                     variant="outline"
                     className="h-8 text-xs bg-white/5 border-white/10 hover:bg-white/10 hover:text-white text-secondary"
                  >
                     Learn More
                  </Button>
               </div>
            </div>

            {/* Options */}
            <div className="space-y-8">
               {OPTION_GROUPS.map((group) => (
                  <div key={group.title} className="space-y-4">
                     <div className="flex items-center gap-2 pb-2 border-b border-border">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                        <h4 className="text-xs font-bold text-secondary uppercase tracking-wider">
                           {group.title}
                        </h4>
                     </div>

                     <div className="bg-variant rounded-xl border border-border/40">
                        {group.options.map((option, idx) => (
                           <div
                              key={option.id}
                              className={cn(
                                 "flex items-center justify-between p-4 hover:bg-white/2 transition-colors",
                                 idx !== group.options.length - 1 &&
                                    "border-b border-border/40"
                              )}
                           >
                              <div className="space-y-0.5">
                                 <label
                                    htmlFor={option.id}
                                    className="text-sm font-medium text-gray-300 cursor-pointer select-none"
                                 >
                                    {option.label}
                                 </label>
                                 {option.description && (
                                    <div className="flex items-center gap-1.5 text-[10px] text-gray-500">
                                       {option.description}
                                       <Info className="h-3 w-3 text-gray-600 hover:text-gray-400 cursor-help" />
                                    </div>
                                 )}
                              </div>

                              {/* Toggle Switch */}
                              <label className="relative inline-flex items-center cursor-pointer">
                                 <input
                                    type="checkbox"
                                    id={option.id}
                                    className="sr-only peer"
                                    defaultChecked={option.default as boolean}
                                 />
                                 <div className="w-9 h-5 bg-border peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-gray-500 after:border-gray-500 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600 peer-checked:after:bg-white"></div>
                              </label>
                           </div>
                        ))}
                     </div>
                  </div>
               ))}
            </div>

            {/* Footer Sticky */}
            <div className="sticky bottom-0 pointer-events-none flex justify-center">
               <Button
                  size="lg"
                  className="pointer-events-auto bg-blue-600 hover:bg-blue-500 text-white shadow-[0_4px_24px_rgba(37,99,235,0.3)] hover:shadow-[0_4px_32px_rgba(37,99,235,0.4)] rounded-full px-8 max-w-60 h-12 text-base font-semibold group transition-all"
               >
                  <Settings className="mr-2 h-5 w-5 animate-spin-slow group-hover:rotate-180 transition-transform duration-700" />
                  Obfuscate
               </Button>
            </div>
         </div>

         {/* Footer Sticky */}
         {/* <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-[#050505] via-[#050505] to-transparent pointer-events-none flex justify-center pb-8 pt-12">
            <Button
               size="lg"
               className="pointer-events-auto bg-blue-600 hover:bg-blue-500 text-white shadow-[0_4px_24px_rgba(37,99,235,0.3)] hover:shadow-[0_4px_32px_rgba(37,99,235,0.4)] rounded-full w-full max-w-60 h-12 text-base font-semibold group transition-all"
            >
               <Settings className="mr-2 h-5 w-5 animate-spin-slow group-hover:rotate-180 transition-transform duration-700" />
               Obfuscate
            </Button>
         </div> */}
      </div>
   );
}

function ShieldCheck({ className }: { className?: string }) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         width="24"
         height="24"
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
         className={className}
      >
         <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
         <path d="m9 12 2 2 4-4" />
      </svg>
   );
}
