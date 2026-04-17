import { create } from 'zustand';

export type MarketType = 'reach' | 'truth' | 'vibe' | 'lens' | 'edge' | 'verify' | 'launch' | 'rise';
export type Position = 'amplify' | 'dampen' | 'spike' | 'fade' | 'confirm' | 'refute' | 'evolve' | 'stale' | 'resonate' | 'trend' | 'niche' | 'iconic' | 'fleeting' | 'viral' | 'archive' | 'sharp' | 'dull' | 'early' | 'late' | 'confirmed' | 'disputed' | 'developing' | 'retracted' | 'breakout' | 'flop' | 'steady' | 'pivot' | 'ascend' | 'descend' | 'plateau';

interface TradeState {
  isOpen: boolean;
  marketType: MarketType | null;
  contentId: string | null;
  selectedPosition: Position | null;
  stakeAmount: string;
  step: 1 | 2 | 3 | 4 | 5; // 1: Position, 2: Stake, 3: Confirm, 4: TX, 5: Success
  txHash: string | null;
  
  openTradeModal: (marketType: MarketType, contentId: string) => void;
  closeTradeModal: () => void;
  setMarketType: (type: MarketType) => void;
  setContentId: (id: string) => void;
  setSelectedPosition: (pos: Position) => void;
  setStakeAmount: (amount: string) => void;
  setStep: (step: 1 | 2 | 3 | 4 | 5) => void;
  setTxHash: (hash: string) => void;
  reset: () => void;
}

export const useTradeStore = create<TradeState>((set) => ({
  isOpen: false,
  marketType: null,
  contentId: null,
  selectedPosition: null,
  stakeAmount: '',
  step: 1,
  txHash: null,

  openTradeModal: (marketType, contentId) => set({ isOpen: true, marketType, contentId, step: 1, selectedPosition: null, stakeAmount: '' }),
  closeTradeModal: () => set({ isOpen: false }),
  setMarketType: (marketType) => set({ marketType }),
  setContentId: (contentId) => set({ contentId }),
  setSelectedPosition: (selectedPosition) => set({ selectedPosition }),
  setStakeAmount: (stakeAmount) => set({ stakeAmount }),
  setStep: (step) => set({ step }),
  setTxHash: (txHash) => set({ txHash }),
  reset: () => set({ marketType: null, contentId: null, selectedPosition: null, stakeAmount: '', step: 1, txHash: null }),
}));
