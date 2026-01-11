"use client";

import { useEffect, useState } from "react";

interface TextToken {
   text: string;
   className?: string;
}

interface Line {
   tokens: TextToken[];
}

const lines: Line[] = [
   {
      tokens: [
         { text: "Error:", className: "text-purple-400" },
         { text: " Unknown OpCode" },
      ],
   },
   {
      tokens: [{ text: "at VirtualMachine.exec (vm.js:402)" }],
   },
   {
      tokens: [{ text: "at Generator.next (<anonymous>)" }],
   },
   {
      tokens: [{ text: "... Stack trace hidden", className: "text-zinc-600" }],
   },
];

export function ConsoleAnimation() {
   const [completedLines, setCompletedLines] = useState<number>(0);
   const [currentLineProgress, setCurrentLineProgress] = useState<number>(0);
   const [isResetting, setIsResetting] = useState(false);

   useEffect(() => {
      let timeoutId: NodeJS.Timeout;
      const typeSpeed = 10; // ms per char
      const lineDelay = 50; // ms between lines
      const resetDelay = 2000; // ms before reset

      const typeBot = () => {
         if (completedLines >= lines.length) {
            // Finished typing all lines
            timeoutId = setTimeout(() => {
               setCompletedLines(0);
               setCurrentLineProgress(0);
               setIsResetting(true);
               // Wait a tiny bit before starting to type again to clear the screen visually
               setTimeout(() => setIsResetting(false), 50);
            }, resetDelay);
            return;
         }

         const currentLine = lines[completedLines];
         const totalCharsInLine = currentLine.tokens.reduce(
            (acc, token) => acc + token.text.length,
            0
         );

         if (currentLineProgress < totalCharsInLine) {
            // Typing current line
            timeoutId = setTimeout(() => {
               setCurrentLineProgress((prev) => prev + 1);
            }, typeSpeed);
         } else {
            // Line finished, move to next
            timeoutId = setTimeout(() => {
               setCompletedLines((prev) => prev + 1);
               setCurrentLineProgress(0);
            }, lineDelay);
         }
      };

      if (!isResetting) {
         typeBot();
      }

      return () => clearTimeout(timeoutId);
   }, [completedLines, currentLineProgress, isResetting]);

   const renderLine = (line: Line, lineIndex: number) => {
      // If exact match content, show full. If current line, show partial. If future, show nothing.
      if (lineIndex > completedLines) return null;

      let charsToShow = 0;
      if (lineIndex < completedLines) {
         // Show full line
         charsToShow = line.tokens.reduce((a, t) => a + t.text.length, 0);
      } else {
         // Show partial
         charsToShow = currentLineProgress;
      }

      if (charsToShow === 0) return <div className="h-4" />; // Maintain height? No, standard console doesn't reserve space usually, but for layout stability maybe? The user wants "typewriter".
      // Actually, typewriters usually push content down. But to avoid layout shift in the card, we might want to reserve space?
      // The original static block has fixed content. Let's output valid DOM elements.

      // We need to determine which tokens to display
      let currentChars = 0;
      const renderedTokens = line.tokens.map((token, i) => {
         if (currentChars >= charsToShow) return null;

         const remaining = charsToShow - currentChars;
         const textToRender = token.text.slice(0, remaining);
         currentChars += textToRender.length;

         return (
            <span key={i} className={token.className}>
               {textToRender}
            </span>
         );
      });

      return <p>{renderedTokens}</p>;
   };

   return (
      <div className="hidden md:block bg-[#050507] rounded-lg border border-white/5 p-4 font-mono text-xs text-zinc-500 select-none opacity-70 min-h-27.5">
         <div className="flex gap-2 mb-2">
            <span className="w-3 h-3 rounded-full bg-red-500/20"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/20"></span>
         </div>
         <div className="space-y-1 min-h-16">
            {lines.map((line, i) => (
               <div key={i}>{renderLine(line, i)}</div>
            ))}
         </div>
      </div>
   );
}
