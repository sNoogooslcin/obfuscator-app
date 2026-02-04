import { baseOptions } from "@/app/layout.config";
import { source } from "@/lib/source";
import type * as PageTree from "fumadocs-core/page-tree";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import {
   BookOpen,
   House,
   Info,
   Rocket,
   Terminal,
   type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";
import { createElement } from "react";

const icons: Record<string, LucideIcon> = {
   House,
   BookOpen,
   Terminal,
   Rocket,
   Info,
};

function transform(node: PageTree.Node): PageTree.Node {
   if (node.type === "folder" || node.type === "page") {
      if (node.icon && typeof node.icon === "string" && icons[node.icon]) {
         node.icon = createElement(icons[node.icon]);
      }
   }

   if (node.type === "folder") {
      return {
         ...node,
         children: node.children.map(transform),
      };
   }

   return node;
}

export default function Layout({ children }: { children: ReactNode }) {
   const tree = {
      ...source.getPageTree(),
      children: source.getPageTree().children.map(transform),
   };

   return (
      <DocsLayout tree={tree} {...baseOptions}>
         {children}
      </DocsLayout>
   );
}
