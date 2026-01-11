import Footer from "@/components/layouts/footer";
import Navigation from "@/components/layouts/navigation";

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <div className="relative">
         {/* Background Ambience */}
         <div className="fixed inset-0 z-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-150 bg-grid-pattern opacity-[0.15] grid-bg"></div>
            <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-150 h-150 bg-blue-600/10 blur-[120px] rounded-full"></div>
         </div>

         <Navigation />
         {children}
         <Footer />
      </div>
   );
}
