import { Sparkles } from "lucide-react";

const SparkleEffect = () => {
  const sparkles = Array.from({ length: 8 }, (_, i) => i);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {sparkles.map((sparkle, index) => (
        <Sparkles
          key={sparkle}
          className="absolute text-romantic-secondary animate-sparkle"
          style={{
            left: `${15 + Math.random() * 70}%`,
            top: `${10 + Math.random() * 80}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${2 + Math.random()}s`,
          }}
          size={16 + Math.random() * 8}
          fill="currentColor"
        />
      ))}
    </div>
  );
};

export default SparkleEffect;