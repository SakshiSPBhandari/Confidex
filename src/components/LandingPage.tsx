import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export function LandingPage() {
  // Commodity Data
  const commodities = [
    { name: 'Gold', price: 1950.50, change: 2.5, volume: '1,500', seller: 'GoldCorp Inc.', up: true },
    { name: 'Silver', price: 23.75, change: -1.2, volume: '5,000', seller: 'Silver Mines Ltd.', up: false },
    { name: 'Copper', price: 4.12, change: 0.8, volume: '25,000', seller: 'Copper Global', up: true },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Trade Commodities with <span className="text-blue-500">Confidex</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              A modern platform for seamless commodity trading. Zero brokerage, instant execution.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                to="/register"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Get Started
              </Link>
              <Link
                to="/trading"
                className="px-8 py-3 bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-600 transition-colors"
              >
                View Markets
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-xl">
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Secure Trading</h3>
            <p className="text-gray-400">
              Advanced security measures to protect your assets and transactions.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">24/7 Trading</h3>
            <p className="text-gray-400">
              Trade commodities around the clock with real-time market data.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
              <DollarSign className="w-6 h-6 text-purple-500" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Zero Brokerage</h3>
            <p className="text-gray-400">
              Trade without any brokerage fees. Keep more of your profits.
            </p>
          </div>
        </div>
      </div>

      {/* Market Overview Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Popular Markets</h2>
          <p className="text-gray-400">Track and trade top commodities in real-time</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {commodities.map((commodity) => (
            <div key={commodity.name} className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">{commodity.name}</h3>
                {commodity.up ? (
                  <TrendingUp className="w-5 h-5 text-green-500" />
                ) : (
                  <TrendingDown className="w-5 h-5 text-red-500" />
                )}
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-2xl font-bold text-white">${commodity.price.toFixed(2)}</span>
                <span className={commodity.up ? "text-green-500" : "text-red-500"}>
                  {commodity.change > 0 ? `+${commodity.change}%` : `${commodity.change}%`}
                </span>
              </div>
              <div className="text-gray-400 text-sm">Volume: {commodity.volume}</div>
              <div className="text-gray-400 text-sm">Seller: {commodity.seller}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Trading?</h2>
          <p className="text-xl text-blue-100 mb-8">Join thousands of traders and start your journey today.</p>
          <Link
            to="/register"
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Create Free Account
          </Link>
        </div>
      </div>
    </div>
  );
}
