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
            {children}
         </body>
      </html>
   );
}
