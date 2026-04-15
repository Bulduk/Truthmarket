export enum SignalPositionType {
  AMPLIFY = 'AMPLIFY',
  DAMPEN = 'DAMPEN',
  SPIKE = 'SPIKE',
  FADE = 'FADE'
}

export enum MarketType {
  REACH = 'REACH',
  TRUTH = 'TRUTH',
  VIBE = 'VIBE',
  LENS = 'LENS',
  EDGE = 'EDGE',
  VERIFY = 'VERIFY',
  LAUNCH = 'LAUNCH',
  RISE = 'RISE'
}

export interface ISignalMarket {
  id: string;
  contentId: string;
  marketType: MarketType;
  signalStrength: number;
  totalVolume: number;
  status: string;
  endTime: Date;
}

export interface ISignalPosition {
  id: string;
  marketId: string;
  userId: string;
  type: SignalPositionType;
  amount: number;
  oddsAtEntry: number;
  status: string;
}

export interface ISignalOdds {
  amplify: number;
  dampen: number;
  spike: number;
  fade: number;
}

export interface ISignalStrength {
  value: number;
  engagementRate: number;
  velocityScore: number;
  sourceQuality: number;
  networkReach: number;
  sentimentScore: number;
}
