import Footer from "@/components/layouts/footer";
import Navigation from "@/components/layouts/navigation";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
   variable: "--font-inter",
   subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
   variable: "--font-jetbrains-mono",
   subsets: ["latin"],
});

export const metadata: Metadata = {
   title: "Obfuscator.io - JavaScript VM Obfuscation",
   description:
      "Transform readable source code into a custom virtual machine instruction set. The definitive standard for client-side logic protection.",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en" className="scroll-smooth">
         <body
            className={`${inter.className} ${jetbrainsMono.variable} relative overflow-x-hidden selection:bg-blue-500/30 selection:text-blue-200 antialiased`}
         >
            {/* Background Ambience */}
            <div className="fixed inset-0 z-0 pointer-events-none">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-150 bg-grid-pattern opacity-[0.15] grid-bg"></div>
               <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-150 h-150 bg-blue-600/10 blur-[120px] rounded-full"></div>
            </div>

            <Navigation />
            {children}
            <Footer />
         </body>
      </html>
   );
}
