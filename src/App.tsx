import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from './components/LandingPage';
import { MarketHeader } from './components/MarketHeader';
import { MarketOverview } from './components/MarketOverview';
import { TradingInterface } from './components/TradingInterface';
import { OrderBook } from './components/OrderBook';
import { TradingProvider } from './context/TradingContext';

function App() {
  return (
    <Router>
      <TradingProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/trading"
            element={
              <div className="min-h-screen bg-gray-100">
                <MarketHeader />
                <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                  <div className="px-4 sm:px-0">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-2">
                        <MarketOverview />
                      </div>
                      <div>
                        <TradingInterface />
                      </div>
                      <div className="lg:col-span-3">
                        <OrderBook />
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            }
          />
        </Routes>
      </TradingProvider>
    </Router>
  );
}

export default App