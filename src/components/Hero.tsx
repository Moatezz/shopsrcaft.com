
import { Logo } from "./Logo";
import { PoweredBy } from "./PoweredBy";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary gradient orbs */}
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-red-600/30 via-purple-600/20 to-transparent rounded-full animate-pulse-slow"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-orange-600/25 via-blue-600/15 to-transparent rounded-full animate-pulse delay-1000"></div>
        
        {/* Secondary floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-red-400/10 to-orange-400/10 rounded-full blur-xl animate-float-slow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-gradient-to-r from-purple-400/15 to-blue-400/15 rounded-full blur-lg animate-float delay-2000"></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px] animate-grid-move"></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 space-y-10 max-w-5xl mx-auto">
        {/* Logo with enhanced animation */}
        <div className="animate-slide-up">
          <Logo />
        </div>
        
        {/* Coming Soon with typewriter effect */}
        <div className="animate-slide-up delay-300">
          <p className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-600 dark:text-gray-300 tracking-widest animate-pulse-text">
            COMING SOON
          </p>
        </div>
        
        {/* Slogan with enhanced styling */}
        <div className="animate-slide-up delay-500">
          <div className="relative">
            <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-700 dark:text-gray-200 italic relative z-10">
              <span className="bg-gradient-to-r from-red-600 via-orange-500 to-purple-600 bg-clip-text text-transparent animate-gradient-shift">
                "Liberating the e-commerce stage"
              </span>
            </p>
            {/* Decorative quotes */}
            <div className="absolute -top-4 -left-4 text-6xl text-red-400/20 animate-float">"</div>
            <div className="absolute -bottom-4 -right-4 text-6xl text-purple-400/20 animate-float delay-1000">"</div>
          </div>
        </div>
        
        {/* Enhanced decorative elements */}
        <div className="animate-slide-up delay-700 space-y-4">
          <div className="flex justify-center space-x-2">
            <div className="w-8 h-1 bg-gradient-to-r from-red-600 to-orange-500 rounded-full animate-expand-contract"></div>
            <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full animate-expand-contract delay-200"></div>
            <div className="w-8 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full animate-expand-contract delay-400"></div>
          </div>
          
          {/* Animated dots */}
          <div className="flex justify-center space-x-3">
            <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce delay-100"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-200"></div>
          </div>
        </div>
        
        {/* Description with stagger animation */}
        <div className="animate-slide-up delay-1000">
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            <span className="inline-block animate-fade-in-word">We're</span>{" "}
            <span className="inline-block animate-fade-in-word delay-100">crafting</span>{" "}
            <span className="inline-block animate-fade-in-word delay-200">something</span>{" "}
            <span className="inline-block animate-fade-in-word delay-300 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent font-semibold">extraordinary</span>{" "}
            <span className="inline-block animate-fade-in-word delay-400">for</span>{" "}
            <span className="inline-block animate-fade-in-word delay-500">the</span>{" "}
            <span className="inline-block animate-fade-in-word delay-600">future</span>{" "}
            <span className="inline-block animate-fade-in-word delay-700">of</span>{" "}
            <span className="inline-block animate-fade-in-word delay-800 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent font-semibold">e-commerce</span>.
          </p>
          <p className="text-base md:text-lg text-gray-500 dark:text-gray-500 mt-4 animate-fade-in delay-1200">
            Get ready to experience shopping like never before.
          </p>
        </div>
        
        {/* Powered by Winston Red */}
        <PoweredBy />
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-red-300/30 rounded-full animate-float-random"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-orange-300/30 rounded-full animate-float-random delay-500"></div>
      <div className="absolute bottom-32 left-20 w-5 h-5 bg-purple-300/30 rounded-full animate-float-random delay-1000"></div>
    </div>
  );
};

export default Hero;
