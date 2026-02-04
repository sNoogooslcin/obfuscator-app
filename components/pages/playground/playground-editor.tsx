"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Download, Rotate3d } from "lucide-react";
import { highlight, languages } from "prismjs";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css"; // Using tomorrow night theme for dark mode
import { useState } from "react";
import Editor from "react-simple-code-editor";

export function PlaygroundEditor() {
   const [code, setCode] = useState(
      `// Simple calculator with secret discount logic
function calculatePrice(quantity, unitPrice) {
  const SECRET_DISCOUNT = 0.15;
  const SECRET_THRESHOLD = 100;

  let total = quantity * unitPrice;

  if (total > SECRET_THRESHOLD) {
    total = total * (1 - SECRET_DISCOUNT);
  }

  return total;
}

// Try it: calculatePrice(10, 20) => 170
console.log(calculatePrice(10, 20));`,
   );

   const [activeTab, setActiveTab] = useState("editor");
   const [obfuscatedCode, setObfuscatedCode] = useState("");

   const handleObfuscate = () => {
      const mockObfuscated = `// Obfuscated by OBFUSCATOR.IO
var _0x1a2b=['\x6c\x6f\x67','\x48\x65\x6c\x6c\x6f'];(function(_0x2b1a2c,_0x1a2bdf){var _0x3c2b1a=function(_0xdf1a2b){while(--_0xdf1a2b){_0x2b1a2c['push'](_0x2b1a2c['shift']());}};_0x3c2b1a(++_0x1a2bdf);}(_0x1a2b,0x1f4));var _0x3c2b=function(_0x2b1a2c,_0x1a2bdf){_0x2b1a2c=_0x2b1a2c-0x0;var _0x3c2b1a=_0x1a2b[_0x2b1a2c];return _0x3c2b1a;};`;
      setObfuscatedCode(mockObfuscated);
      setActiveTab("results");
   };

   return (
      <Tabs
         defaultValue="editor"
         value={activeTab}
         onValueChange={setActiveTab}
         className="h-full flex flex-col font-mono text-sm group gap-0"
      >
         {/* Top Bar */}
         <div className="h-16 border-b border-border/80 flex items-center justify-between px-4 bg-variant">
            <TabsList className="h-9 p-1 bg-zinc-900/50 border border-zinc-800">
               <TabsTrigger
                  value="editor"
                  className="text-xs px-3 data-active:bg-blue-500/20 data-active:text-blue-400 data-active:border-blue-500/20 border border-transparent transition-all"
               >
                  EDITOR
               </TabsTrigger>
               <TabsTrigger
                  value="upload"
                  className="text-xs px-3 data-active:bg-blue-500/20 data-active:text-blue-400 data-active:border-blue-500/20 border border-transparent transition-all"
               >
                  UPLOAD
               </TabsTrigger>
               <TabsTrigger
                  value="results"
                  className="text-xs px-3 data-active:bg-blue-500/20 data-active:text-blue-400 data-active:border-blue-500/20 border border-transparent transition-all"
               >
                  RESULTS
               </TabsTrigger>
            </TabsList>

            <div className="flex items-center gap-3">
               <div className="flex items-center gap-2 text-xs text-yellow-500/80 bg-yellow-500/5 px-2 py-1 rounded border border-yellow-500/10">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
                  JS/TS
               </div>
               <button
                  onClick={handleObfuscate}
                  className="flex items-center gap-2 px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold tracking-wide transition-colors shadow-sm ml-2 cursor-pointer"
               >
                  <Rotate3d className="size-5" />
                  Obfuscate
               </button>
            </div>
         </div>

         {/* Editor Content */}
         <TabsContent
            value="editor"
            className="flex-1 relative flex overflow-hidden group mt-0 data-[state=inactive]:hidden h-full"
         >
            {/* Line Numbers */}
            <div className="w-12 pt-4 text-right pr-4 text-xs text-[#444] select-none bg-variant font-mono z-10 h-full overflow-hidden">
               {code.split("\n").map((_, i) => (
                  <div key={i} className="leading-6">
                     {i + 1}
                  </div>
               ))}
            </div>

            {/* Editor */}
            <div className="flex-1 h-full bg-variant relative overflow-auto custom-scrollbar">
               <Editor
                  value={code}
                  onValueChange={(code) => setCode(code)}
                  highlight={(code) =>
                     highlight(code, languages.js, "javascript")
                  }
                  padding={16}
                  style={{
                     fontFamily: '"JetBrains Mono", monospace',
                     fontSize: 14,
                     backgroundColor: "transparent",
                     minHeight: "100%",
                     lineHeight: "24px", // Matches the leading-6 (1.5rem / 24px)
                  }}
                  textareaClassName="focus:outline-none"
                  className="min-h-full"
               />
            </div>
         </TabsContent>

         <TabsContent
            value="upload"
            className="flex-1 flex items-center justify-center mt-0 h-full p-6 data-[state=inactive]:hidden"
         >
            <div className="w-full max-w-md border-2 border-dashed border-zinc-800 rounded-xl p-10 flex flex-col items-center justify-center text-center hover:border-zinc-700 hover:bg-zinc-900/50 transition-all cursor-pointer group/upload">
               <div className="w-16 h-16 bg-zinc-900/80 rounded-full flex items-center justify-center mb-4 group-hover/upload:scale-110 transition-transform">
                  <svg
                     className="w-8 h-8 text-zinc-500 group-hover/upload:text-blue-400 transition-colors"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                     />
                  </svg>
               </div>
               <h3 className="text-zinc-300 font-medium mb-1">Upload File</h3>
               <p className="text-zinc-500 text-xs mb-4">
                  Drag & drop your JS/TS file here or click to browse
               </p>
               <button className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-medium rounded transition-colors">
                  Choose File
               </button>
            </div>
         </TabsContent>

         <TabsContent
            value="results"
            className="flex-1 relative flex overflow-hidden group mt-0 data-[state=inactive]:hidden h-full"
         >
            {/* Line Numbers */}
            <div className="w-12 pt-4 text-right pr-4 text-xs text-[#444] select-none bg-variant font-mono z-10 h-full overflow-hidden">
               {(obfuscatedCode || code).split("\n").map((_, i) => (
                  <div key={i} className="leading-6">
                     {i + 1}
                  </div>
               ))}
            </div>

            {/* Results Editor (Read Only) */}
            <div className="flex-1 h-full bg-variant relative overflow-auto custom-scrollbar">
               <Editor
                  value={
                     obfuscatedCode ||
                     '// Obfuscated code will appear here after you click "Obfuscate"'
                  }
                  onValueChange={() => {}}
                  highlight={(code) =>
                     highlight(code, languages.js, "javascript")
                  }
                  padding={16}
                  style={{
                     fontFamily: '"JetBrains Mono", monospace',
                     fontSize: 14,
                     backgroundColor: "transparent",
                     minHeight: "100%",
                     lineHeight: "24px",
                     paddingRight: "60px",
                  }}
                  textareaClassName="focus:outline-none"
                  className="min-h-full"
                  readOnly
               />
               {/* Action Buttons */}
               {activeTab === "results" && obfuscatedCode && (
                  <div className="absolute top-4 right-4 flex flex-col gap-2 z-20">
                     <button
                        title="Copy"
                        className="p-2 bg-zinc-800/80 hover:bg-zinc-700 text-zinc-400 hover:text-white rounded-md transition-colors backdrop-blur-sm border border-zinc-700/50 cursor-pointer"
                     >
                        <Copy className="w-4 h-4" />
                     </button>
                     <button
                        title="Download"
                        className="p-2 bg-zinc-800/80 hover:bg-zinc-700 text-zinc-400 hover:text-white rounded-md transition-colors backdrop-blur-sm border border-zinc-700/50 cursor-pointer"
                     >
                        <Download className="w-4 h-4" />
                     </button>
                  </div>
               )}
            </div>
         </TabsContent>

         {/* Bottom Bar: Stats */}
         <div className="h-8 border-t border-border bg-variant flex items-center px-4 text-xs text-secondary justify-between select-none shrink-0">
            <div className="flex gap-4">
               <span>375 B / 4MB</span>
            </div>
            <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
               <span>
                  {activeTab === "editor"
                     ? `Ln ${code.split("\n").length}, Col ${code.length}`
                     : activeTab === "results"
                       ? `Ln ${obfuscatedCode.split("\n").length}, Col ${obfuscatedCode.length}`
                       : "Ready to upload"}
               </span>
               <span>UTF-8</span>
            </div>
         </div>
      </Tabs>
   );
}
