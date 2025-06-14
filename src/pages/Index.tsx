
import Hero from "@/components/Hero";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Enhanced dark background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(239,68,68,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(147,51,234,0.12),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.08),transparent_70%)]"></div>
      
      {/* Enhanced animated background mesh for dark theme */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-red-500/30 to-transparent rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-purple-500/25 to-transparent rounded-full blur-3xl animate-float delay-2000"></div>
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-orange-500/30 to-transparent rounded-full blur-3xl animate-float-slow delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-transparent rounded-full blur-3xl animate-float-random delay-6000"></div>
      </div>
      
      {/* Subtle grid overlay for depth */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px] opacity-30"></div>
      
      {/* Main content */}
      <Hero />
      
      {/* Enhanced dark footer */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-center animate-fade-in delay-2000">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent h-px top-0"></div>
          <p className="text-sm text-gray-400 mt-4 tracking-wide">
            © 2024 <span className="text-red-400 font-medium">ShopsCraft</span>. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
