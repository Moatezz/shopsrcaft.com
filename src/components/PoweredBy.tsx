
export const PoweredBy = () => {
  return (
    <div className="flex items-center justify-center space-x-3 animate-fade-in delay-1500">
      <div className="text-sm text-gray-500 dark:text-gray-400 font-medium tracking-wide">
        POWERED BY
      </div>
      <div className="relative group">
        {/* Subtle glow effect */}
        <div className="absolute -inset-2 bg-red-600/20 rounded-md blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="relative flex items-center space-x-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-md border border-white/20 group-hover:border-red-400/30 transition-all duration-300">
          <img
            src="/lovable-uploads/e2e73ba2-29ad-4633-b698-c1fd323b8021.png"
            alt="Winston Red Logo"
            className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
          />
          <span className="text-sm font-semibold text-red-600 dark:text-red-400 group-hover:text-red-500 transition-colors duration-300">
            WINSTON RED
          </span>
        </div>
      </div>
    </div>
  );
};
