
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Support = () => {
  const donationTiers = [
    {
      amount: "$5",
      title: "Coffee Supporter",
      description: "Help keep our developers caffeinated while building new features"
    },
    {
      amount: "$25",
      title: "Feature Sponsor",
      description: "Contribute to the development of new AI capabilities"
    },
    {
      amount: "$50",
      title: "Premium Backer",
      description: "Support server costs and premium feature development"
    },
    {
      amount: "$100",
      title: "Champion Contributor",
      description: "Become a recognized supporter with special benefits"
    }
  ];

  return (
    <section className="py-20 bg-white" id="support">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Support Our Mission
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Help us continue developing and improving the Greecode Interview Assistant. 
            Your contributions directly support feature development, server costs, and platform improvements.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {donationTiers.map((tier, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-2xl">
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div className="text-3xl font-bold text-gray-900 mb-4">
                  {tier.amount}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {tier.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  {tier.description}
                </p>
                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-full mt-auto">
                  Donate {tier.amount}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Custom Donation</h3>
          <p className="text-xl mb-8 opacity-90">
            Choose your own amount to support our development efforts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="number" 
              placeholder="Enter amount"
              className="flex-1 px-4 py-3 rounded-full text-black"
            />
            <Button className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-full whitespace-nowrap">
              Donate Now
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm opacity-75">
            <span>PayPal</span>
            <span>•</span>
            <span>Credit Card</span>
            <span>•</span>
            <span>Cryptocurrency</span>
            <span>•</span>
            <span>Bank Transfer</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
