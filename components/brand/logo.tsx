import { cn } from "@/lib/utils";
import { Box } from "lucide-react";

export function Logo({ className }: { className?: string }) {
   return (
      <div
         className={cn(
            "flex items-center gap-2.5 group cursor-pointer",
            className,
         )}
      >
         <div className="relative w-6 h-6 flex items-center justify-center">
            <div className="absolute inset-0 bg-blue-500/20 rounded-md blur-sm group-hover:bg-blue-500/40 transition-all"></div>
            <Box className="w-5 h-5 text-white relative z-10" />
         </div>
         <span className="font-bold tracking-tight text-white text-sm">
            OBFUSCATOR<span className="text-zinc-500">.IO</span>
         </span>
      </div>
   );
}
