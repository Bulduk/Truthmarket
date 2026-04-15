export enum TransactionType {
  DEPOSIT = 'DEPOSIT',
  WITHDRAWAL = 'WITHDRAWAL',
  TRADE = 'TRADE',
  REWARD = 'REWARD',
  STAKE = 'STAKE'
}

export interface IWallet {
  id: string;
  userId: string;
  address: string;
  balance: number;
}

export interface ITransaction {
  id: string;
  walletId: string;
  type: TransactionType;
  amount: number;
  txHash?: string;
  status: string;
  createdAt: Date;
}

export interface ITokenBalance {
  tokenId: string;
  balance: number;
  network: string;
}

export interface INFT {
  id: string;
  tokenId: string;
  contractAddress: string;
  metadata: any;
  ownerId: string;
}

export interface IStaking {
  id: string;
  userId: string;
  amount: number;
  rewardEarned: number;
  lockedUntil: Date;
}
