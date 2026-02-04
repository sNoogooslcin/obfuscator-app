import { CheckIcon, FileCodeIcon, LockIcon, Settings2Icon } from "lucide-react";

export default function WorkflowSection() {
   return (
      <section
         id="workflow"
         className="relative z-10 py-28 bg-surfaceHighlight/30 border-y border-white/5"
      >
         <div className="max-w-6xl mx-auto px-6">
            <div className="mb-16 text-center">
               <h2 className="text-3xl font-semibold text-white tracking-tight mb-3">
                  Integration Pipeline
               </h2>
               <p className="text-zinc-400 text-sm leading-relaxed">
                  Secure your intellectual property in three simple steps.
               </p>
            </div>

            <div className="relative">
               {/* Connector Line */}
               <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-px bg-zinc-800">
                  <div className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-transparent via-blue-500/50 to-transparent animate-beam opacity-50"></div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                  {/* Step 1 */}
                  <div className="relative flex flex-col md:items-center">
                     <div className="w-20 h-20 mx-auto md:bg-[#050507] rounded-full border border-white/10 flex items-center justify-center relative z-10 mb-6 group hover:border-blue-500/50 transition-colors">
                        <div className="absolute inset-2 bg-zinc-900 rounded-full"></div>
                        <Settings2Icon className="w-8 h-8 text-zinc-400 relative z-20 group-hover:text-blue-400 transition-colors" />
                     </div>
                     <h3 className="text-white font-medium mb-2 md:text-center">
                        1. Configure VM Options
                     </h3>
                     <p className="text-zinc-500 text-xs md:text-center leading-relaxed">
                        Choose VM obfuscation settings and additional protection
                        layers
                     </p>
                  </div>

                  {/* Step 2 */}
                  <div className="relative flex flex-col md:items-center">
                     <div className="w-20 h-20 mx-auto md:bg-[#050507] rounded-full border border-blue-500/30 flex items-center justify-center relative z-10 mb-6 shadow-[0_0_30px_-10px_rgba(59,130,246,0.2)]">
                        <div className="absolute inset-2 bg-zinc-900 rounded-full"></div>
                        <FileCodeIcon className="w-8 h-8 text-blue-400 relative z-20" />
                        <div className="absolute -top-2 -right-2 bg-zinc-800 border border-white/10 text-[10px] font-mono px-2 py-0.5 rounded text-zinc-400">
                           JS/TS
                        </div>
                     </div>
                     <h3 className="text-white font-medium mb-2 md:text-center">
                        2. Submit Your Code
                     </h3>
                     <p className="text-zinc-500 text-xs md:text-center leading-relaxed">
                        Use our web interface or API to submit your JavaScript
                        code
                     </p>
                  </div>

                  {/* Step 3 */}
                  <div className="relative flex flex-col md:items-center">
                     <div className="w-20 h-20 mx-auto md:bg-[#050507] rounded-full border border-emerald-500/20 flex items-center justify-center relative z-10 mb-6 group hover:border-emerald-500/50 transition-colors">
                        <div className="absolute inset-2 bg-zinc-900 rounded-full"></div>
                        <LockIcon className="w-8 h-8 text-emerald-500 relative z-20" />
                        <div className="absolute bottom-0 right-0 bg-emerald-900/30 border border-emerald-500/30 text-[10px] font-bold px-1.5 py-0.5 rounded-full text-emerald-400">
                           <CheckIcon className="w-2 h-2" />
                        </div>
                     </div>
                     <h3 className="text-white font-medium mb-2 md:text-center">
                        3. Get Protected Code
                     </h3>
                     <p className="text-zinc-500 text-xs md:text-center leading-relaxed">
                        Download your VM-obfuscated code with full protection
                        applied
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
      // <section className="relative z-10 py-24 px-6 bg-background">
      //    <div className="max-w-7xl mx-auto">
      //       <h2 className="text-3xl font-semibold text-white tracking-tight mb-16 text-center">
      //          Integration Workflow
      //       </h2>

      //       <div className="relative grid md:grid-cols-3 gap-8">
      //          {/* Connector Line */}
      //          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-linear-to-r from-zinc-800 via-zinc-700 to-zinc-800 z-0"></div>

      //          {/* Step 1 */}
      //          <div className="relative z-10 flex flex-col items-center text-center group">
      //             <div className="w-24 h-24 rounded-2xl bg-[#0A0A0C] border border-white/10 flex items-center justify-center mb-6 shadow-xl group-hover:border-blue-500/30 transition-colors duration-300">
      //                <Sliders className="w-8 h-8 text-zinc-400 group-hover:text-blue-400 transition-colors" />
      //             </div>
      //             <div className="bg-background px-2 relative">
      //                <h3 className="text-white font-medium text-lg mb-2">
      //                   1. Configure
      //                </h3>
      //                <p className="text-zinc-500 text-sm max-w-xs mx-auto">
      //                   Select obfuscation presets and define custom VM
      //                   parameters for your build.
      //                </p>
      //             </div>
      //          </div>

      //          {/* Step 2 */}
      //          <div className="relative z-10 flex flex-col items-center text-center group">
      //             <div className="w-24 h-24 rounded-2xl bg-[#0A0A0C] border border-white/10 flex items-center justify-center mb-6 shadow-xl group-hover:border-blue-500/30 transition-colors duration-300">
      //                <Upload className="w-8 h-8 text-zinc-400 group-hover:text-blue-400 transition-colors" />
      //             </div>
      //             <div className="bg-background px-2 relative">
      //                <h3 className="text-white font-medium text-lg mb-2">
      //                   2. Upload
      //                </h3>
      //                <p className="text-zinc-500 text-sm max-w-xs mx-auto">
      //                   Submit your JavaScript files via our secure Web UI or
      //                   REST API.
      //                </p>
      //             </div>
      //          </div>

      //          {/* Step 3 */}
      //          <div className="relative z-10 flex flex-col items-center text-center group">
      //             <div className="w-24 h-24 rounded-2xl bg-[#0A0A0C] border border-white/10 flex items-center justify-center mb-6 shadow-xl group-hover:border-blue-500/30 transition-colors duration-300">
      //                <Download className="w-8 h-8 text-zinc-400 group-hover:text-blue-400 transition-colors" />
      //             </div>
      //             <div className="bg-background px-2 relative">
      //                <h3 className="text-white font-medium text-lg mb-2">
      //                   3. Deploy
      //                </h3>
      //                <p className="text-zinc-500 text-sm max-w-xs mx-auto">
      //                   Receive the protected artifact ready for production
      //                   deployment.
      //                </p>
      //             </div>
      //          </div>
      //       </div>
      //    </div>
      // </section>
   );
}
