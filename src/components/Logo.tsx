
export const Logo = () => {
  return (
    <div className="flex items-center justify-center mb-8">
      <div className="relative group">
        {/* Outer glow effect with red theme */}
        <div className="absolute -inset-6 bg-gradient-to-r from-red-600 via-red-700 to-red-800 rounded-xl blur-xl opacity-50 group-hover:opacity-80 transition-all duration-700 animate-pulse"></div>
        
        {/* Secondary glow ring */}
        <div className="absolute -inset-3 bg-gradient-to-r from-red-500/40 to-red-600/40 rounded-lg blur-md animate-spin-slow"></div>
        
        {/* Main logo container */}
        <div className="relative group-hover:scale-110 transition-all duration-500 transform hover:rotate-2">
          <img
            src="/lovable-uploads/a3129a2a-f223-4b87-addc-b84722fe11b0.png"
            alt="ShopsCraft Logo"
            className="w-56 md:w-72 lg:w-80 drop-shadow-2xl animate-float"
          />
        </div>
        
        {/* Enhanced floating particles with red theme */}
        <div className="absolute -top-2 -left-2 w-3 h-3 bg-red-500 rounded-full animate-bounce-slow shadow-lg"></div>
        <div className="absolute top-6 -right-3 w-2 h-2 bg-red-600 rounded-full animate-bounce delay-300 shadow-md"></div>
        <div className="absolute -bottom-1 left-8 w-2.5 h-2.5 bg-red-700 rounded-full animate-bounce delay-700 shadow-lg"></div>
        <div className="absolute top-1/2 -right-4 w-1.5 h-1.5 bg-red-800 rounded-full animate-bounce delay-500 shadow-sm"></div>
        <div className="absolute bottom-8 -left-3 w-2 h-2 bg-red-400 rounded-full animate-bounce delay-1000 shadow-md"></div>
        
        {/* Orbiting elements */}
        <div className="absolute inset-0 animate-spin-reverse">
          <div className="absolute top-0 left-1/2 w-1 h-1 bg-red-400 rounded-full transform -translate-x-1/2"></div>
        </div>
        <div className="absolute inset-0 animate-spin-slow">
          <div className="absolute bottom-0 right-1/4 w-1.5 h-1.5 bg-red-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
