
import { Logo } from "./Logo";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-600/20 to-transparent rounded-full animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-600/20 to-transparent rounded-full animate-pulse delay-1000"></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 space-y-8 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="animate-fade-in">
          <Logo />
        </div>
        
        {/* Brand name */}
        <div className="animate-fade-in delay-300">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
            ShopsCraft
          </h1>
        </div>
        
        {/* Coming Soon */}
        <div className="animate-fade-in delay-500">
          <p className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-600 dark:text-gray-300 tracking-wider">
            COMING SOON
          </p>
        </div>
        
        {/* Slogan */}
        <div className="animate-fade-in delay-700">
          <p className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-700 dark:text-gray-200 italic">
            "Liberating the e-commerce stage"
          </p>
        </div>
        
        {/* Decorative line */}
        <div className="animate-fade-in delay-1000">
          <div className="w-32 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
        </div>
        
        {/* Description */}
        <div className="animate-fade-in delay-1200">
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            We're crafting something extraordinary for the future of e-commerce. 
            Get ready to experience shopping like never before.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
