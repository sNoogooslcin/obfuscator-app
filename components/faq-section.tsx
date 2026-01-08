import { ChevronDown } from "lucide-react";

export default function FaqSection() {
   const faqs = [
      {
         question: "Why would I want to obfuscate my JavaScript code?",
         answer:
            "To protect intellectual property, trade secrets, and sensitive logic from competitors and malicious actors. It also deters tampering and unauthorized modification of your client-side application.",
      },
      {
         question:
            "What is VM obfuscation and how is it different from standard obfuscation?",
         answer:
            "Standard obfuscation merely renames variables and muddles control flow. VM obfuscation transforms your code into a custom bytecode format that runs inside a virtual machine generated specifically for your code. This requires reverse engineers to first understand the custom VM before they can even begin to understand your logic.",
      },
      {
         question: "Is this obfuscator absolutely foolproof?",
         answer:
            "No security solution is 100% unbreakable. However, VM obfuscation significantly raises the bar, making reverse engineering exponentially more time-consuming and expensive. It turns a trivial task into a massive undertaking.",
      },
      {
         question: "Is there a deobfuscator for VM-obfuscated code?",
         answer:
            "There are no automated generic deobfuscators for our VM logic because the 'architecture' of the VM changes with every seed. An attacker must perform manual analysis for each specific instance.",
      },
      {
         question:
            "My code doesn't work after VM obfuscation. What should I do?",
         answer:
            "Ensure your code doesn't rely on `eval`, `Function` constructors, or dynamic property access on unstable names. Try enabling simpler obfuscation presets to isolate the issue.",
      },
      {
         question: "Why is my obfuscated code larger than my original source?",
         answer:
            "The output includes the custom Virtual Machine interpreter required to execute your bytecode. This overhead is constant, meaning it's less noticeable on larger projects but significant on very small scripts.",
      },
      {
         question: "How does obfuscation affect performance?",
         answer:
            "VM execution is slower than native JavaScript because of the interpretation overhead. We recommend excluding performance-critical 'hot path' loops (like rendering or physics calculations) from the highest protection levels.",
      },
      {
         question: "Can I run a minifier on the obfuscated output?",
         answer:
            "The output is already optimized. Running a third-party minifier again *might* break the code if it aggressively renames properties the VM relies on. We recommend minifying your source *before* obfuscation or trusting our built-in optimization.",
      },
      {
         question: "Do you store my source code?",
         answer:
            "No. Your code is processed entirely in memory and is discarded immediately after the download is generated. We do not persist source code.",
      },
      {
         question:
            "Can I recover the original source code from the obfuscated one?",
         answer:
            "No. Obfuscation is a destructive one-way process. Always keep a backup of your original source code before applying protection.",
      },
      {
         question: "Does this tool work with Node.js source code?",
         answer:
            "Yes, the obfuscated code is standard JavaScript (ES5/ES6) and runs in any environment, including Node.js, Browsers, and Electron.",
      },
      {
         question: "What JavaScript versions and formats do you support?",
         answer:
            "We support modern ECMAScript standards (ES6+) as well as older versions. The output is compatible with virtually all environments that support ES5.",
      },
      {
         question: "How do I get started?",
         answer:
            "Simply upload your JavaScript file using the 'Upload' step above, choose your protection preset, and click 'Obfuscate'.",
      },
   ];

   return (
      <section className="relative z-10 py-24 px-6 border-t border-white/5 bg-background">
         <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-white tracking-tight mb-8">
               Common Questions
            </h2>

            <div className="grid gap-4">
               {faqs.map((faq, index) => (
                  <details
                     key={index}
                     className="group bg-[#0A0A0C] border border-white/5 rounded-lg overflow-hidden [&_summary::-webkit-details-marker]:hidden"
                  >
                     <summary className="flex items-center justify-between p-4 cursor-pointer select-none">
                        <span className="text-sm font-medium text-zinc-200">
                           {faq.question}
                        </span>
                        <span className="transition-transform duration-300 group-open:rotate-180">
                           <ChevronDown className="w-4 h-4 text-zinc-500" />
                        </span>
                     </summary>
                     <div className="px-4 pb-4 text-xs text-zinc-400 leading-relaxed">
                        {faq.answer}
                     </div>
                  </details>
               ))}
            </div>
         </div>
      </section>
   );
}
