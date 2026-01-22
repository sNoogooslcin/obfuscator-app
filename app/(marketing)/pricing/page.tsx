import FAQSection from "@/components/faq-section";
import PricingComparisons from "@/components/pages/pricing/pricing-comparisons";
import PricingHero from "@/components/pages/pricing/pricing-hero";
import PricingSection from "@/components/pages/pricing/pricing-section";
import BgAmbience from "@/components/ui/bg-ambience";

export default function PricingPage() {
   return (
      <>
         <BgAmbience />
         <PricingHero />
         <PricingSection />
         <PricingComparisons />
         <FAQSection />
      </>
   );
}
