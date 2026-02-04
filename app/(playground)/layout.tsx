import PlaygroundNavigation from "@/components/pages/playground/playground-navigation";

export default function PlaygroundLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <div className="h-screen flex flex-col overflow-hidden bg-[#050505]">
         <PlaygroundNavigation />

         <div className="flex-1 flex flex-col relative overflow-hidden border-t border-border/80">
            {children}
         </div>
      </div>
   );
}
