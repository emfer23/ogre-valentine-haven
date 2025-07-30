import { Heart, Sparkles } from "lucide-react";
import FloatingHearts from "@/components/FloatingHearts";
import SparkleEffect from "@/components/SparkleEffect";
import floatingHeartsImg from "@/assets/floating-hearts.jpg";
import cuteHeartImg from "@/assets/cute-heart.jpg";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-romantic">
      {/* Background hearts */}
      <FloatingHearts />
      
      {/* Background image overlay */}
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${floatingHeartsImg})` }}
      />
      
      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Sparkle effects */}
          <SparkleEffect />
          
          {/* Cute heart image */}
          <div className="mb-8 animate-fade-in-up">
            <img 
              src={cuteHeartImg} 
              alt="Cute heart" 
              className="w-32 h-32 mx-auto mb-6 animate-pulse-heart drop-shadow-soft"
            />
          </div>
          
          {/* Main message */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Welcome back home,
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-romantic-secondary mb-8 leading-tight">
              my beautiful ogre
            </h2>
          </div>
          
          {/* Decorative hearts */}
          <div className="flex justify-center items-center gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Heart className="text-romantic-secondary animate-pulse-heart" size={24} fill="currentColor" />
            <Heart className="text-white animate-pulse-heart" size={32} fill="currentColor" style={{ animationDelay: '0.5s' }} />
            <Heart className="text-romantic-pink animate-pulse-heart" size={28} fill="currentColor" style={{ animationDelay: '1s' }} />
            <Heart className="text-white animate-pulse-heart" size={32} fill="currentColor" style={{ animationDelay: '1.5s' }} />
            <Heart className="text-romantic-secondary animate-pulse-heart" size={24} fill="currentColor" style={{ animationDelay: '2s' }} />
          </div>
          
          {/* Romantic message */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <p className="text-xl md:text-2xl text-white/90 font-medium italic">
              Where love lives and hearts beat as one
            </p>
          </div>
          
          {/* Bottom decorative elements */}
          <div className="mt-12 flex justify-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="flex items-center gap-2">
              <Sparkles className="text-romantic-secondary animate-sparkle" size={20} fill="currentColor" />
              <Heart className="text-romantic-pink animate-pulse-heart" size={16} fill="currentColor" />
              <Sparkles className="text-romantic-secondary animate-sparkle" size={20} fill="currentColor" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-romantic-primary/20 via-transparent to-romantic-rose/30 pointer-events-none" />
    </div>
  );
};

export default Index;
