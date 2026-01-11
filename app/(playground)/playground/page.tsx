import { ObfuscationOptions } from "@/components/pages/playground/obfuscation-options";
import { PlaygroundEditor } from "@/components/pages/playground/playground-editor";

export default function PlaygroundPage() {
   return (
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
         {/* Left Pane: Editor */}
         <div className="flex-1 border-b lg:border-b-0 border-border/50 relative min-w-0 h-[60vh] lg:h-auto z-0">
            <PlaygroundEditor />
         </div>

         {/* Right Pane: Options */}
         <div className="flex-1 lg:flex-none lg:w-125 overflow-y-auto custom-scrollbar z-10 border-l border-border/80 shadow-[-10px_0_30px_-15px_rgba(0,0,0,0.5)]">
            <ObfuscationOptions />
         </div>
      </div>
   );
}
