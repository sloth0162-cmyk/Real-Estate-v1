import Banner from "../component/Banner";
import Footer from "../component/footer";
import Navbar from "../component/navbar";
import BannerSlider from "../component/smallbanner/smallbannerslider";
import "../styles/home.css"
import "../styles/component.css"

function Home() {
  return ( 
     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"> 
      {/* Navigation */}
      <Navbar />

      {/* Welcome Section */}
      <div className="relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Welcome Title Section */}
          <div className="text-center pt-8 pb-4">
            <div className="inline-block relative">
              {/* Decorative elements around title */}
              <div className="absolute -top-6 -left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
              <div className="absolute -top-4 -right-8 w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute -bottom-6 -right-4 w-5 h-5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              
              {/* Main Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 mb-4 tracking-tight hover:scale-105 transition-all duration-500 cursor-pointer">
                Welcome To
              </h1>
              
              {/* Company Name with Special Styling */}
              <div className="relative">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-indigo-700 to-purple-800 mb-2 tracking-wide hover:from-indigo-600 hover:via-purple-600 hover:to-blue-600 transition-all duration-700">
                  AK DEVELOPERS
                </h2>
                
                {/* Animated underline */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 rounded-full hover:w-48 transition-all duration-500"></div>
              </div>
            </div>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 mt-8 mb-4 font-light max-w-3xl mx-auto leading-relaxed">
              Your Trusted Partner in Premium Real Estate Investment
            </p>
            
            {/* Tagline with animated elements */}
            <div className="flex flex-wrap justify-center gap-4 mt-6 mb-8">
              <span className="inline-flex items-center bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-indigo-700 border border-indigo-200 hover:border-indigo-300 hover:bg-white/80 transition-all duration-300 hover:scale-105">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                15+ Years Experience
              </span>
              <span className="inline-flex items-center bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-purple-700 border border-purple-200 hover:border-purple-300 hover:bg-white/80 transition-all duration-300 hover:scale-105">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse" style={{animationDelay: '0.5s'}}></span>
                1000+ Happy Families
              </span>
              <span className="inline-flex items-center bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-blue-700 border border-blue-200 hover:border-blue-300 hover:bg-white/80 transition-all duration-300 hover:scale-105">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse" style={{animationDelay: '1s'}}></span>
                100% Legal Plots
              </span>
            </div>
          </div>

          {/* Hero Banner Section */}
          <div className="relative">
            {/* Glass morphism container for banner */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-1 shadow-2xl border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-3xl">
              <div className="rounded-3xl overflow-hidden">
                <Banner />
              </div>
            </div>
            
          
          
              
      
            </div>
         

          {/* Banner Slider Section */}
          <div className="mt-20 relative">
            {/* Section transition gradient */}
            <div className="absolute -top-16 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-slate-50"></div>
            
            {/* Banner Slider Container */}
            <div className="relative bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-sm rounded-3xl p-2 shadow-xl border border-white/30">
              <BannerSlider />
            </div>
          </div>

          {/* Trust Indicators Section */}
          <div className="mt-16 mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Why Choose AK Developers?
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We're committed to providing you with the best real estate investment opportunities
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <span className="text-2xl text-white">✅</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">Legal Clear</h4>
                <p className="text-sm text-gray-600">100% Verified Titles</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <span className="text-2xl text-white">🏆</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">Award Winning</h4>
                <p className="text-sm text-gray-600">Industry Recognition</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <span className="text-2xl text-white">🚀</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">High Growth</h4>
                <p className="text-sm text-gray-600">Prime Locations</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <span className="text-2xl text-white">🤝</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">Trusted</h4>
                <p className="text-sm text-gray-600">15+ Years Experience</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Section separator */}
        <div className="h-16 bg-gradient-to-b from-slate-50 to-white"></div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
