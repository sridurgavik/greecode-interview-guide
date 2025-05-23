
import { Code, Clock, Users, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Code,
      title: "AI-Powered Assistance",
      description: "Get intelligent suggestions and guidance during your technical interviews"
    },
    {
      icon: Clock,
      title: "Real-Time Feedback",
      description: "Receive instant feedback and tips while you're answering questions"
    },
    {
      icon: Users,
      title: "Interview Transcription",
      description: "Automatic transcription of your interview conversations for later review"
    },
    {
      icon: Search,
      title: "Post-Interview Analysis",
      description: "Detailed analysis and suggestions to improve your future performance"
    }
  ];

  return (
    <section className="py-20 bg-white" id="features">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About the Extension
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The Greecode Interview Assistant transforms your technical interview experience with cutting-edge AI technology
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gray-900 rounded-full flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gray-100 rounded-3xl p-8 max-w-4xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-gray-800 to-black rounded-2xl flex items-center justify-center">
              <div className="text-white text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Code className="h-10 w-10" />
                </div>
                <p className="text-lg">Extension Demo Preview</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
