
import Hero from "@/components/Hero";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_70%)]"></div>
      
      {/* Main content */}
      <Hero />
      
      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © 2024 ShopsCraft. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Index;
