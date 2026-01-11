import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PainPointsSection from "@/components/PainPointsSection";
import SolutionSection from "@/components/SolutionSection";
import StepsSection from "@/components/StepsSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import TechnologySection from "@/components/TechnologySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import PricingHighlight from "@/components/PricingHighlight";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PricingHighlight />
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        <PainPointsSection />
        <section id="solution">
          <SolutionSection />
        </section>
        <PricingSection />
        <StepsSection />
        <ServicesSection />
        <TechnologySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
