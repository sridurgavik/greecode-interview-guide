
import { Code, Clock, Users, Search, Play, Pause } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const VideoPlayer = ({ title, description, videoSrc, thumbnailSrc }: {
  title: string;
  description: string;
  videoSrc?: string;
  thumbnailSrc?: string;
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div 
      className="relative group cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-3xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Video/Thumbnail Container */}
      <div className="aspect-video relative overflow-hidden">
        {videoSrc ? (
          <video
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            poster={thumbnailSrc}
            controls={isPlaying}
            autoPlay={isPlaying}
            muted
            loop
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
            <div className="text-white text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Code className="h-10 w-10" />
              </div>
              <p className="text-lg font-medium">Demo Video Coming Soon</p>
            </div>
          </div>
        )}
        
        {/* Play/Pause Overlay */}
        <div 
          className={`absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-all duration-300 ${
            isHovered || !videoSrc ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Button
            onClick={handlePlayPause}
            className="w-16 h-16 rounded-full bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 transition-all duration-300 hover:scale-110"
            variant="ghost"
          >
            {isPlaying ? (
              <Pause className="h-8 w-8 text-white" />
            ) : (
              <Play className="h-8 w-8 text-white ml-1" />
            )}
          </Button>
        </div>

        {/* Animated Border */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
             style={{ background: 'linear-gradient(45deg, transparent, transparent), linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)', backgroundClip: 'padding-box, border-box' }} />
      </div>

      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>

      {/* Animated Pulse Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
    </div>
  );
};

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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
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
        
        {/* Extension Demo Preview Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Extension Demo Preview
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Watch how Greecode Interview Assistant works in action and see the power of AI-driven interview preparation
          </p>
          
          {/* Video Components Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <VideoPlayer
              title="Greecode Extension Demo"
              description="See how our Chrome extension assists you during live technical interviews with real-time AI suggestions and code analysis."
            />
            <VideoPlayer
              title="Greecode.in Platform Tour"
              description="Explore the full Greecode.in platform with practice interviews, AI feedback, and comprehensive interview preparation tools."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
