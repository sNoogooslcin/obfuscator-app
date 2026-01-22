"use client";

import { FileCode, FileLock, Settings, Split } from "lucide-react";
import { BundledLanguage } from "shiki";
import {
   CodeBlock,
   CodeBlockBody,
   CodeBlockContent,
   CodeBlockItem,
} from "./kibo-ui/code-block";

const originalCode = [
   {
      language: "typescript",
      filename: "original.ts",
      code: `// Calculate Discount Logic function 
getDiscount(user) { 
   const VIP_RATE = 0.25; 
   const STD_RATE = 0.10;
   
   if (user.isPremium())
   {
      return user.cartTotal * VIP_RATE;
   }

   return user.cartTotal * STD_RATE;
}
   
export { getDiscount };`,
   },
];

const obfuscatedCode = [
   {
      language: "typescript",
      filename: "obfuscated.ts",
      code: `var _0x4e2d=['w5PDpsO8','wrHCpA=='...];
(function(_0x1a2b,_0x3c4d)
{ var _0x5e6f=_0x4e2d;while(!![])
{ try{ var _0x7g8h=parseInt
(_0x5e6f(0x1))... }catch(_0x9i0j){ _0x1a2b
['push'](_0x1a2b['shift']());
 } } }(_0x4e2d,0x1e4));
function _vm_exec(_0xOP,_0xST){
/* VM Bytecode execution loop */
for(;;){ switch(_0xOP[IP++])
{ case 0xA4: ST.push(ST.pop
 ()+ST.pop());break;
case 0xF2: return; } } }`,
   },
];

export default function CodeComparisonSection() {
   return (
      <section className="relative z-10 py-24 bg-[#050507] border-y border-border/50 overflow-hidden">
         <div className="absolute inset-0 top-[40%] -z-10 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-150 bg-grid-pattern opacity-[0.15] grid-bg"></div>
            <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-150 h-150 bg-blue-600/10 blur-[120px] rounded-full"></div>
         </div>
         <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-semibold text-white tracking-tight mb-4">
                  Code Transformation Engine
               </h2>
               <p className="text-zinc-400">
                  Visualize how your logic is encapsulated into a virtualized
                  container.
               </p>
            </div>

            {/* IDE Window */}
            <div className="rounded-2xl border border-border/50 bg-variant shadow-2xl overflow-hidden flex flex-col md:flex-row h-150 md:h-125">
               {/* Sidebar (File Tree) */}
               <div className="hidden md:flex w-58 border-r border-border/50 flex-col bg-variant">
                  <div className="h-10 border-b border-border/50 flex items-center px-4">
                     <span className="text-xs font-semibold text-zinc-500 tracking-wider uppercase">
                        Explorer
                     </span>
                  </div>
                  <div className="p-2 space-y-0.5">
                     <div className="flex items-center gap-2 px-3 py-1.5 text-xs text-zinc-300 bg-white/5 rounded cursor-pointer">
                        <FileCode className="w-3.5 h-3.5 text-blue-400" />
                        logic.js
                     </div>
                     <div className="flex items-center gap-2 px-3 py-1.5 text-xs text-zinc-500 hover:text-zinc-300 cursor-pointer transition-colors">
                        <FileLock className="w-3.5 h-3.5 text-zinc-600" />
                        logic.enc.js
                     </div>
                     <div className="flex items-center gap-2 px-3 py-1.5 text-xs text-zinc-500 hover:text-zinc-300 cursor-pointer transition-colors">
                        <Settings className="w-3.5 h-3.5 text-zinc-600" />
                        config.json
                     </div>
                  </div>
               </div>

               {/* Main Editor Area */}
               <div className="flex-1 flex flex-col min-w-0">
                  {/* Tabs */}
                  <div className="h-10 border-b border-border/50 flex items-center bg-variant">
                     <div className="h-full px-6 flex items-center gap-2 border-r border-border/50 bg-variant text-xs text-blue-400 font-medium relative">
                        <div className="absolute top-0 left-0 w-full h-0.5 bg-blue-500"></div>
                        <Split className="w-3.5 h-3.5" /> Comparison View
                     </div>
                     <div className="ml-auto px-4 flex items-center gap-3">
                        <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
                        <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">
                           Live Preview
                        </span>
                     </div>
                  </div>

                  {/* Code Split */}
                  <div className="flex-1 grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/5 overflow-hidden">
                     {/* Left: Source */}
                     <div className="relative bg-variant flex flex-col">
                        <div className="absolute top-4 right-4 z-10">
                           <span className="px-2 py-1 rounded bg-zinc-800/50 border border-border/50 text-[10px] font-medium text-zinc-400 uppercase tracking-wide">
                              Original
                           </span>
                        </div>
                        <CodeBlock
                           data={originalCode}
                           defaultValue={originalCode[0].language}
                           className="border-0"
                        >
                           <CodeBlockBody>
                              {(item) => (
                                 <CodeBlockItem
                                    key={item.language}
                                    value={item.language}
                                 >
                                    <CodeBlockContent
                                       language={
                                          item.language as BundledLanguage
                                       }
                                    >
                                       {item.code}
                                    </CodeBlockContent>
                                 </CodeBlockItem>
                              )}
                           </CodeBlockBody>
                        </CodeBlock>
                     </div>
                     {/* Right: Obfuscated */}
                     <div className="relative bg-variant flex flex-col">
                        <div className="absolute top-4 right-4 z-10">
                           <span className="px-2 py-1 rounded bg-blue-900/20 border border-blue-500/20 text-[10px] font-medium text-blue-400 uppercase tracking-wide shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                              Protected
                           </span>
                        </div>
                        <CodeBlock
                           data={obfuscatedCode}
                           defaultValue={obfuscatedCode[0].language}
                           className="border-0"
                        >
                           <CodeBlockBody className="bg-variant">
                              {(item) => (
                                 <CodeBlockItem
                                    key={item.language}
                                    value={item.language}
                                 >
                                    <CodeBlockContent
                                       language={
                                          item.language as BundledLanguage
                                       }
                                    >
                                       {item.code}
                                    </CodeBlockContent>
                                 </CodeBlockItem>
                              )}
                           </CodeBlockBody>
                        </CodeBlock>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
