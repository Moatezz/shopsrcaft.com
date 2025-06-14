
export const Logo = () => {
  return (
    <div className="flex items-center justify-center mb-8">
      <div className="relative group">
        {/* Outer glow effect */}
        <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
        
        {/* Main logo container */}
        <div className="relative group-hover:scale-105 transition-transform duration-300">
          <img
            src="/lovable-uploads/dfe063a2-1f02-49f0-9ce3-4ecd1b6e846a.png"
            alt="ShopsCraft Logo"
            className="w-48 md:w-64 rounded-lg shadow-2xl"
          />
        </div>
        
        {/* Floating particles effect */}
        <div className="absolute top-0 left-0 w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-4 right-0 w-1 h-1 bg-blue-400 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-0 left-4 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce delay-500"></div>
      </div>
    </div>
  );
};
