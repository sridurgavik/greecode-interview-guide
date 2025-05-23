
import { Card, CardContent } from "@/components/ui/card";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Login with Greecode.in",
      description: "Use your Greecode.in credentials to authenticate securely with our passkey system"
    },
    {
      number: "02", 
      title: "View Scheduled Interviews",
      description: "See all your upcoming technical interviews in one convenient dashboard"
    },
    {
      number: "03",
      title: "Join Interview Session",
      description: "Click to join when it's time for your interview - the assistant activates automatically"
    },
    {
      number: "04",
      title: "Receive Real-Time Help",
      description: "Get AI-powered suggestions, hints, and guidance during your interview"
    },
    {
      number: "05",
      title: "Review Feedback",
      description: "Access detailed post-interview analysis and recommendations for improvement"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="how-it-works">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started with the Greecode Interview Assistant in just five simple steps
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start mb-12 last:mb-0">
              <div className="flex-shrink-0 w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center text-xl font-bold mr-6">
                {step.number}
              </div>
              <Card className="flex-1 border-0 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-2xl">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
