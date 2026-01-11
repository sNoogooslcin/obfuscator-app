import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AuthLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <div className="min-h-screen w-full relative flex items-center justify-center overflow-hidden bg-background selection:bg-accent/30">
         {/* Background Effects */}
         {/* <div className="absolute inset-0 w-full h-full bg-background">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-accent/20 opacity-20 blur-[100px]" />
            <div className="absolute right-0 bottom-0 -z-10 h-[310px] w-[310px] rounded-full bg-purple-500/20 opacity-20 blur-[100px]" />
         </div> */}

         {/* Background Ambience */}
         <div className="fixed inset-0 z-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-150 bg-grid-pattern opacity-[0.15]"></div>
            <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-150 h-150 bg-blue-600/10 blur-[120px] rounded-full"></div>
         </div>

         {/* Navigation */}
         <div className="absolute top-8 left-8 z-50">
            <Link
               href="/"
               className="group flex items-center gap-2 px-4 py-2 rounded-full bg-surface/50 border border-white/5 backdrop-blur-md hover:bg-surface/80 transition-all duration-300"
            >
               <ArrowLeft className="w-4 h-4 text-muted-foreground group-hover:-translate-x-1 transition-transform" />
               <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  Back to Home
               </span>
            </Link>
         </div>

         {/* Content */}
         <main className="relative z-10 w-full max-w-lg p-6 bg-variant/90 backdrop-blur-md rounded-xl border border-border/20 shadow-2xl">
            {children}
         </main>
      </div>
   );
}
