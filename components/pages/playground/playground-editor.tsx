"use client";

import { Code2, Upload } from "lucide-react";
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
console.log(calculatePrice(10, 20));`
   );

   return (
      <div className="h-full flex flex-col font-mono text-sm group">
         {/* Top Bar */}
         <div className="h-16 border-b border-border/80 flex items-center justify-between px-4 bg-variant">
            <div className="flex items-center gap-1">
               <button className="flex items-center gap-2 px-4 py-1.5 rounded bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-wide border border-blue-500/20 transition-colors">
                  <Code2 className="w-3.5 h-3.5" />
                  EDITOR
               </button>
               <button className="flex items-center gap-2 px-4 py-1.5 rounded hover:bg-white/5 text-secondary hover:text-white text-xs font-medium tracking-wide transition-all">
                  <Upload className="w-3.5 h-3.5" />
                  UPLOAD
               </button>
            </div>

            <div className="flex items-center gap-3">
               <div className="flex items-center gap-2 text-xs text-yellow-500/80 bg-yellow-500/5 px-2 py-1 rounded border border-yellow-500/10">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
                  JavaScript
               </div>
            </div>
         </div>

         {/* Editor Area */}
         <div className="flex-1 relative flex overflow-hidden group">
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
         </div>

         {/* Bottom Bar: Stats */}
         <div className="h-8 border-t border-border bg-variant flex items-center px-4 text-xs text-secondary justify-between select-none">
            <div className="flex gap-4">
               <span>375 B / 4MB</span>
            </div>
            <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
               <span>
                  Ln {code.split("\n").length}, Col {code.length}
               </span>
               <span>UTF-8</span>
            </div>
         </div>
      </div>
   );
}
