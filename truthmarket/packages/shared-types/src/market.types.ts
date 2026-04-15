export enum MarketStatus {
  ACTIVE = 'ACTIVE',
  RESOLVED = 'RESOLVED',
  DISPUTED = 'DISPUTED',
  CANCELLED = 'CANCELLED'
}

export enum MarketCategory {
  CRYPTO = 'CRYPTO',
  POLITICS = 'POLITICS',
  ECONOMY = 'ECONOMY',
  SPORTS = 'SPORTS',
  SCIENCE = 'SCIENCE',
  TECH = 'TECH'
}

export interface IMarket {
  id: string;
  title: string;
  category: MarketCategory;
  status: MarketStatus;
  volume: number;
  liquidity: number;
  endTime: Date;
}

export interface IPosition {
  id: string;
  marketId: string;
  userId: string;
  shares: number;
  avgPrice: number;
}

export interface IOrder {
  id: string;
  marketId: string;
  userId: string;
  price: number;
  amount: number;
  isBuy: boolean;
  status: string;
}

export interface ITrade {
  id: string;
  orderId: string;
  price: number;
  amount: number;
  timestamp: Date;
}
