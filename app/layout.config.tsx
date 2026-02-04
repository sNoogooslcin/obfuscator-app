import { Logo } from "@/components/brand/logo";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export const baseOptions: BaseLayoutProps = {
   nav: {
      title: <Logo />,
   },
   // links: [
   //    {
   //       text: "Documentation",
   //       url: "/docs",
   //       active: "nested-url",
   //    },
   // ],
};
