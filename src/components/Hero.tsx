
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Enhanced 3D circuit board background pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" fill="none" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="circuit" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              {/* Main nodes */}
              <circle cx="40" cy="40" r="3" fill="white" opacity="0.8"/>
              <circle cx="40" cy="40" r="6" fill="none" stroke="white" strokeWidth="1" opacity="0.4"/>
              
              {/* Connection lines */}
              <line x1="40" y1="0" x2="40" y2="80" stroke="white" strokeWidth="1" opacity="0.6"/>
              <line x1="0" y1="40" x2="80" y2="40" stroke="white" strokeWidth="1" opacity="0.6"/>
              
              {/* Corner connections */}
              <line x1="0" y1="0" x2="20" y2="20" stroke="white" strokeWidth="0.5" opacity="0.3"/>
              <line x1="80" y1="0" x2="60" y2="20" stroke="white" strokeWidth="0.5" opacity="0.3"/>
              <line x1="0" y1="80" x2="20" y2="60" stroke="white" strokeWidth="0.5" opacity="0.3"/>
              <line x1="80" y1="80" x2="60" y2="60" stroke="white" strokeWidth="0.5" opacity="0.3"/>
              
              {/* Smaller nodes */}
              <circle cx="20" cy="20" r="1.5" fill="white" opacity="0.6"/>
              <circle cx="60" cy="20" r="1.5" fill="white" opacity="0.6"/>
              <circle cx="20" cy="60" r="1.5" fill="white" opacity="0.6"/>
              <circle cx="60" cy="60" r="1.5" fill="white" opacity="0.6"/>
            </pattern>
            
            {/* 3D depth effect gradient */}
            <radialGradient id="depth" cx="50%" cy="30%" r="70%">
              <stop offset="0%" stopColor="white" stopOpacity="0.15"/>
              <stop offset="100%" stopColor="white" stopOpacity="0"/>
            </radialGradient>
          </defs>
          
          <rect width="1000" height="1000" fill="url(#circuit)"/>
          <rect width="1000" height="1000" fill="url(#depth)"/>
        </svg>
      </div>
      
      {/* Floating particles for 3D effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white rounded-full opacity-40 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-white rounded-full opacity-25 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/6 right-1/3 w-1 h-1 bg-white rounded-full opacity-35 animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 text-center text-white relative z-10">
        <div className="mb-8 animate-fade-in">
          <div className="w-24 h-24 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-2xl p-4">
            <img 
              src="/lovable-uploads/b1d88ea3-1e28-45b9-97a9-ce4a2800ed7f.png" 
              alt="Greecode Logo" 
              className="w-full h-full object-contain"
            />
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
          className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
        >
          Get Started
          <ArrowDown className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
