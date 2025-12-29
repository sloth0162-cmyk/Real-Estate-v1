import SmallBanner1 from "./smbn1";
import SmallBanner2 from "./smbn2";
import SmallBanner3 from "./smbn3";
import "../../styles/component.css";
import { useEffect, useState } from "react";

function BannerSlider() {
  const [activeCard, setActiveCard] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const cards = [
    { component: <SmallBanner1 />, id: 0 },
    { component: <SmallBanner2 />, id: 1 },
    { component: <SmallBanner3 />, id: 2 }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className={`relative z-10 p-8 md:p-12 lg:p-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Hero Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="text-sm font-semibold text-purple-300 uppercase tracking-wider mb-2 block animate-fade-in">
              ✨ Premium Real Estate
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-blue-200 mb-6 leading-tight">
              Investment
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-gradient">
                Opportunities
              </span>
            </h1>
          </div>
          
          <div className="flex justify-center mb-6">
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Discover <span className="text-purple-300 font-semibold">premium plots</span> in Hyderabad's 
            <span className="text-blue-300 font-semibold"> fastest-growing corridors</span>
          </p>
        </div>

        {/* Interactive Card Showcase */}
        <div className="max-w-7xl mx-auto mb-16">
          {/* Card Navigation Dots */}
          <div className="flex justify-center mb-8 space-x-3">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveCard(index)}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  activeCard === index 
                    ? 'bg-purple-400 w-8' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Cards Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 perspective-1000">
            {cards.map((card, index) => (
              <div
                key={card.id}
                className={`group relative transform transition-all duration-700 ${
                  activeCard === index 
                    ? 'scale-105 z-20' 
                    : 'scale-95 hover:scale-100'
                } ${index === 2 ? 'md:col-span-2 xl:col-span-1' : ''}`}
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Card Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-3xl blur-xl transition-all duration-500 ${
                  activeCard === index ? 'opacity-100 scale-110' : 'opacity-0 scale-100'
                }`}></div>
                
                {/* Card Container */}
                <div className={`relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-3 border border-white/20 shadow-2xl transition-all duration-500 hover:border-purple-300/50 ${
                  activeCard === index ? 'shadow-purple-500/25' : ''
                }`}>
                  {/* Active Card Indicator */}
                  {activeCard === index && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-pulse">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  )}
                  
                  <div className="relative overflow-hidden rounded-2xl">
                    {card.component}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center">
            <div className="mb-4">
              <span className="text-sm text-purple-300 uppercase tracking-wider font-semibold">
                Ready to Invest?
              </span>
            </div>
            
            <button className="group relative inline-flex items-center bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/25 overflow-hidden">
              {/* Button Animation Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-pink-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Button Content */}
              <div className="relative flex items-center">
                <span className="text-2xl mr-3 group-hover:animate-bounce">📞</span>
                <span className="group-hover:animate-pulse">
                  Call for Site Visit & Best Prices
                </span>
                <svg 
                  className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </button>

            {/* Additional Info */}
            <div className="mt-6 flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                <span>Free Site Visit</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
                <span>Best Price Guarantee</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></span>
                <span>Expert Consultation</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
}

export default BannerSlider;
