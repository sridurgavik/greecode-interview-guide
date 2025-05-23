
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Key, Lock, Users } from "lucide-react";

const PasskeySystem = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Passkeys use advanced cryptography to protect your account better than passwords"
    },
    {
      icon: Key,
      title: "Easy Access",
      description: "No more forgotten passwords - use biometrics or device authentication"
    },
    {
      icon: Lock,
      title: "Phishing Protection",
      description: "Passkeys are tied to specific domains, preventing phishing attacks"
    },
    {
      icon: Users,
      title: "Cross-Platform",
      description: "Use the same passkey across all your devices and browsers"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="passkey-system">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Secure Passkey Authentication
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of secure authentication with our advanced passkey system
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gray-900 rounded-full flex items-center justify-center">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-xl rounded-3xl">
            <CardContent className="p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                How to Get Your Passkey
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Visit Greecode.in</h4>
                    <p className="text-gray-600">Navigate to the Greecode.in website and click on "Sign Up" or "Login"</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Create Account</h4>
                    <p className="text-gray-600">Follow the registration process and verify your email address</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Set Up Passkey</h4>
                    <p className="text-gray-600">Go to Security Settings and click "Add Passkey" to set up your secure authentication</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Use in Extension</h4>
                    <p className="text-gray-600">Your passkey will automatically work with the Chrome extension for seamless login</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PasskeySystem;
