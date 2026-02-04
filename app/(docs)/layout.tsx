import { RootProvider } from "fumadocs-ui/provider/next";
// import "fumadocs-ui/style.css";
import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
   return <RootProvider>{children}</RootProvider>;
}
