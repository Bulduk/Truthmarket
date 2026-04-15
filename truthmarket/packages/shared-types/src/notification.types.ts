export enum NotificationType {
  TRADE_WIN = 'TRADE_WIN',
  LIKE = 'LIKE',
  REWARD = 'REWARD',
  MENTION = 'MENTION',
  MARKET_RESOLVED = 'MARKET_RESOLVED',
  SYSTEM_ALERT = 'SYSTEM_ALERT'
}

export interface INotification {
  id: string;
  userId: string;
  type: NotificationType;
  title: string;
  description: string;
  isRead: boolean;
  referenceId?: string;
  createdAt: Date;
}
