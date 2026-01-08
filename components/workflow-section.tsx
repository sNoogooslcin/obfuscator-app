import { Download, Sliders, Upload } from "lucide-react";

export default function WorkflowSection() {
   return (
      <section className="relative z-10 py-24 px-6 bg-background">
         <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-semibold text-white tracking-tight mb-16 text-center">
               Integration Workflow
            </h2>

            <div className="relative grid md:grid-cols-3 gap-8">
               {/* Connector Line */}
               <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-linear-to-r from-zinc-800 via-zinc-700 to-zinc-800 z-0"></div>

               {/* Step 1 */}
               <div className="relative z-10 flex flex-col items-center text-center group">
                  <div className="w-24 h-24 rounded-2xl bg-[#0A0A0C] border border-white/10 flex items-center justify-center mb-6 shadow-xl group-hover:border-blue-500/30 transition-colors duration-300">
                     <Sliders className="w-8 h-8 text-zinc-400 group-hover:text-blue-400 transition-colors" />
                  </div>
                  <div className="bg-background px-2 relative">
                     <h3 className="text-white font-medium text-lg mb-2">
                        1. Configure
                     </h3>
                     <p className="text-zinc-500 text-sm max-w-xs mx-auto">
                        Select obfuscation presets and define custom VM
                        parameters for your build.
                     </p>
                  </div>
               </div>

               {/* Step 2 */}
               <div className="relative z-10 flex flex-col items-center text-center group">
                  <div className="w-24 h-24 rounded-2xl bg-[#0A0A0C] border border-white/10 flex items-center justify-center mb-6 shadow-xl group-hover:border-blue-500/30 transition-colors duration-300">
                     <Upload className="w-8 h-8 text-zinc-400 group-hover:text-blue-400 transition-colors" />
                  </div>
                  <div className="bg-background px-2 relative">
                     <h3 className="text-white font-medium text-lg mb-2">
                        2. Upload
                     </h3>
                     <p className="text-zinc-500 text-sm max-w-xs mx-auto">
                        Submit your JavaScript files via our secure Web UI or
                        REST API.
                     </p>
                  </div>
               </div>

               {/* Step 3 */}
               <div className="relative z-10 flex flex-col items-center text-center group">
                  <div className="w-24 h-24 rounded-2xl bg-[#0A0A0C] border border-white/10 flex items-center justify-center mb-6 shadow-xl group-hover:border-blue-500/30 transition-colors duration-300">
                     <Download className="w-8 h-8 text-zinc-400 group-hover:text-blue-400 transition-colors" />
                  </div>
                  <div className="bg-background px-2 relative">
                     <h3 className="text-white font-medium text-lg mb-2">
                        3. Deploy
                     </h3>
                     <p className="text-zinc-500 text-sm max-w-xs mx-auto">
                        Receive the protected artifact ready for production
                        deployment.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
