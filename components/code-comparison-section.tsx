import { FileCode, FileLock, Settings, Split } from "lucide-react";

export default function CodeComparisonSection() {
   return (
      <section className="relative z-10 py-24 bg-[#050507] border-y border-white/5">
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
            <div className="rounded-xl border border-white/10 bg-[#0A0A0C] shadow-2xl overflow-hidden flex flex-col md:flex-row h-150 md:h-125">
               {/* Sidebar (File Tree) */}
               <div className="hidden md:flex w-64 border-r border-white/5 flex-col bg-[#08080a]">
                  <div className="h-10 border-b border-white/5 flex items-center px-4">
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
                  <div className="h-10 border-b border-white/5 flex items-center bg-[#08080a]">
                     <div className="h-full px-6 flex items-center gap-2 border-r border-white/5 bg-[#0A0A0C] text-xs text-blue-400 font-medium relative">
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
                     <div className="relative bg-[#0A0A0C] flex flex-col">
                        <div className="absolute top-4 right-4 z-10">
                           <span className="px-2 py-1 rounded bg-zinc-800/50 border border-white/5 text-[10px] font-medium text-zinc-400 uppercase tracking-wide">
                              Original
                           </span>
                        </div>
                        <div className="flex-1 overflow-auto p-6 font-mono text-sm leading-relaxed custom-scroll">
                           <div className="text-zinc-600 select-none absolute left-3 top-6 w-6 text-right text-xs">
                              1<br />2<br />3<br />4<br />5<br />6<br />7<br />8
                              <br />
                              9<br />
                              10
                              <br />
                              11
                              <br />
                              12
                           </div>
                           <div className="pl-8">
                              <span className="code-token-comment">
                                 {"// Calculate Discount Logic"}
                              </span>
                              <br />
                              <span className="code-token-keyword">
                                 function
                              </span>{" "}
                              <span className="code-token-function">
                                 getDiscount
                              </span>
                              (<span className="code-token-operator">user</span>
                              ) {"{"}
                              <br />
                              {"  "}
                              <span className="code-token-keyword">
                                 const
                              </span>{" "}
                              <span className="code-token-operator">
                                 VIP_RATE
                              </span>{" "}
                              = <span className="code-token-number">0.25</span>;
                              <br />
                              {"  "}
                              <span className="code-token-keyword">
                                 const
                              </span>{" "}
                              <span className="code-token-operator">
                                 STD_RATE
                              </span>{" "}
                              = <span className="code-token-number">0.10</span>;
                              <br />
                              <br />
                              {"  "}
                              <span className="code-token-keyword">if</span> (
                              <span className="code-token-operator">user</span>.
                              <span className="code-token-function">
                                 isPremium
                              </span>
                              ())
                              {" {"}
                              <br />
                              {"    "}
                              <span className="code-token-keyword">
                                 return
                              </span>{" "}
                              <span className="code-token-operator">user</span>.
                              <span className="code-token-function">
                                 cartTotal
                              </span>{" "}
                              *{" "}
                              <span className="code-token-operator">
                                 VIP_RATE
                              </span>
                              ;
                              <br />
                              {"  "}
                              {"}"}
                              <br />
                              <br />
                              {"  "}
                              <span className="code-token-keyword">
                                 return
                              </span>{" "}
                              <span className="code-token-operator">user</span>.
                              <span className="code-token-function">
                                 cartTotal
                              </span>{" "}
                              *{" "}
                              <span className="code-token-operator">
                                 STD_RATE
                              </span>
                              ;
                              <br />
                              {"}"}
                              <br />
                              <br />
                              <span className="code-token-function">
                                 export
                              </span>{" "}
                              {"{ "}{" "}
                              <span className="code-token-function">
                                 getDiscount
                              </span>{" "}
                              {"}"};
                           </div>
                        </div>
                     </div>

                     {/* Right: Obfuscated */}
                     <div className="relative bg-[#0A0A0C] flex flex-col">
                        <div className="absolute top-4 right-4 z-10">
                           <span className="px-2 py-1 rounded bg-blue-900/20 border border-blue-500/20 text-[10px] font-medium text-blue-400 uppercase tracking-wide shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                              Protected
                           </span>
                        </div>
                        <div className="flex-1 overflow-auto p-6 font-mono text-sm leading-relaxed custom-scroll">
                           <div className="text-zinc-700 select-none absolute left-3 top-6 w-6 text-right text-xs">
                              1<br />2<br />3<br />4<br />5<br />6<br />7<br />8
                              <br />
                              9<br />
                              10
                              <br />
                              11
                              <br />
                              12
                           </div>
                           <div className="pl-8 text-zinc-500 break-all">
                              <span className="code-token-keyword">var</span>{" "}
                              _0x4e2d=[
                              <span className="code-token-string">
                                 &#39;w5PDpsO8&#39;
                              </span>
                              ,
                              <span className="code-token-string">
                                 &#39;wrHCpA==&#39;
                              </span>
                              ...];
                              <br />
                              <span className="code-token-keyword">(</span>
                              <span className="code-token-function">
                                 function
                              </span>
                              (_0x1a2b,_0x3c4d)
                              <span className="code-token-keyword">{"{"}</span>
                              <br />
                              {"  "}
                              <span className="code-token-keyword">
                                 var
                              </span>{" "}
                              _0x5e6f=
                              <span className="code-token-function">
                                 _0x4e2d
                              </span>
                              ;
                              <br />
                              {"  "}
                              <span className="code-token-keyword">while</span>
                              (!![])
                              <span className="code-token-keyword">{"{"}</span>
                              <br />
                              {"    "}
                              <span className="code-token-keyword">try</span>
                              <span className="code-token-keyword">{"{"}</span>
                              <br />
                              {"      "}
                              <span className="code-token-keyword">
                                 var
                              </span>{" "}
                              _0x7g8h=
                              <span className="code-token-function">
                                 parseInt
                              </span>
                              (_0x5e6f(
                              <span className="code-token-number">0x1</span>
                              ))...
                              <br />
                              {"    "}
                              <span className="code-token-keyword">{"}"}</span>
                              <span className="code-token-keyword">catch</span>
                              (_0x9i0j)
                              <span className="code-token-keyword">{"{"}</span>
                              <br />
                              {"      "}
                              _0x1a2b[&#39;push&#39;](_0x1a2b[&#39;shift&#39;]());
                              <br />
                              {"    "}
                              <span className="code-token-keyword">{"}"}</span>
                              <br />
                              {"  "}
                              <span className="code-token-keyword">{"}"}</span>
                              <br />
                              <span className="code-token-keyword">{"}"}</span>
                              (_0x4e2d,
                              <span className="code-token-number">0x1e4</span>)
                              <span className="code-token-keyword">);</span>
                              <br />
                              <span className="code-token-keyword">
                                 function
                              </span>{" "}
                              <span className="code-token-function">
                                 _vm_exec
                              </span>
                              (_0xOP,_0xST)
                              <span className="code-token-keyword">{"{"}</span>
                              <br />
                              {"  "}
                              <span className="code-token-comment">
                                 {"/* VM Bytecode execution loop */"}
                              </span>
                              <br />
                              {"  "}
                              <span className="code-token-keyword">for</span>
                              (;;)
                              <span className="code-token-keyword">{"{"}</span>
                              <br />
                              {"    "}
                              <span className="code-token-keyword">switch</span>
                              (_0xOP[IP++]){"{"}
                              <br />
                              {"       "}
                              <span className="code-token-keyword">
                                 case
                              </span>{" "}
                              <span className="code-token-number">0xA4</span>:
                              ST.push(ST.pop()+ST.pop());
                              <span className="code-token-keyword">break</span>;
                              <br />
                              {"       "}
                              <span className="code-token-keyword">
                                 case
                              </span>{" "}
                              <span className="code-token-number">0xF2</span>:{" "}
                              <span className="code-token-keyword">return</span>
                              ;
                              <br />
                              {"    "}
                              {"}"}
                              <br />
                              {"  "}
                              {"}"}
                              <br />
                              {"}"}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
