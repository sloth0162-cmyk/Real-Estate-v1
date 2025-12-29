// src/components/About.jsx
import React from 'react';
import Footer from '../component/footer';
import Navbar from '../component/navbar';

function About() {
  return <> 
  <Navbar/>
    <section id="about" className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-16 px-4 md:px-8 lg:px-24">
      {/* Animated Title with Hover Effects */}
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 mb-4 hover:scale-105 transition-all duration-300 cursor-pointer">
          About AK Developers
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full hover:w-48 transition-all duration-500"></div>
        <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed">
          Transforming Dreams into Reality Since 2007
        </p>
      </div>

      {/* Company Introduction with Floating Animation */}
      <div className="max-w-5xl mx-auto mb-16">
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 hover:shadow-3xl hover:-translate-y-2 transition-all duration-500">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
              <span className="text-white font-bold text-xl">15+</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Years of Excellence</h3>
          </div>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Since <strong className="text-indigo-600">2007</strong>, <strong className="text-indigo-600">AK Developers</strong> has been a leading force in the Hyderabad real estate market, specializing in premium open plots on the city's outskirts. With over <strong className="text-indigo-600">15 years of experience</strong>, our dedicated team has empowered hundreds of families and investors to secure <em className="text-purple-600">legally sound</em> and <em className="text-purple-600">value-appreciating</em> land assets.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
              <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">Happy Families</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600">Plots Sold</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
              <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-gray-600">Legal Compliance</div>
            </div>
          </div>
        </div>
      </div>

      {/* Location Cards Grid */}
      <div className="max-w-7xl mx-auto">
        <h3 className="text-4xl font-bold text-center text-gray-800 mb-4 hover:text-indigo-600 transition-colors duration-300">
          Prime Investment Locations
        </h3>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Discover high-growth potential areas across Hyderabad's expanding corridors
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Shadnagar Card */}
          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-3 border border-gray-100">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2"></div>
            <div className="p-8">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-indigo-600 font-bold">NH</span>
                </div>
                <h4 className="text-2xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">
                  Shadnagar
                </h4>
              </div>
              
              <div className="mb-4">
                <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                  20-30% Growth
                </span>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                Strategic logistics hub along <strong>NH44</strong> with Amazon warehouses, DRDO facilities, and upcoming Regional Ring Road connectivity. Prime investment opportunity with direct airport access.
              </p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  Amazon Warehouses Nearby
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  DRDO Facilities Access
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                  Regional Ring Road (RRR)
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Explore Shadnagar Plots
              </button>
            </div>
          </div>

          {/* Tukkuguda Card */}
          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-3 border border-gray-100">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-2"></div>
            <div className="p-8">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 font-bold">ORR</span>
                </div>
                <h4 className="text-2xl font-bold text-gray-800 group-hover:text-green-600 transition-colors">
                  Tukkuguda
                </h4>
              </div>
              
              <div className="mb-4">
                <span className="inline-block bg-emerald-100 text-emerald-800 text-sm font-semibold px-3 py-1 rounded-full">
                  15-25% Returns
                </span>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                Fastest-growing zone adjacent to <strong>ORR</strong> and <strong>Srisailam Highway</strong>. Home to Pharma City projects and Electronics Manufacturing Clusters with exceptional growth potential.
              </p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  Pharma City Projects
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Electronics Manufacturing
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                  Full Road Access
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105">
                View Tukkuguda Options
              </button>
            </div>
          </div>

          {/* Shamshabad Card */}
          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-3 border border-gray-100">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-600 h-2"></div>
            <div className="p-8">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-bold">✈️</span>
                </div>
                <h4 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                  Shamshabad
                </h4>
              </div>
              
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                  Airport Zone
                </span>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                Gateway to Hyderabad with robust NRI demand. Located 10-15 minutes from <strong>Rajiv Gandhi International Airport</strong>, offering premium appreciation potential with verified titles.
              </p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  Airport Proximity (10-15 min)
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  High NRI Demand
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                  Verified Titles
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                Discover Airport Plots
              </button>
            </div>
          </div>

          {/* Srisailam Highway Card */}
          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-3 border border-gray-100">
            <div className="bg-gradient-to-r from-orange-500 to-red-600 h-2"></div>
            <div className="p-8">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-100 to-red-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-orange-600 font-bold">6L</span>
                </div>
                <h4 className="text-2xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors">
                  Srisailam Highway
                </h4>
              </div>
              
              <div className="mb-4">
                <span className="inline-block bg-orange-100 text-orange-800 text-sm font-semibold px-3 py-1 rounded-full">
                  Entry-Level Prices
                </span>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                Major 6-lane expansion corridor towards Sangareddy with upcoming industrial parks and residential townships. Perfect entry-level investment with double-digit growth potential.
              </p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  6-Lane Highway Expansion
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Industrial Parks Coming
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                  Residential Townships
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105">
                Check Highway Plots
              </button>
            </div>
          </div>

          {/* Warangal Highway Card */}
          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-3 border border-gray-100">
            <div className="bg-gradient-to-r from-purple-500 to-pink-600 h-2"></div>
            <div className="p-8">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-purple-600 font-bold">🏛️</span>
                </div>
                <h4 className="text-2xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
                  Warangal Highway
                </h4>
              </div>
              
              <div className="mb-4">
                <span className="inline-block bg-purple-100 text-purple-800 text-sm font-semibold px-3 py-1 rounded-full">
                  Tourism Circuit
                </span>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                Vital trade and tourism link with proposed religious tourism circuits and logistics hubs. Currently at investment-friendly pricing with early-bird advantages available.
              </p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  Religious Tourism Circuit
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Logistics Hubs
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                  Early-Bird Pricing
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                Explore Tourism Route
              </button>
            </div>
          </div>

          {/* Special Investment Zone Card */}
          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-3 border border-gray-100 md:col-span-2 lg:col-span-1">
            <div className="bg-gradient-to-r from-yellow-500 to-amber-600 h-2"></div>
            <div className="p-8">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-100 to-amber-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-yellow-600 font-bold">⭐</span>
                </div>
                <h4 className="text-2xl font-bold text-gray-800 group-hover:text-yellow-600 transition-colors">
                  Premium Zones
                </h4>
              </div>
              
              <div className="mb-4">
                <span className="inline-block bg-yellow-100 text-yellow-800 text-sm font-semibold px-3 py-1 rounded-full">
                  Exclusive Deals
                </span>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                Discover our handpicked premium locations with exceptional growth potential. Limited inventory with special pricing for serious investors looking for maximum returns.
              </p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  Handpicked Locations
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Limited Inventory
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                  Maximum Returns
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-yellow-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105">
                View Premium Plots
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="mt-20 text-center">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 max-w-4xl mx-auto shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Invest in Your Future?
          </h3>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied investors who have secured their financial future with AK Developers. Get expert guidance from site visit to registration.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.location.href = "tel:+91XXXXXXXXXX"}
              className="bg-white text-indigo-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
              📞 Call Now: +91-XXXXXXXXXX
            </button>
            <button className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-indigo-600 transition-all duration-300 transform hover:scale-105">
              📧 Request Callback
            </button>
          </div>
        </div>
      </div>
    </section>
      <Footer/>
                </>

}

export default About;