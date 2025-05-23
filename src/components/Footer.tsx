
import { Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                <span className="text-lg font-bold text-black">GC</span>
              </div>
              <span className="text-xl font-bold">Greecode</span>
            </div>
            <p className="text-gray-300 mb-4">
              Empowering developers to excel in technical interviews with AI-powered assistance.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#about-greecode" className="hover:text-white transition-colors">About Greecode</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#support" className="hover:text-white transition-colors">Donate</a></li>
              <li><a href="mailto:support@greecode.in" className="hover:text-white transition-colors flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                Contact Support
              </a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bug Reports</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Feature Requests</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="https://greecode.in" className="hover:text-white transition-colors flex items-center">
                Visit Greecode.in
                <ExternalLink className="h-4 w-4 ml-1" />
              </a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 mb-4 md:mb-0">
            © 2025 Greecode. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Twitter</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">GitHub</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
