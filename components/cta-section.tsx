export default function CtaSection() {
   return (
      <>
         <section className="relative z-10 py-32 bg-[#020203] m-4 sm:m-8 rounded-3xl bg-grid-pattern overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-150 bg-grid-pattern grid-bg"></div>
               <div className="absolute inset-0 bg-linear-to-tr from-blue-700 to-cyan-400 opacity-90" />
            </div>
            <div className="max-w-4xl mx-auto px-6 text-center relative z-20">
               <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-6">
                  Ready to secure your code?
               </h2>
               <p className="text-zinc-200 text-lg mb-10 max-w-xl mx-auto">
                  Start protecting your JavaScript today. Professional grade
                  security for developers who don&apos;t compromise.
               </p>
               <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button className="h-12 px-8 rounded-sm bg-white text-black font-semibold hover:bg-zinc-200 transition-colors">
                     Get Started Now
                  </button>
                  <button className="h-12 px-8 rounded-sm bg-zinc-900 border border-zinc-800 text-white font-medium hover:bg-zinc-800 transition-colors">
                     View Documentation
                  </button>
               </div>
            </div>
         </section>
      </>
   );
}
