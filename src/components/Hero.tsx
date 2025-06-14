
import { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { PoweredBy } from "./PoweredBy";

const Hero = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    {
      title: "Free Shop Generator",
      subtitle: "Free Today, Free Forever",
      description: "Create unlimited e-commerce stores without any cost. No hidden fees, no premium tiers - just pure freedom to build your dream shop.",
      accent: "from-emerald-500 to-teal-500"
    },
    {
      title: "Shopify But Free",
      subtitle: "All Features, Zero Cost",
      description: "Get all the powerful features of premium platforms without spending a dime. Professional templates, payment processing, and analytics included.",
      accent: "from-blue-500 to-cyan-500"
    },
    {
      title: "Unlimited Possibilities",
      subtitle: "No Limits, No Restrictions",
      description: "Scale your business without worrying about transaction fees or monthly subscriptions. Your success is our success.",
      accent: "from-purple-500 to-pink-500"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary gradient orbs with more vibrant colors */}
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-red-500/40 via-purple-500/30 to-transparent rounded-full animate-pulse-slow"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-orange-500/35 via-blue-500/25 to-transparent rounded-full animate-pulse delay-1000"></div>
        
        {/* Multiple floating orbs with different speeds */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-red-400/20 to-orange-400/20 rounded-full blur-xl animate-float-slow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-gradient-to-r from-purple-400/25 to-blue-400/25 rounded-full blur-lg animate-float delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-gradient-to-r from-emerald-400/30 to-teal-400/30 rounded-full blur-md animate-float-random delay-3000"></div>
        
        {/* Enhanced animated grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-grid-move"></div>
        
        {/* Particle system */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-red-400/60 rounded-full animate-bounce-slow"></div>
        <div className="absolute top-32 right-16 w-1.5 h-1.5 bg-orange-400/60 rounded-full animate-bounce delay-500"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-purple-400/60 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-60 right-32 w-2.5 h-2.5 bg-blue-400/60 rounded-full animate-bounce delay-1500"></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 space-y-12 max-w-6xl mx-auto">
        {/* Logo with enhanced animation */}
        <div className="animate-slide-up">
          <Logo />
        </div>
        
        {/* Coming Soon with enhanced glow effect */}
        <div className="animate-slide-up delay-300">
          <div className="relative">
            <p className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-300 tracking-widest animate-pulse-text">
              COMING SOON
            </p>
            <div className="absolute inset-0 text-4xl md:text-5xl lg:text-6xl font-light text-transparent bg-gradient-to-r from-red-500 via-orange-500 to-purple-500 bg-clip-text animate-gradient-shift opacity-50"></div>
          </div>
        </div>
        
        {/* Slogan with enhanced styling */}
        <div className="animate-slide-up delay-500">
          <div className="relative">
            <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-200 italic relative z-10 mb-8">
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-purple-400 bg-clip-text text-transparent animate-gradient-shift">
                "Liberating the e-commerce stage"
              </span>
            </p>
            {/* Enhanced decorative quotes */}
            <div className="absolute -top-6 -left-6 text-7xl text-red-400/30 animate-float">"</div>
            <div className="absolute -bottom-6 -right-6 text-7xl text-purple-400/30 animate-float delay-1000">"</div>
          </div>
          
          {/* Interactive Tab Indicators */}
          <div className="flex justify-center space-x-4 mb-8">
            {tabs.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`w-12 h-2 rounded-full transition-all duration-500 hover:scale-110 ${
                  activeTab === index 
                    ? 'bg-gradient-to-r from-red-500 to-orange-500 shadow-lg shadow-red-500/50' 
                    : 'bg-gray-600 hover:bg-gray-500'
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
                    ? 'bg-purple-400 shadow-lg shadow-purple-400/50 animate-pulse' 
                    : 'bg-gray-500 hover:bg-gray-400'
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
                  <p className="text-xl md:text-2xl text-gray-300 font-medium animate-pulse-text">
                    {tab.subtitle}
                  </p>
                  <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    {tab.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Enhanced description with more animations */}
        <div className="animate-slide-up delay-1000">
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-4">
            <span className="inline-block animate-fade-in-word">We're</span>{" "}
            <span className="inline-block animate-fade-in-word delay-100">crafting</span>{" "}
            <span className="inline-block animate-fade-in-word delay-200">something</span>{" "}
            <span className="inline-block animate-fade-in-word delay-300 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent font-semibold">extraordinary</span>{" "}
            <span className="inline-block animate-fade-in-word delay-400">for</span>{" "}
            <span className="inline-block animate-fade-in-word delay-500">the</span>{" "}
            <span className="inline-block animate-fade-in-word delay-600">future</span>{" "}
            <span className="inline-block animate-fade-in-word delay-700">of</span>{" "}
            <span className="inline-block animate-fade-in-word delay-800 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-semibold">e-commerce</span>.
          </p>
          <p className="text-lg md:text-xl text-gray-500 animate-fade-in delay-1200">
            Get ready to experience shopping like never before.
          </p>
        </div>
        
        {/* Powered by Winston Red */}
        <PoweredBy />
      </div>
      
      {/* Enhanced floating elements */}
      <div className="absolute top-16 left-8 w-4 h-4 bg-red-400/40 rounded-full animate-float-random"></div>
      <div className="absolute top-32 right-16 w-3 h-3 bg-orange-400/40 rounded-full animate-float-random delay-500"></div>
      <div className="absolute bottom-24 left-16 w-5 h-5 bg-purple-400/40 rounded-full animate-float-random delay-1000"></div>
      <div className="absolute bottom-40 right-12 w-2 h-2 bg-blue-400/40 rounded-full animate-float-random delay-1500"></div>
      
      {/* Shooting stars effect */}
      <div className="absolute top-1/4 left-0 w-1 h-1 bg-white rounded-full animate-[shooting-star_3s_linear_infinite]"></div>
      <div className="absolute top-1/2 right-0 w-1 h-1 bg-white rounded-full animate-[shooting-star_4s_linear_infinite_1s]"></div>
    </div>
  );
};

export default Hero;
