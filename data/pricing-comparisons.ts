export const FEATURE_COMPARISON = [
   {
      feature: "String Encryption",
      standard: true,
      vm: true,
   },
   {
      feature: "Control Flow Flattening",
      standard: true,
      vm: true,
   },
   {
      feature: "Dead Code Injection",
      standard: true,
      vm: true,
   },
   {
      feature: "Self-Defending Code",
      standard: true,
      vm: true,
   },
   {
      feature: "Bytecode Virtualization",
      standard: false,
      vm: true,
   },
   {
      feature: "Custom VM Runtime",
      standard: false,
      vm: true,
   },
   {
      feature: "Anti-Tampering",
      standard: false,
      vm: true,
   },
];

export const TECHNICAL_COMPARISON = [
   {
      aspect: "Execution Environment",
      standard: "Runs in your browser",
      vm: "Server-side processing",
   },
   {
      aspect: "Protection Level",
      standard: "Basic to Medium",
      vm: "Maximum",
   },
   {
      aspect: "Code Transformation",
      standard: "Syntax-level obfuscation",
      vm: "Bytecode virtualization",
   },
   {
      aspect: "Output Structure",
      standard: "Still resembles JavaScript code",
      vm: "Completely transformed to bytecode",
   },
   {
      aspect: "Original Code Visibility",
      standard: "Logic flow partially recoverable",
      vm: "No original source in any form",
   },
   {
      aspect: "Reverse Engineering Resistance",
      standard: "Moderate",
      vm: "Extremely High",
   },
];
