import React, { useState, useEffect } from 'react';
import { ArrowUpCircle, ArrowDownCircle } from 'lucide-react';
import { useTrading } from '../context/TradingContext';

export function TradingInterface() {
  const { selectedCommodity, addOrder } = useTrading();
  const [orderType, setOrderType] = useState<'buy' | 'sell'>('buy');
  const [price, setPrice] = useState('');
  const [volume, setVolume] = useState('');

  useEffect(() => {
    if (selectedCommodity) {
      setPrice(selectedCommodity.currentPrice.toString());
    }
  }, [selectedCommodity]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCommodity) {
      alert('Please select a commodity first');
      return;
    }

    const numericPrice = parseFloat(price);
    const numericVolume = parseInt(volume);

    if (isNaN(numericPrice) || isNaN(numericVolume)) {
      alert('Please enter valid price and volume');
      return;
    }

    if (numericVolume <= 0) {
      alert('Volume must be greater than 0');
      return;
    }

    if (orderType === 'buy' && numericVolume > selectedCommodity.volume) {
      alert('Not enough volume available');
      return;
    }

    addOrder({
      type: orderType,
      commodity: selectedCommodity.name,
      price: numericPrice,
      volume: numericVolume
    });

    // Reset form
    setVolume('');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {selectedCommodity && (
        <div className="mb-4 p-3 bg-blue-50 rounded-lg">
          <p className="text-sm font-medium text-blue-800">
            Selected: {selectedCommodity.name} (${selectedCommodity.currentPrice.toFixed(2)} per {selectedCommodity.unit})
          </p>
        </div>
      )}

      <div className="flex space-x-4 mb-6">
        <button
          type="button"
          onClick={() => setOrderType('buy')}
          className={`flex-1 py-3 px-4 rounded-lg font-medium ${
            orderType === 'buy'
              ? 'bg-green-100 text-green-700'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <div className="flex items-center justify-center">
            <ArrowUpCircle className="w-5 h-5 mr-2" />
            Buy
          </div>
        </button>
        <button
          type="button"
          onClick={() => setOrderType('sell')}
          className={`flex-1 py-3 px-4 rounded-lg font-medium ${
            orderType === 'sell'
              ? 'bg-blue-100 text-blue-700'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <div className="flex items-center justify-center">
            <ArrowDownCircle className="w-5 h-5 mr-2" />
            Sell
          </div>
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Price (USD)
            </label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="0.00"
              step="0.01"
              min="0"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Volume
            </label>
            <input
              type="number"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="0"
              min="1"
              step="1"
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full py-3 px-4 rounded-lg font-medium text-white ${
              orderType === 'buy' 
                ? 'bg-green-600 hover:bg-green-700' 
                : 'bg-blue-600 hover:bg-blue-700'
            } transition-colors duration-200`}
          >
            Place {orderType === 'buy' ? 'Buy' : 'Sell'} Order
          </button>
        </div>
      </form>
    </div>
  );
}