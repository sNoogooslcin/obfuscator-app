"use client";

import { Button } from "@/components/ui/button";
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Info, RefreshCcw, Settings, Sliders } from "lucide-react";
import { useState } from "react";
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

const PRESETS = [
   {
      group: "Presets",
      items: [
         { id: "default", label: "Default" },
         { id: "low", label: "Low Level" },
         { id: "medium", label: "Medium Level" },
         { id: "high", label: "High Level" },
      ],
   },
   {
      group: "Saved",
      items: [{ id: "production safe", label: "Production Safe" }],
   },
];

export function ObfuscationOptions() {
   const [preset, setPreset] = useState("default");
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

         <div className="relative flex-1 overflow-y-auto p-6 custom-scrollbar">
            {/* VM Promo */}
            <div className="relative mb-8 overflow-hidden rounded-xl border border-blue-500/20 bg-blue-900/10 p-5 group hover:border-blue-500/30 transition-colors">
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
            <div className="space-y-8 mb-4">
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
                                    "border-b border-border/40",
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

            {/* Footer Sticky Pill */}
            <div className="sticky bottom-0 pointer-events-none flex justify-center z-20">
               <div className="pointer-events-auto flex items-center gap-2 p-2 px-3 rounded-full bg-neutral-900/70 border backdrop-blur-3xl border-border shadow-xl transition-all hover:border-blue-500/10">
                  {/* Settings Icon Pill */}
                  <div className="h-8 w-8 flex items-center justify-center rounded-full bg-neutral-800/80 border border-white/10">
                     <Settings className="h-4 w-4 text-secondary" />
                  </div>

                  {/* Preset Select */}
                  <Select
                     value={`Preset: ${preset}`}
                     onValueChange={(val) => val && setPreset(val)}
                  >
                     <SelectTrigger className="w-40 h-10 bg-neutral-800/70 border-white/5 rounded-full text-[13px] font-medium focus:ring-0 focus:ring-offset-0 transition-colors hover:bg-neutral-800/80">
                        <SelectValue />
                     </SelectTrigger>
                     <SelectContent className="bg-variant border border-border/50 ring-0 text-white min-w-48 p-1">
                        {PRESETS.map((group) => (
                           <div key={group.group}>
                              <div className="px-2 py-1.5 text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                                 {group.group}
                              </div>
                              {group.items.map((p) => (
                                 <SelectItem
                                    key={p.id}
                                    value={p.id}
                                    className="text-[13px] focus:bg-blue-500/20 focus:text-blue-100 rounded-lg"
                                 >
                                    {p.label}
                                 </SelectItem>
                              ))}
                           </div>
                        ))}
                     </SelectContent>
                  </Select>

                  <div className="w-px h-5 bg-white/10 mx-1 ml-3.5" />

                  {/* Reset Button */}
                  <button
                     onClick={() => setPreset("default")}
                     className="flex items-center gap-2 px-2.5 h-8 text-[12px] font-semibold text-blue-400/90 hover:text-blue-300 hover:bg-blue-500/10 rounded-full transition-colors group cursor-pointer"
                  >
                     <RefreshCcw className="h-3 w-3 transition-transform group-hover:-rotate-45 duration-300" />
                     <span>Reset</span>
                  </button>
               </div>
            </div>
         </div>
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
