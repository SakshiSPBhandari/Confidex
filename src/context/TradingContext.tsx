import React, { createContext, useContext, useState } from 'react';
import type { Commodity, Order } from '../types';

interface TradingContextType {
  commodities: Commodity[];
  orders: Order[];
  addOrder: (order: Omit<Order, 'id' | 'timestamp' | 'status'>) => void;
  selectedCommodity: Commodity | null;
  setSelectedCommodity: (commodity: Commodity | null) => void;
}

const TradingContext = createContext<TradingContextType | undefined>(undefined);

const initialCommodities: Commodity[] = [
  {
    id: '1',
    name: 'Gold',
    currentPrice: 1950.50,
    unit: 'oz',
    volume: 1500,
    change24h: 2.5,
    seller: 'GoldCorp Inc.'
  },
  {
    id: '2',
    name: 'Silver',
    currentPrice: 23.75,
    unit: 'oz',
    volume: 5000,
    change24h: -1.2,
    seller: 'Silver Mines Ltd.'
  },
  {
    id: '3',
    name: 'Copper',
    currentPrice: 4.12,
    unit: 'lb',
    volume: 25000,
    change24h: 0.8,
    seller: 'Copper Global'
  }
];

export function TradingProvider({ children }: { children: React.ReactNode }) {
  const [commodities, setCommodities] = useState<Commodity[]>(initialCommodities);
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedCommodity, setSelectedCommodity] = useState<Commodity | null>(null);

  const addOrder = (orderData: Omit<Order, 'id' | 'timestamp' | 'status'>) => {
    const newOrder: Order = {
      ...orderData,
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date().toISOString(),
      status: 'pending'
    };

    setOrders(prevOrders => [newOrder, ...prevOrders]);

    // Update commodity volume
    setCommodities(prevCommodities =>
      prevCommodities.map(commodity => {
        if (commodity.name === orderData.commodity) {
          const newVolume = orderData.type === 'buy' 
            ? commodity.volume - orderData.volume 
            : commodity.volume + orderData.volume;
          
          return {
            ...commodity,
            volume: newVolume
          };
        }
        return commodity;
      })
    );
  };

  const value = {
    commodities,
    orders,
    addOrder,
    selectedCommodity,
    setSelectedCommodity
  };

  return (
    <TradingContext.Provider value={value}>
      {children}
    </TradingContext.Provider>
  );
}

export function useTrading() {
  const context = useContext(TradingContext);
  if (context === undefined) {
    throw new Error('useTrading must be used within a TradingProvider');
  }
  return context;
}