
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import AboutGreecode from "@/components/AboutGreecode";
import PasskeySystem from "@/components/PasskeySystem";
import Support from "@/components/Support";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import StickyHeader from "@/components/StickyHeader";

const Index = () => {
  return (
    <div className="min-h-screen">
      <StickyHeader />
      <Hero />
      <Features />
      <HowItWorks />
      <AboutGreecode />
      <PasskeySystem />
      <Support />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
