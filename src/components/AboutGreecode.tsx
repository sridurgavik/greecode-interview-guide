
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const AboutGreecode = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Engineer at Google",
      quote: "Greecode helped me land my dream job! The interview practice was invaluable."
    },
    {
      name: "Mike Rodriguez", 
      role: "Full Stack Developer at Meta",
      quote: "The AI assistance during interviews gave me confidence I never had before."
    },
    {
      name: "Emily Zhang",
      role: "Senior Developer at Microsoft",
      quote: "The detailed feedback helped me improve my technical communication skills."
    }
  ];

  return (
    <section className="py-20 bg-white" id="about-greecode">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About Greecode.in
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Greecode.in is a comprehensive platform designed to help developers excel in technical interviews. 
            Our mission is to bridge the gap between talent and opportunity through AI-powered interview preparation.
          </p>
          <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full">
            Visit Greecode.in
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg rounded-2xl">
              <CardContent className="p-8">
                <p className="text-gray-600 italic mb-6 text-lg">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Ace Your Next Interview?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of developers who have successfully landed their dream jobs with Greecode.in
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-full">
              Start Free Trial
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-full">
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGreecode;
