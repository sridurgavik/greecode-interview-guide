
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Circuit board background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" fill="none">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="white"/>
              <line x1="50" y1="0" x2="50" y2="100" stroke="white" strokeWidth="1"/>
              <line x1="0" y1="50" x2="100" y2="50" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="1000" height="1000" fill="url(#circuit)"/>
        </svg>
      </div>
      
      <div className="container mx-auto px-6 text-center text-white relative z-10">
        <div className="mb-8 animate-fade-in">
          <div className="w-24 h-24 mx-auto mb-6 bg-white rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-black">GC</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Greecode
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-2">Interview Assistant</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Your AI-powered interview companion for technical interviews
          </p>
        </div>
        
        <Button 
          onClick={() => scrollToSection('how-it-works')}
          className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
        >
          Get Started
          <ArrowDown className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
