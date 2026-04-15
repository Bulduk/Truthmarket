export enum UserType {
  ADMIN = 'ADMIN',
  USER = 'USER',
  ORACLE = 'ORACLE'
}

export enum KycStatus {
  NONE = 'NONE',
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED'
}

export interface IUser {
  id: string;
  username: string;
  email: string;
  walletAddress?: string;
  type: UserType;
  kycStatus: KycStatus;
  reputationScore: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserSession {
  id: string;
  userId: string;
  refreshToken: string;
  deviceId: string;
  isActive: boolean;
  expiresAt: Date;
}

export interface IUserSettings {
  userId: string;
  emailNotifications: boolean;
  pushNotifications: boolean;
  theme: 'light' | 'dark';
  privacyProfile: boolean;
}

export interface IUserReputation {
  userId: string;
  score: number;
  accuracyRate: number;
  totalPredictions: number;
  correctPredictions: number;
}
