"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { Copy, Download, Expand, Minimize2, Rotate3d } from "lucide-react";
import { highlight, languages } from "prismjs";
import "prismjs/components/prism-markup";
import "prismjs/themes/prism-tomorrow.css";
import { useState } from "react";
import Editor from "react-simple-code-editor";

export default function HtmlEditorPage() {
   const [code, setCode] = useState(
      `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Preview</title>
    <style>
        body {
            font-family: sans-serif;
            background: #111;
            color: #eee;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .card {
            background: #222;
            padding: 2rem;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.5);
            text-align: center;
        }
        h1 { margin-top: 0; color: #3b82f6; }
        button {
            background: #3b82f6;
            color: white;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 6px;
            cursor: pointer;
            margin-top: 1rem;
        }
        button:hover { background: #2563eb; }
    </style>
</head>
<body>
    <div class="card">
        <h1>Hello World</h1>
        <p>This is a live preview of your HTML code.</p>
        <button onclick="alert('It works!')">Click Me</button>
    </div>
</body>
</html>`,
   );

   const [isPreviewMaximized, setIsPreviewMaximized] = useState(false);
   const [activeTab, setActiveTab] = useState("editor");
   const [obfuscatedCode, setObfuscatedCode] = useState("");

   const handleObfuscate = () => {
      const mockObfuscated = `<!-- Obfuscated by OBFUSCATOR.IO -->
<script>
var _0x5a1b=['\x48\x65\x6c\x6c\x6f\x20\x57\x6f\x72\x6c\x64','\x6c\x6f\x67'];(function(_0x1b5a2c,_0x5a1bdf){var _0x2c1b5a=function(_0xdf5a1b){while(--_0xdf5a1b){_0x1b5a2c['push'](_0x1b5a2c['shift']());}};_0x2c1b5a(++_0x5a1bdf);}(_0x5a1b,0x1f4));var _0x2c1b=function(_0x1b5a2c,_0x5a1bdf){_0x1b5a2c=_0x1b5a2c-0x0;var _0x2c1b5a=_0x5a1b[_0x1b5a2c];return _0x2c1b5a;};console[_0x2c1b('0x1')](_0x2c1b('0x0'));
</script>`;
      setObfuscatedCode(mockObfuscated);
      setActiveTab("results");
   };

   return (
      <div className="h-full flex overflow-hidden">
         {/* Editor Panel */}
         <div
            className={cn(
               "flex flex-col h-full border-r border-border/80 transition-all duration-300",
               isPreviewMaximized ? "w-0 overflow-hidden border-none" : "w-1/2",
            )}
         >
            <Tabs
               defaultValue="editor"
               value={activeTab}
               onValueChange={setActiveTab}
               className="h-full flex flex-col font-mono text-sm group gap-0"
            >
               {/* Top Bar */}
               <div className="h-16 border-b border-border/80 flex items-center justify-between px-4 bg-variant shrink-0">
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
                     {/* <button className="flex items-center gap-2 px-3 py-1.5 rounded hover:bg-white/5 text-secondary hover:text-white text-xs font-medium tracking-wide transition-all border border-transparent hover:border-zinc-800">
                        <Play className="w-3.5 h-3.5" />
                        PREVIEW
                     </button> */}
                     {/* <div className="flex items-center gap-2 text-xs text-yellow-500/80 bg-yellow-500/5 px-2 py-1 rounded border border-yellow-500/10">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
                        HTML
                     </div> */}
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
                           highlight(code, languages.markup, "html")
                        }
                        padding={16}
                        style={{
                           fontFamily: '"JetBrains Mono", monospace',
                           fontSize: 14,
                           backgroundColor: "transparent",
                           minHeight: "100%",
                           lineHeight: "24px",
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
                     <h3 className="text-zinc-300 font-medium mb-1">
                        Upload File
                     </h3>
                     <p className="text-zinc-500 text-xs mb-4">
                        Drag & drop your HTML file here or click to browse
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
                           highlight(code, languages.markup, "html")
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
                              className="p-2 bg-zinc-800/80 hover:bg-zinc-700 text-zinc-400 hover:text-white rounded-md transition-colors backdrop-blur-sm border border-zinc-700/50"
                           >
                              <Copy className="w-4 h-4" />
                           </button>
                           <button
                              title="Download"
                              className="p-2 bg-zinc-800/80 hover:bg-zinc-700 text-zinc-400 hover:text-white rounded-md transition-colors backdrop-blur-sm border border-zinc-700/50"
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
                     <span>{code.length} B / 4MB</span>
                  </div>
                  <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                     <span>
                        Ln {code.split("\n").length}, Col {code.length}
                     </span>
                     <span>HTML</span>
                  </div>
               </div>
            </Tabs>
         </div>

         {/* Preview Panel */}
         <div
            className={cn(
               "flex flex-col h-full bg-black transition-all duration-300 relative",
               isPreviewMaximized ? "w-full" : "w-1/2",
            )}
         >
            {/* Preview Header */}
            <div className="h-16 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between px-3">
               <div className="flex items-center gap-2 text-xs text-yellow-500/80 bg-yellow-500/5 px-2 py-1 rounded border border-yellow-500/10">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
                  Live Preview
               </div>
               <button
                  onClick={() => setIsPreviewMaximized(!isPreviewMaximized)}
                  className="p-1 hover:bg-zinc-800 rounded text-zinc-400 hover:text-white transition-colors"
               >
                  {isPreviewMaximized ? (
                     <Minimize2 className="size-4" />
                  ) : (
                     <Expand className="size-4" />
                  )}
               </button>
            </div>
            <iframe
               srcDoc={code}
               className="flex-1 w-full h-full bg-white"
               title="Preview"
               sandbox="allow-scripts"
            />
         </div>
      </div>
   );
}
