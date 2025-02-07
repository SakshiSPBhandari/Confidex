export interface Commodity {
  id: string;
  name: string;
  currentPrice: number;
  unit: string;
  volume: number;
  change24h: number;
  seller: string;
}

export interface Order {
  id: string;
  type: 'buy' | 'sell';
  commodity: string;
  price: number;
  volume: number;
  status: 'pending' | 'completed' | 'cancelled';
  timestamp: string;
}