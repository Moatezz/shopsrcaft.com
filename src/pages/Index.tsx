
import Hero from "@/components/Hero";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-red-950 to-gray-900 relative overflow-hidden">
      {/* Enhanced dark background patterns with red accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(239,68,68,0.25),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(185,28,28,0.2),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.15),transparent_70%)]"></div>
      
      {/* Enhanced animated background mesh for red-black theme */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-red-600/40 to-transparent rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-red-800/35 to-transparent rounded-full blur-3xl animate-float delay-2000"></div>
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-red-700/30 to-transparent rounded-full blur-3xl animate-float-slow delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-red-500/25 to-transparent rounded-full blur-3xl animate-float-random delay-6000"></div>
      </div>
      
      {/* Subtle grid overlay for depth */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,.04)_1px,transparent_1px)] bg-[size:100px_100px] opacity-40"></div>
      
      {/* Main content */}
      <Hero />
      
      {/* Enhanced dark footer */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-center animate-fade-in delay-2000">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-400/20 to-transparent h-px top-0"></div>
          <p className="text-sm text-gray-300 mt-4 tracking-wide">
            © 2024 <span className="text-red-400 font-medium">ShopsCraft</span>. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
