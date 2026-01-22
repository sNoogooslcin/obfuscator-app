import Footer from "@/components/layouts/footer";
import Navigation from "@/components/layouts/navigation";

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <div className="relative">
         <Navigation />
         {children}
         <Footer />
      </div>
   );
}
