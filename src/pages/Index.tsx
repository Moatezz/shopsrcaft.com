
import Hero from "@/components/Hero";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Enhanced background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(239,68,68,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(147,51,234,0.08),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.06),transparent_70%)]"></div>
      
      {/* Animated background mesh */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-red-400/20 to-transparent rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-bl from-purple-400/15 to-transparent rounded-full blur-3xl animate-float delay-2000"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-tr from-orange-400/20 to-transparent rounded-full blur-3xl animate-float-slow delay-4000"></div>
      </div>
      
      {/* Main content */}
      <Hero />
      
      {/* Enhanced footer */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-center animate-fade-in delay-2000">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent h-px top-0"></div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 tracking-wide">
            © 2024 <span className="text-red-500 font-medium">ShopsCraft</span>. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
