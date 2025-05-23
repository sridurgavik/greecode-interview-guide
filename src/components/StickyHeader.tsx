
import { useState, useEffect } from 'react';

const StickyHeader = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div 
      className={`fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div className="container mx-auto px-6 py-3">
        <div 
          className="flex items-center cursor-pointer hover:opacity-80 transition-opacity"
          onClick={scrollToTop}
        >
          <div className="w-8 h-8 mr-3 bg-white rounded-full flex items-center justify-center p-1">
            <img 
              src="/lovable-uploads/b1d88ea3-1e28-45b9-97a9-ce4a2800ed7f.png" 
              alt="Greecode Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-white font-bold text-lg">Greecode</span>
        </div>
      </div>
    </div>
  );
};

export default StickyHeader;
