
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp, Search } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const faqs = [
    {
      question: "How do I install the Greecode Interview Assistant?",
      answer: "You can install the extension from the Chrome Web Store. Simply search for 'Greecode Interview Assistant' and click 'Add to Chrome'."
    },
    {
      question: "Do I need a Greecode.in account to use the extension?",
      answer: "Yes, you need a Greecode.in account to access the full features of the extension. You can create a free account at Greecode.in."
    },
    {
      question: "How does the passkey authentication work?",
      answer: "Passkeys use your device's built-in security features like biometrics or PIN to authenticate you securely without passwords."
    },
    {
      question: "Is my interview data secure and private?",
      answer: "Yes, we use end-to-end encryption and follow strict privacy protocols. Your interview data is never shared with third parties."
    },
    {
      question: "Can I use the extension for all types of interviews?",
      answer: "The extension is optimized for technical interviews but can assist with any type of coding or technical discussion."
    },
    {
      question: "What happens if I encounter technical issues?",
      answer: "You can reach out to our support team through the contact form or email us directly for assistance with any technical issues."
    },
    {
      question: "Are there any costs associated with the extension?",
      answer: "The basic features are free, but premium features require a Greecode.in subscription. Donations help support continued development."
    },
    {
      question: "How accurate is the AI assistance?",
      answer: "Our AI is continuously trained on the latest interview patterns and provides highly accurate suggestions based on context and best practices."
    }
  ];

  const filteredFAQs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50" id="faq">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Find answers to common questions about the Greecode Interview Assistant
          </p>
          
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFAQs.map((faq, index) => (
            <Card key={index} className="border-0 shadow-md rounded-2xl overflow-hidden">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
