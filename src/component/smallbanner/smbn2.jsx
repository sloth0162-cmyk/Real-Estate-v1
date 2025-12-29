function SmallBanner2() {
  return (
     <div className="relative w-full h-64 overflow-hidden rounded-xl group cursor-pointer">
      {/* Background with Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700"></div>
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-6 left-6 w-20 h-20 bg-white/5 rounded-full blur-2xl"></div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-6">
        <div className="flex items-center justify-between">
          <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
            <span className="text-white text-sm font-semibold">✈️ Airport Zone</span>
          </div>
          <div className="bg-orange-500 px-3 py-1 rounded-full">
            <span className="text-white text-xs font-bold">TRENDING</span>
          </div>
        </div>
        
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg group-hover:scale-105 transition-transform duration-300">
            Shamshabad Plots
          </h3>
          <p className="text-white/90 text-lg mb-3">Prime Airport Location</p>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 border border-white/30">
            <span className="text-3xl font-black text-yellow-300 drop-shadow-lg">
              ₹7,500
            </span>
            <span className="text-white text-lg">/sq.yd</span>
          </div>
        </div>
        
        <div className="flex items-center justify-center">
          <button className="bg-white text-emerald-600 font-bold py-2 px-6 rounded-full hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Explore Now →
          </button>
        </div>
      </div>
    </div>
  );
}
export default SmallBanner2;
