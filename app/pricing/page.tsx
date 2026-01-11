import FAQSection from "@/components/faq-section";
import PricingComparisons from "@/components/pages/pricing/pricing-comparisons";
import PricingHero from "@/components/pages/pricing/pricing-hero";
import PricingSection from "@/components/pages/pricing/pricing-section";

export default function PricingPage() {
   return (
      <>
         <PricingHero />
         <PricingSection />
         <PricingComparisons />
         <FAQSection />
      </>
   );
}
