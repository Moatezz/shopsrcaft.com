
import { useState, useEffect, useRef } from "react";
import { Logo } from "./Logo";
import { PoweredBy } from "./PoweredBy";

const Hero = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [lines, setLines] = useState<Array<{ x1: number; y1: number; x2: number; y2: number; opacity: number }>>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const tabs = [
    {
      title: "Free Shop Generator",
      subtitle: "Free Today, Free Forever",
      description: "Create unlimited e-commerce stores without any cost. No hidden fees, no premium tiers - just pure freedom to build your dream shop.",
      accent: "from-red-500 to-red-700"
    },
    {
      title: "Shopify But Free",
      subtitle: "All Features, Zero Cost",
      description: "Get all the powerful features of premium platforms without spending a dime. Professional templates, payment processing, and analytics included.",
      accent: "from-red-600 to-red-800"
    },
    {
      title: "Unlimited Possibilities",
      subtitle: "No Limits, No Restrictions",
      description: "Scale your business without worrying about transaction fees or monthly subscriptions. Your success is our success.",
      accent: "from-red-700 to-red-900"
    }
  ];

  // Handle mouse movement for cursor tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });

        // Create new lines that connect to mouse position
        const newLines = [];
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Add main line from center to cursor
        newLines.push({
          x1: centerX,
          y1: centerY,
          x2: x,
          y2: y,
          opacity: 0.6
        });

        // Add web lines from random points to cursor
        for (let i = 0; i < 5; i++) {
          const randomX = Math.random() * rect.width;
          const randomY = Math.random() * rect.height;
          const distance = Math.sqrt((x - randomX) ** 2 + (y - randomY) ** 2);
          const maxDistance = 300;
          
          if (distance < maxDistance) {
            newLines.push({
              x1: randomX,
              y1: randomY,
              x2: x,
              y2: y,
              opacity: Math.max(0, 0.4 - (distance / maxDistance))
            });
          }
        }

        setLines(newLines);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="flex flex-col items-center justify-center min-h-screen px-4 text-center relative overflow-hidden"
    >
      {/* Cursor tracking web lines */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
        style={{ mixBlendMode: 'screen' }}
      >
        {lines.map((line, index) => (
          <line
            key={index}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="url(#redGradient)"
            strokeWidth="1"
            opacity={line.opacity}
            className="animate-pulse"
          />
        ))}
        <defs>
          <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="50%" stopColor="#dc2626" />
            <stop offset="100%" stopColor="#b91c1c" />
          </linearGradient>
        </defs>
      </svg>

      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary gradient orbs with red-black theme */}
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-red-600/40 via-red-800/30 to-transparent rounded-full animate-pulse-slow"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-red-700/35 via-black/25 to-transparent rounded-full animate-pulse delay-1000"></div>
        
        {/* Multiple floating orbs with red tones */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-red-500/25 to-red-600/20 rounded-full blur-xl animate-float-slow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-gradient-to-r from-red-700/30 to-red-800/25 rounded-full blur-lg animate-float delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-gradient-to-r from-red-400/35 to-red-500/30 rounded-full blur-md animate-float-random delay-3000"></div>
        
        {/* Enhanced animated grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,.06)_1px,transparent_1px)] bg-[size:50px_50px] animate-grid-move"></div>
        
        {/* Particle system with red theme */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-red-500/70 rounded-full animate-bounce-slow"></div>
        <div className="absolute top-32 right-16 w-1.5 h-1.5 bg-red-600/70 rounded-full animate-bounce delay-500"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-red-700/70 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-60 right-32 w-2.5 h-2.5 bg-red-800/70 rounded-full animate-bounce delay-1500"></div>

        {/* Spinning Diamond Element */}
        <div className="absolute top-1/4 right-1/4 animate-spin-slow">
          <div className="relative w-16 h-16">
            {/* Outer glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-700 opacity-60 blur-lg rotate-45 animate-pulse"></div>
            {/* Main diamond */}
            <div className="absolute inset-2 bg-gradient-to-br from-red-600 via-red-700 to-red-800 rotate-45 shadow-lg shadow-red-500/50"></div>
            {/* Inner highlight */}
            <div className="absolute inset-4 bg-gradient-to-tl from-red-400 to-red-500 rotate-45 opacity-80"></div>
            {/* Center core */}
            <div className="absolute inset-6 bg-white rotate-45 opacity-90 animate-pulse"></div>
          </div>
        </div>

        {/* Spinning Hexagon Element */}
        <div className="absolute bottom-1/4 left-1/4 animate-spin-reverse">
          <div className="relative w-12 h-12">
            <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-900 opacity-70 blur-md" style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)' }}></div>
            <div className="absolute inset-2 bg-gradient-to-br from-red-600 to-red-800" style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)' }}></div>
            <div className="absolute inset-4 bg-red-400 opacity-90 animate-pulse" style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)' }}></div>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="relative z-20 space-y-12 max-w-6xl mx-auto">
        {/* Logo with enhanced animation */}
        <div className="animate-slide-up">
          <Logo />
        </div>
        
        {/* Coming Soon with enhanced glow effect */}
        <div className="animate-slide-up delay-300">
          <div className="relative">
            <p className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-200 tracking-widest animate-pulse-text">
              COMING SOON
            </p>
            <div className="absolute inset-0 text-4xl md:text-5xl lg:text-6xl font-light text-transparent bg-gradient-to-r from-red-500 via-red-600 to-red-800 bg-clip-text animate-gradient-shift opacity-60"></div>
          </div>
        </div>
        
        {/* Slogan with enhanced styling */}
        <div className="animate-slide-up delay-500">
          <div className="relative">
            <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-100 italic relative z-10 mb-8">
              <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent animate-gradient-shift">
                "Liberating the e-commerce stage"
              </span>
            </p>
            {/* Enhanced decorative quotes */}
            <div className="absolute -top-6 -left-6 text-7xl text-red-500/40 animate-float">"</div>
            <div className="absolute -bottom-6 -right-6 text-7xl text-red-600/40 animate-float delay-1000">"</div>
          </div>
          
          {/* Interactive Tab Indicators */}
          <div className="flex justify-center space-x-4 mb-8">
            {tabs.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`w-12 h-2 rounded-full transition-all duration-500 hover:scale-110 ${
                  activeTab === index 
                    ? 'bg-gradient-to-r from-red-500 to-red-700 shadow-lg shadow-red-500/50' 
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
              />
            ))}
          </div>
          
          {/* Interactive Dots */}
          <div className="flex justify-center space-x-4 mb-8">
            {tabs.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                  activeTab === index 
                    ? 'bg-red-500 shadow-lg shadow-red-500/50 animate-pulse' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
        
        {/* Tab Content with smooth transitions */}
        <div className="animate-slide-up delay-700">
          <div className="relative h-48 mb-8">
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ${
                  activeTab === index 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-4'
                }`}
              >
                <div className="text-center space-y-4">
                  <h3 className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${tab.accent} bg-clip-text text-transparent animate-gradient-shift`}>
                    {tab.title}
                  </h3>
                  <p className="text-xl md:text-2xl text-gray-200 font-medium animate-pulse-text">
                    {tab.subtitle}
                  </p>
                  <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                    {tab.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Enhanced description with more animations */}
        <div className="animate-slide-up delay-1000">
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-4">
            <span className="inline-block animate-fade-in-word">We're</span>{" "}
            <span className="inline-block animate-fade-in-word delay-100">crafting</span>{" "}
            <span className="inline-block animate-fade-in-word delay-200">something</span>{" "}
            <span className="inline-block animate-fade-in-word delay-300 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent font-semibold">extraordinary</span>{" "}
            <span className="inline-block animate-fade-in-word delay-400">for</span>{" "}
            <span className="inline-block animate-fade-in-word delay-500">the</span>{" "}
            <span className="inline-block animate-fade-in-word delay-600">future</span>{" "}
            <span className="inline-block animate-fade-in-word delay-700">of</span>{" "}
            <span className="inline-block animate-fade-in-word delay-800 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent font-semibold">e-commerce</span>.
          </p>
          <p className="text-lg md:text-xl text-gray-400 animate-fade-in delay-1200">
            Get ready to experience shopping like never before.
          </p>
        </div>
        
        {/* Powered by Winston Red */}
        <PoweredBy />
      </div>
      
      {/* Enhanced floating elements with red theme */}
      <div className="absolute top-16 left-8 w-4 h-4 bg-red-500/50 rounded-full animate-float-random"></div>
      <div className="absolute top-32 right-16 w-3 h-3 bg-red-600/50 rounded-full animate-float-random delay-500"></div>
      <div className="absolute bottom-24 left-16 w-5 h-5 bg-red-700/50 rounded-full animate-float-random delay-1000"></div>
      <div className="absolute bottom-40 right-12 w-2 h-2 bg-red-800/50 rounded-full animate-float-random delay-1500"></div>
      
      {/* Shooting stars effect with red glow */}
      <div className="absolute top-1/4 left-0 w-1 h-1 bg-red-400 rounded-full animate-[shooting-star_3s_linear_infinite]"></div>
      <div className="absolute top-1/2 right-0 w-1 h-1 bg-red-500 rounded-full animate-[shooting-star_4s_linear_infinite_1s]"></div>
    </div>
  );
};

export default Hero;
