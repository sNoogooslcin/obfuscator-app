import CodeComparisonSection from "@/components/code-comparison-section";
import FaqSection from "@/components/faq-section";
import FeaturesSection from "@/components/features-section";
import HeroSection from "@/components/hero-section";
import UseCasesSection from "@/components/use-cases-section";
import WorkflowSection from "@/components/workflow-section";

export default function Home() {
   return (
      <main className="min-h-screen bg-background">
         <HeroSection />
         <FeaturesSection />
         <CodeComparisonSection />
         <WorkflowSection />
         <UseCasesSection />
         <FaqSection />
      </main>
   );
}
