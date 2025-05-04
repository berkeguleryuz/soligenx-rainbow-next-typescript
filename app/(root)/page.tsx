import BackHero from "@/components/home/BackHero";
import FeaturesSection from "@/components/home/FeaturesSection";
import HeroSection from "@/components/home/HeroSection";
// import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/home/FAQSection";
import Footer from "@/components/home/Footer";
import CallToAction from "@/components/home/CallToAction";

export default async function Home() {


  return (
    <main className="relative z-0 h-full w-full text-white">
      <HeroSection />
      {/* <PricingSection /> */}
      <BackHero />
      <FeaturesSection />
      <FAQSection />
      <CallToAction />
      <Footer />
    </main>
  );
}
