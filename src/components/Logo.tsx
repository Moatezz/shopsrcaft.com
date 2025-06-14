
export const Logo = () => {
  return (
    <div className="flex items-center justify-center mb-8">
      <div className="relative group">
        {/* Outer glow effect */}
        <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
        
        {/* Main logo container */}
        <div className="relative bg-white dark:bg-gray-900 rounded-full p-8 shadow-2xl border border-gray-200 dark:border-gray-700 group-hover:scale-105 transition-transform duration-300">
          {/* Logo symbol - using a stylized "S" for ShopsCraft */}
          <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 flex items-center justify-center">
            <svg 
              viewBox="0 0 100 100" 
              className="w-full h-full text-gradient"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="50%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#1E40AF" />
                </linearGradient>
              </defs>
              
              {/* Stylized S for ShopsCraft */}
              <path
                d="M25 25 Q50 10 75 25 Q60 40 50 50 Q40 60 75 75 Q50 90 25 75 Q40 60 50 50 Q60 40 25 25 Z"
                fill="url(#logoGradient)"
                className="drop-shadow-lg"
              />
              
              {/* Inner accent */}
              <circle
                cx="50"
                cy="50"
                r="8"
                fill="white"
                className="opacity-80"
              />
            </svg>
          </div>
        </div>
        
        {/* Floating particles effect */}
        <div className="absolute top-0 left-0 w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-4 right-0 w-1 h-1 bg-blue-400 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-0 left-4 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce delay-500"></div>
      </div>
    </div>
  );
};
