// Banner.jsx
import React from 'react';
import "../styles/component.css";

function Banner() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
      
      {/* Animated Background Circles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-purple-500 rounded-full blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-indigo-500 rounded-full blur-xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-white/20 rotate-45 animate-bounce delay-500"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-blue-400/30 rounded-full animate-bounce delay-1500"></div>
        <div className="absolute bottom-40 left-20 w-5 h-5 bg-purple-400/30 rotate-12 animate-bounce delay-2500"></div>
        <div className="absolute bottom-20 right-40 w-3 h-3 bg-indigo-400/40 rounded-full animate-bounce delay-3000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-indigo-200 mb-4 tracking-tight hover:scale-105 transition-transform duration-700">
            AK
          </h1>
          
          <div className="relative">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white/90 mb-2 tracking-wide">
              DEVELOPERS
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-blue-100 mt-6 font-light tracking-wide">
            Premium Real Estate Since 2007
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
          
          {/* Phone Card */}
          <div className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center justify-center mb-3">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">📞</span>
              </div>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Call Us Now</h3>
            <p className="text-blue-200 text-sm">+91 XXXXXXXXXX</p>
            <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-xs text-green-300">Click to call instantly</span>
            </div>
          </div>

          {/* Email Card */}
          <div className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center justify-center mb-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">📧</span>
              </div>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Email Us</h3>
            <p className="text-blue-200 text-sm">akdevelopers@email.com</p>
            <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-xs text-blue-300">Get instant response</span>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            
            {/* Feature 1 */}
            <div className="group flex flex-col items-center p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/30 hover:-translate-y-3 hover:shadow-2xl transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                <span className="text-3xl">🏗️</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Premium Plots</h3>
              <p className="text-blue-200 text-sm text-center leading-relaxed">
                High-growth areas near Hyderabad with excellent connectivity and infrastructure
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group flex flex-col items-center p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/30 hover:-translate-y-3 hover:shadow-2xl transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                <span className="text-3xl">📍</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Site Visits</h3>
              <p className="text-blue-200 text-sm text-center leading-relaxed">
                Free on-site visits with our expert team to help you make informed decisions
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group flex flex-col items-center p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/30 hover:-translate-y-3 hover:shadow-2xl transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                <span className="text-3xl">🔥</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Best Deals</h3>
              <p className="text-blue-200 text-sm text-center leading-relaxed">
                Legally clear plots with transparent pricing and hassle-free documentation
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          
          {/* Chat Button */}
          <button className="group relative overflow-hidden bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 text-white font-bold py-4 px-8 rounded-2xl shadow-2xl hover:shadow-blue-500/25 hover:scale-105 hover:-translate-y-1 transition-all duration-300 min-w-[200px]">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center justify-center">
              <span className="mr-2 text-xl">💬</span>
              <span className="text-lg">Chat with Us</span>
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
          </button>

          {/* Blog Button */}
          <button className="group relative overflow-hidden bg-gradient-to-r from-purple-500 via-purple-600 to-pink-600 text-white font-bold py-4 px-8 rounded-2xl shadow-2xl hover:shadow-purple-500/25 hover:scale-105 hover:-translate-y-1 transition-all duration-300 min-w-[200px]">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center justify-center">
              <span className="mr-2 text-xl">📖</span>
              <span className="text-lg">Visit Our Blogs</span>
            </div>
          </button>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent"></div>
    </div>
  );
}

export default Banner;