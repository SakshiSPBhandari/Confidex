import React from 'react';
import { DollarSign, BarChart3 } from 'lucide-react';
import ConfidexLogo  from '../assets/trading.svg'; // SVG as React component

export function MarketHeader() {
  return (
    <div className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={ConfidexLogo} alt="Confidex Logo" className="h-8 w-8 text-indigo-600" />
            <h1 className="ml-3 text-2xl font-bold text-gray-900">Confidex</h1>
          </div>
          <div className="flex space-x-8">
            <div className="flex items-center">
              <DollarSign className="h-5 w-5 text-green-500" />
              <span className="ml-2 text-sm font-medium text-gray-500">Market Cap: $2.4B</span>
            </div>
            <div className="flex items-center">
              <BarChart3 className="h-5 w-5 text-blue-500" />
              <span className="ml-2 text-sm font-medium text-gray-500">24h Volume: $342M</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
