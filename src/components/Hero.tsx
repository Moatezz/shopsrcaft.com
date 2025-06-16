
import { useState, useEffect, useRef } from "react";
import { Logo } from "./Logo";
import { PoweredBy } from "./PoweredBy";

const Hero = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [lines, setLines] = useState<Array<{ x1: number; y1: number; x2: number; y2: number; opacity: number; strokeWidth: number }>>([]);
  const [isPulseDark, setIsPulseDark] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const containerRef = useRef<HTMLDivElement>(null);
  
  const tabs = [
    {
      title: "Free Shop Generator",
      subtitle: "Free Today, Free Forever",
      description: "Create unlimited e-commerce stores without any cost. No hidden fees, no premium tiers - just pure freedom to build your dream shop.",
      accent: isPulseDark ? "from-gray-500 to-gray-700" : "from-red-500 to-red-700"
    },
    {
      title: "Shopify But Free",
      subtitle: "All Features, Zero Cost", 
      description: "Get all the powerful features of premium platforms without spending a dime. Professional templates, payment processing, and analytics included.",
      accent: isPulseDark ? "from-gray-600 to-gray-800" : "from-red-600 to-red-800"
    },
    {
      title: "Unlimited Possibilities",
      subtitle: "No Limits, No Restrictions",
      description: "Scale your business without worrying about transaction fees or monthly subscriptions. Your success is our success.",
      accent: isPulseDark ? "from-gray-700 to-gray-900" : "from-red-700 to-red-900"
    }
  ];

  // Theme pulsing effect with smooth transitions
  useEffect(() => {
    const interval = setInterval(() => {
      setIsPulseDark(prev => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Countdown timer effect
  useEffect(() => {
    const targetDate = new Date('2025-06-22T00:00:00').getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };
    
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    
    return () => clearInterval(interval);
  }, []);

  // Enhanced cursor tracking with all lines following from fixed positions
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });

        // Create comprehensive tracking lines from fixed positions
        const newLines = [];
        
        // 1. Grid-based tracking points across the entire screen
        const gridSize = 12;
        const gridPoints = [];
        
        for (let i = 0; i < gridSize; i++) {
          for (let j = 0; j < gridSize; j++) {
            gridPoints.push({
              x: (rect.width / (gridSize - 1)) * i,
              y: (rect.height / (gridSize - 1)) * j,
              id: `grid-${i}-${j}`
            });
          }
        }
        
        // 2. Corner tracking points
        const cornerPoints = [
          { x: 0, y: 0, id: 'corner-tl' },
          { x: rect.width, y: 0, id: 'corner-tr' },
          { x: 0, y: rect.height, id: 'corner-bl' },
          { x: rect.width, y: rect.height, id: 'corner-br' },
        ];
        
        // 3. Edge midpoint tracking
        const edgePoints = [
          { x: rect.width / 2, y: 0, id: 'edge-top' },
          { x: rect.width / 2, y: rect.height, id: 'edge-bottom' },
          { x: 0, y: rect.height / 2, id: 'edge-left' },
          { x: rect.width, y: rect.height / 2, id: 'edge-right' },
        ];
        
        // 4. Random scattered tracking points
        const scatteredPoints = [
          { x: rect.width * 0.1, y: rect.height * 0.2, id: 's1' },
          { x: rect.width * 0.9, y: rect.height * 0.1, id: 's2' },
          { x: rect.width * 0.2, y: rect.height * 0.8, id: 's3' },
          { x: rect.width * 0.8, y: rect.height * 0.9, id: 's4' },
          { x: rect.width * 0.3, y: rect.height * 0.3, id: 's5' },
          { x: rect.width * 0.7, y: rect.height * 0.7, id: 's6' },
          { x: rect.width * 0.4, y: rect.height * 0.6, id: 's7' },
          { x: rect.width * 0.6, y: rect.height * 0.4, id: 's8' },
          { x: rect.width * 0.15, y: rect.height * 0.45, id: 's9' },
          { x: rect.width * 0.85, y: rect.height * 0.55, id: 's10' },
          { x: rect.width * 0.25, y: rect.height * 0.65, id: 's11' },
          { x: rect.width * 0.75, y: rect.height * 0.35, id: 's12' },
          { x: rect.width * 0.35, y: rect.height * 0.75, id: 's13' },
          { x: rect.width * 0.65, y: rect.height * 0.25, id: 's14' },
          { x: rect.width * 0.45, y: rect.height * 0.85, id: 's15' },
          { x: rect.width * 0.55, y: rect.height * 0.15, id: 's16' },
        ];
        
        // 5. Circular arrangement of tracking points
        const circularPoints = [];
        const numCircularPoints = 16;
        const radius = Math.min(rect.width, rect.height) * 0.4;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        for (let i = 0; i < numCircularPoints; i++) {
          const angle = (i / numCircularPoints) * 2 * Math.PI;
          circularPoints.push({
            x: centerX + Math.cos(angle) * radius,
            y: centerY + Math.sin(angle) * radius,
            id: `circular-${i}`
          });
        }
        
        const allTrackingPoints = [...gridPoints, ...cornerPoints, ...edgePoints, ...scatteredPoints, ...circularPoints];

        // All points track the cursor directly
        allTrackingPoints.forEach((point) => {
          const distance = Math.sqrt((x - point.x) ** 2 + (y - point.y) ** 2);
          const maxDistance = 600;
          
          if (distance < maxDistance) {
            const opacity = Math.max(0.1, 0.8 - (distance / maxDistance));
            const strokeWidth = opacity > 0.5 ? 2 : 1;
            
            newLines.push({
              x1: point.x,
              y1: point.y,
              x2: x,
              y2: y,
              opacity: opacity,
              strokeWidth: strokeWidth
            });
          }
        });

        // 6. Add multiple layers of concentric tracking circles around cursor
        const concentricLayers = [
          { radius: 80, points: 12 },
          { radius: 120, points: 16 },
          { radius: 160, points: 20 },
          { radius: 200, points: 24 },
        ];
        
        concentricLayers.forEach((layer, layerIndex) => {
          const layerPoints = [];
          for (let i = 0; i < layer.points; i++) {
            const angle = (i / layer.points) * 2 * Math.PI;
            layerPoints.push({
              x: x + Math.cos(angle) * layer.radius,
              y: y + Math.sin(angle) * layer.radius
            });
          }
          
          // Each point in the layer tracks back to cursor
          layerPoints.forEach((point) => {
            if (point.x > 0 && point.x < rect.width && point.y > 0 && point.y < rect.height) {
              const opacity = Math.max(0.1, 0.6 - (layerIndex * 0.1));
              newLines.push({
                x1: point.x,
                y1: point.y,
                x2: x,
                y2: y,
                opacity: opacity,
                strokeWidth: 1
              });
            }
          });
        });

        // 7. Add diagonal cross-screen tracking lines
        const diagonalPoints = [
          { x: 0, y: 0 }, { x: rect.width, y: rect.height },
          { x: rect.width, y: 0 }, { x: 0, y: rect.height },
          { x: rect.width / 4, y: 0 }, { x: rect.width * 3/4, y: rect.height },
          { x: 0, y: rect.height / 4 }, { x: rect.width, y: rect.height * 3/4 },
        ];
        
        diagonalPoints.forEach((point) => {
          const distance = Math.sqrt((x - point.x) ** 2 + (y - point.y) ** 2);
          if (distance < 800) {
            const opacity = Math.max(0.1, 0.7 - (distance / 800));
            newLines.push({
              x1: point.x,
              y1: point.y,
              x2: x,
              y2: y,
              opacity: opacity,
              strokeWidth: opacity > 0.4 ? 2 : 1
            });
          }
        });

        // 8. Add spiral tracking pattern
        const spiralPoints = [];
        for (let i = 0; i < 40; i++) {
          const angle = (i / 40) * 8 * Math.PI;
          const spiralRadius = i * 8;
          const spiralX = centerX + Math.cos(angle) * spiralRadius;
          const spiralY = centerY + Math.sin(angle) * spiralRadius;
          
          if (spiralX > 0 && spiralX < rect.width && spiralY > 0 && spiralY < rect.height) {
            const distance = Math.sqrt((x - spiralX) ** 2 + (y - spiralY) ** 2);
            if (distance < 400) {
              const opacity = Math.max(0.1, 0.6 - (distance / 400));
              newLines.push({
                x1: spiralX,
                y1: spiralY,
                x2: x,
                y2: y,
                opacity: opacity,
                strokeWidth: 1
              });
            }
          }
        }

        setLines(newLines);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Dynamic theme colors with smooth transitions
  const themeColors = {
    gradient: isPulseDark 
      ? "from-black via-gray-950 to-gray-900" 
      : "from-black via-red-950 to-gray-900",
    radialAccents: isPulseDark ? [
      "bg-[radial-gradient(circle_at_20%_30%,rgba(75,85,99,0.25),transparent_50%)]",
      "bg-[radial-gradient(circle_at_80%_70%,rgba(55,65,81,0.2),transparent_50%)]",
      "bg-[radial-gradient(circle_at_50%_50%,rgba(107,114,128,0.15),transparent_70%)]"
    ] : [
      "bg-[radial-gradient(circle_at_20%_30%,rgba(239,68,68,0.25),transparent_50%)]",
      "bg-[radial-gradient(circle_at_80%_70%,rgba(185,28,28,0.2),transparent_50%)]",
      "bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.15),transparent_70%)]"
    ],
    webGradient: isPulseDark ? "grayGradient" : "redGradient",
    primaryColor: isPulseDark ? "gray" : "red",
    accentColor: isPulseDark ? "gray-400" : "red-400"
  };

  return (
    <div 
      ref={containerRef}
      className={`flex flex-col items-center justify-center min-h-screen px-4 text-center relative overflow-hidden transition-all duration-[1500ms] ease-in-out bg-gradient-to-br ${themeColors.gradient}`}
    >
      {/* Enhanced animated background patterns with smooth theme transitions */}
      <div className={`absolute inset-0 transition-all duration-[1500ms] ease-in-out ${themeColors.radialAccents[0]}`}></div>
      <div className={`absolute inset-0 transition-all duration-[1500ms] ease-in-out ${themeColors.radialAccents[1]}`}></div>
      <div className={`absolute inset-0 transition-all duration-[1500ms] ease-in-out ${themeColors.radialAccents[2]}`}></div>
      
      {/* Cursor tracking lines */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
        style={{ mixBlendMode: 'screen' }}
      >
        {lines.map((line, index) => (
          <line
            key={index}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke={`url(#${themeColors.webGradient})`}
            strokeWidth={line.strokeWidth}
            opacity={line.opacity}
            className="transition-all duration-75"
          />
        ))}
        <defs>
          <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="50%" stopColor="#dc2626" />
            <stop offset="100%" stopColor="#b91c1c" />
          </linearGradient>
          <linearGradient id="grayGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6b7280" />
            <stop offset="50%" stopColor="#4b5563" />
            <stop offset="100%" stopColor="#374151" />
          </linearGradient>
        </defs>
      </svg>

      {/* Enhanced animated background elements with smooth theme transitions */}
      <div className="absolute inset-0 overflow-hidden transition-all duration-[1500ms] ease-in-out">
        {/* Primary gradient orbs with smooth theme switching */}
        <div className={`absolute -top-1/2 -left-1/2 w-full h-full transition-all duration-[1500ms] ease-in-out rounded-full animate-pulse-slow ${
          isPulseDark 
            ? "bg-gradient-to-br from-gray-600/40 via-gray-800/30 to-transparent" 
            : "bg-gradient-to-br from-red-600/40 via-red-800/30 to-transparent"
        }`}></div>
        <div className={`absolute -bottom-1/2 -right-1/2 w-full h-full transition-all duration-[1500ms] ease-in-out rounded-full animate-pulse delay-1000 ${
          isPulseDark 
            ? "bg-gradient-to-tl from-gray-700/35 via-black/25 to-transparent" 
            : "bg-gradient-to-tl from-red-700/35 via-black/25 to-transparent"
        }`}></div>
        
        {/* Multiple floating orbs with smooth theme transitions */}
        <div className={`absolute top-1/4 left-1/4 w-32 h-32 transition-all duration-[1500ms] ease-in-out rounded-full blur-xl animate-float-slow ${
          isPulseDark 
            ? "bg-gradient-to-r from-gray-500/25 to-gray-600/20" 
            : "bg-gradient-to-r from-red-500/25 to-red-600/20"
        }`}></div>
        <div className={`absolute bottom-1/3 right-1/3 w-24 h-24 transition-all duration-[1500ms] ease-in-out rounded-full blur-lg animate-float delay-2000 ${
          isPulseDark 
            ? "bg-gradient-to-r from-gray-700/30 to-gray-800/25" 
            : "bg-gradient-to-r from-red-700/30 to-red-800/25"
        }`}></div>
        
        {/* Enhanced grid pattern with smooth theme transitions */}
        <div className={`absolute inset-0 transition-all duration-[1500ms] ease-in-out animate-grid-move ${
          isPulseDark 
            ? "bg-[linear-gradient(rgba(107,114,128,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(107,114,128,.06)_1px,transparent_1px)] bg-[size:50px_50px]"
            : "bg-[linear-gradient(rgba(239,68,68,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,.06)_1px,transparent_1px)] bg-[size:50px_50px]"
        }`}></div>
        
        {/* Particle system with smooth theme transitions */}
        <div className={`absolute top-20 left-10 w-2 h-2 rounded-full animate-bounce-slow transition-all duration-[1500ms] ease-in-out ${
          isPulseDark ? "bg-gray-500/70" : "bg-red-500/70"
        }`}></div>
        <div className={`absolute top-32 right-16 w-1.5 h-1.5 rounded-full animate-bounce delay-500 transition-all duration-[1500ms] ease-in-out ${
          isPulseDark ? "bg-gray-600/70" : "bg-red-600/70"
        }`}></div>

        {/* Spinning Diamond Element with smooth theme transitions */}
        <div className="absolute top-1/4 right-1/4 animate-spin-slow">
          <div className="relative w-16 h-16">
            <div className={`absolute inset-0 opacity-60 blur-lg rotate-45 animate-pulse transition-all duration-[1500ms] ease-in-out ${
              isPulseDark 
                ? "bg-gradient-to-r from-gray-500 to-gray-700" 
                : "bg-gradient-to-r from-red-500 to-red-700"
            }`}></div>
            <div className={`absolute inset-2 rotate-45 shadow-lg transition-all duration-[1500ms] ease-in-out ${
              isPulseDark 
                ? "bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800 shadow-gray-500/50" 
                : "bg-gradient-to-br from-red-600 via-red-700 to-red-800 shadow-red-500/50"
            }`}></div>
            <div className={`absolute inset-4 rotate-45 opacity-80 transition-all duration-[1500ms] ease-in-out ${
              isPulseDark 
                ? "bg-gradient-to-tl from-gray-400 to-gray-500" 
                : "bg-gradient-to-tl from-red-400 to-red-500"
            }`}></div>
            <div className="absolute inset-6 bg-white rotate-45 opacity-90 animate-pulse"></div>
          </div>
        </div>

        {/* Spinning Hexagon Element with smooth theme transitions */}
        <div className="absolute bottom-1/4 left-1/4 animate-spin-reverse">
          <div className="relative w-12 h-12">
            <div className={`absolute inset-0 opacity-70 blur-md transition-all duration-[1500ms] ease-in-out ${
              isPulseDark 
                ? "bg-gradient-to-r from-gray-700 to-gray-900" 
                : "bg-gradient-to-r from-red-700 to-red-900"
            }`} style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)' }}></div>
            <div className={`absolute inset-2 transition-all duration-[1500ms] ease-in-out ${
              isPulseDark 
                ? "bg-gradient-to-br from-gray-600 to-gray-800" 
                : "bg-gradient-to-br from-red-600 to-red-800"
            }`} style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)' }}></div>
            <div className={`absolute inset-4 opacity-90 animate-pulse transition-all duration-[1500ms] ease-in-out ${
              isPulseDark ? "bg-gray-400" : "bg-red-400"
            }`} style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)' }}></div>
          </div>
        </div>
      </div>
      
      {/* Main content with smooth theme transitions */}
      <div className="relative z-20 space-y-12 max-w-6xl mx-auto">
        {/* Logo with enhanced animation */}
        <div className="animate-slide-up">
          <Logo />
        </div>
        
        {/* Coming Soon with enhanced glow effect and smooth theme transitions */}
        <div className="animate-slide-up delay-300">
          <div className="relative">
            <p className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-200 tracking-widest animate-pulse-text">
              COMING SOON
            </p>
            <div className={`absolute inset-0 text-4xl md:text-5xl lg:text-6xl font-light text-transparent bg-clip-text animate-gradient-shift opacity-60 transition-all duration-[1500ms] ease-in-out ${
              isPulseDark 
                ? "bg-gradient-to-r from-gray-500 via-gray-600 to-gray-800" 
                : "bg-gradient-to-r from-red-500 via-red-600 to-red-800"
            }`}></div>
          </div>
          
          {/* Countdown Timer with smooth theme transitions */}
          <div className="mt-8 animate-slide-up delay-500">
            <div className="flex justify-center items-center space-x-4 md:space-x-8">
              <div className="text-center">
                <div className={`rounded-lg p-3 md:p-4 shadow-lg border transition-all duration-[1500ms] ease-in-out ${
                  isPulseDark 
                    ? "bg-gradient-to-br from-gray-600 to-gray-800 shadow-gray-500/30 border-gray-500/30" 
                    : "bg-gradient-to-br from-red-600 to-red-800 shadow-red-500/30 border-red-500/30"
                }`}>
                  <div className="text-2xl md:text-3xl font-bold text-white">{timeLeft.days}</div>
                  <div className={`text-xs md:text-sm uppercase tracking-wider transition-all duration-[1500ms] ease-in-out ${
                    isPulseDark ? "text-gray-200" : "text-red-200"
                  }`}>Days</div>
                </div>
              </div>
              <div className={`text-2xl md:text-3xl animate-pulse transition-all duration-[1500ms] ease-in-out ${
                isPulseDark ? "text-gray-400" : "text-red-400"
              }`}>:</div>
              <div className="text-center">
                <div className={`rounded-lg p-3 md:p-4 shadow-lg border transition-all duration-[1500ms] ease-in-out ${
                  isPulseDark 
                    ? "bg-gradient-to-br from-gray-600 to-gray-800 shadow-gray-500/30 border-gray-500/30" 
                    : "bg-gradient-to-br from-red-600 to-red-800 shadow-red-500/30 border-red-500/30"
                }`}>
                  <div className="text-2xl md:text-3xl font-bold text-white">{timeLeft.hours}</div>
                  <div className={`text-xs md:text-sm uppercase tracking-wider transition-all duration-[1500ms] ease-in-out ${
                    isPulseDark ? "text-gray-200" : "text-red-200"
                  }`}>Hours</div>
                </div>
              </div>
              <div className={`text-2xl md:text-3xl animate-pulse transition-all duration-[1500ms] ease-in-out ${
                isPulseDark ? "text-gray-400" : "text-red-400"
              }`}>:</div>
              <div className="text-center">
                <div className={`rounded-lg p-3 md:p-4 shadow-lg border transition-all duration-[1500ms] ease-in-out ${
                  isPulseDark 
                    ? "bg-gradient-to-br from-gray-600 to-gray-800 shadow-gray-500/30 border-gray-500/30" 
                    : "bg-gradient-to-br from-red-600 to-red-800 shadow-red-500/30 border-red-500/30"
                }`}>
                  <div className="text-2xl md:text-3xl font-bold text-white">{timeLeft.minutes}</div>
                  <div className={`text-xs md:text-sm uppercase tracking-wider transition-all duration-[1500ms] ease-in-out ${
                    isPulseDark ? "text-gray-200" : "text-red-200"
                  }`}>Minutes</div>
                </div>
              </div>
              <div className={`text-2xl md:text-3xl animate-pulse transition-all duration-[1500ms] ease-in-out ${
                isPulseDark ? "text-gray-400" : "text-red-400"
              }`}>:</div>
              <div className="text-center">
                <div className={`rounded-lg p-3 md:p-4 shadow-lg border transition-all duration-[1500ms] ease-in-out ${
                  isPulseDark 
                    ? "bg-gradient-to-br from-gray-600 to-gray-800 shadow-gray-500/30 border-gray-500/30" 
                    : "bg-gradient-to-br from-red-600 to-red-800 shadow-red-500/30 border-red-500/30"
                }`}>
                  <div className="text-2xl md:text-3xl font-bold text-white animate-pulse">{timeLeft.seconds}</div>
                  <div className={`text-xs md:text-sm uppercase tracking-wider transition-all duration-[1500ms] ease-in-out ${
                    isPulseDark ? "text-gray-200" : "text-red-200"
                  }`}>Seconds</div>
                </div>
              </div>
            </div>
            <p className={`text-sm md:text-base mt-4 animate-fade-in delay-1000 transition-all duration-[1500ms] ease-in-out ${
              isPulseDark ? "text-gray-300" : "text-red-300"
            }`}>
              Launch Date: June 22, 2025
            </p>
          </div>
        </div>
        
        {/* Slogan with enhanced styling and smooth theme transitions */}
        <div className="animate-slide-up delay-500">
          <div className="relative">
            <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-100 italic relative z-10 mb-8">
              <span className={`bg-clip-text text-transparent animate-gradient-shift transition-all duration-[1500ms] ease-in-out ${
                isPulseDark 
                  ? "bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600" 
                  : "bg-gradient-to-r from-red-400 via-red-500 to-red-600"
              }`}>
                "Liberating the e-commerce stage"
              </span>
            </p>
            <div className={`absolute -top-6 -left-6 text-7xl animate-float transition-all duration-[1500ms] ease-in-out ${
              isPulseDark ? "text-gray-500/40" : "text-red-500/40"
            }`}>"</div>
            <div className={`absolute -bottom-6 -right-6 text-7xl animate-float delay-1000 transition-all duration-[1500ms] ease-in-out ${
              isPulseDark ? "text-gray-600/40" : "text-red-600/40"
            }`}>"</div>
          </div>
          
          {/* Interactive Tab Indicators with smooth theme transitions */}
          <div className="flex justify-center space-x-4 mb-8">
            {tabs.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`w-12 h-2 rounded-full transition-all duration-500 hover:scale-110 ${
                  activeTab === index 
                    ? `shadow-lg transition-all duration-[1500ms] ease-in-out ${isPulseDark 
                        ? 'bg-gradient-to-r from-gray-500 to-gray-700 shadow-gray-500/50' 
                        : 'bg-gradient-to-r from-red-500 to-red-700 shadow-red-500/50'
                      }` 
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
              />
            ))}
          </div>
          
          {/* Interactive Dots with smooth theme transitions */}
          <div className="flex justify-center space-x-4 mb-8">
            {tabs.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                  activeTab === index 
                    ? `shadow-lg animate-pulse transition-all duration-[1500ms] ease-in-out ${isPulseDark 
                        ? 'bg-gray-500 shadow-gray-500/50' 
                        : 'bg-red-500 shadow-red-500/50'
                      }` 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
        
        {/* Tab Content with smooth transitions and theme transitions */}
        <div className="animate-slide-up delay-700">
          <div className="relative h-48 mb-8">
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ${
                  activeTab === index 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-4'
                }`}
              >
                <div className="text-center space-y-4">
                  <h3 className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${tab.accent} bg-clip-text text-transparent animate-gradient-shift`}>
                    {tab.title}
                  </h3>
                  <p className="text-xl md:text-2xl text-gray-200 font-medium animate-pulse-text">
                    {tab.subtitle}
                  </p>
                  <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                    {tab.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Enhanced description with more animations and smooth theme transitions */}
        <div className="animate-slide-up delay-1000">
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-4">
            <span className="inline-block animate-fade-in-word">We're</span>{" "}
            <span className="inline-block animate-fade-in-word delay-100">crafting</span>{" "}
            <span className="inline-block animate-fade-in-word delay-200">something</span>{" "}
            <span className={`inline-block animate-fade-in-word delay-300 bg-clip-text text-transparent font-semibold transition-all duration-[1500ms] ease-in-out ${
              isPulseDark 
                ? "bg-gradient-to-r from-gray-400 to-gray-600" 
                : "bg-gradient-to-r from-red-400 to-red-600"
            }`}>extraordinary</span>{" "}
            <span className="inline-block animate-fade-in-word delay-400">for</span>{" "}
            <span className="inline-block animate-fade-in-word delay-500">the</span>{" "}
            <span className="inline-block animate-fade-in-word delay-600">future</span>{" "}
            <span className="inline-block animate-fade-in-word delay-700">of</span>{" "}
            <span className={`inline-block animate-fade-in-word delay-800 bg-clip-text text-transparent font-semibold transition-all duration-[1500ms] ease-in-out ${
              isPulseDark 
                ? "bg-gradient-to-r from-gray-500 to-gray-700" 
                : "bg-gradient-to-r from-red-500 to-red-700"
            }`}>e-commerce</span>.
          </p>
          <p className="text-lg md:text-xl text-gray-400 animate-fade-in delay-1200">
            Get ready to experience shopping like never before.
          </p>
        </div>
        
        {/* Powered by Winston Red */}
        <PoweredBy />
      </div>
      
      {/* Enhanced floating elements with smooth theme transitions */}
      <div className={`absolute top-16 left-8 w-4 h-4 rounded-full animate-float-random transition-all duration-[1500ms] ease-in-out ${
        isPulseDark ? "bg-gray-500/50" : "bg-red-500/50"
      }`}></div>
      <div className={`absolute top-32 right-16 w-3 h-3 rounded-full animate-float-random delay-500 transition-all duration-[1500ms] ease-in-out ${
        isPulseDark ? "bg-gray-600/50" : "bg-red-600/50"
      }`}></div>
      <div className={`absolute bottom-24 left-16 w-5 h-5 rounded-full animate-float-random delay-1000 transition-all duration-[1500ms] ease-in-out ${
        isPulseDark ? "bg-gray-700/50" : "bg-red-700/50"
      }`}></div>
      <div className={`absolute bottom-40 right-12 w-2 h-2 rounded-full animate-float-random delay-1500 transition-all duration-[1500ms] ease-in-out ${
        isPulseDark ? "bg-gray-800/50" : "bg-red-800/50"
      }`}></div>
      
      {/* Shooting stars effect with smooth theme transitions */}
      <div className={`absolute top-1/4 left-0 w-1 h-1 rounded-full animate-[shooting-star_3s_linear_infinite] transition-all duration-[1500ms] ease-in-out ${
        isPulseDark ? "bg-gray-400" : "bg-red-400"
      }`}></div>
      <div className={`absolute top-1/2 right-0 w-1 h-1 rounded-full animate-[shooting-star_4s_linear_infinite_1s] transition-all duration-[1500ms] ease-in-out ${
        isPulseDark ? "bg-gray-500" : "bg-red-500"
      }`}></div>
    </div>
  );
};

export default Hero;
