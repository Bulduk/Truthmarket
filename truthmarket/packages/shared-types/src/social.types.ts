export interface IPost {
  id: string;
  userId: string;
  content: string;
  mediaUrls?: string[];
  likesCount: number;
  commentsCount: number;
  sharesCount: number;
  createdAt: Date;
}

export interface IComment {
  id: string;
  postId: string;
  userId: string;
  content: string;
  likesCount: number;
  createdAt: Date;
}

export interface IHashtag {
  id: string;
  tag: string;
  usageCount: number;
}

export interface IMessage {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  isRead: boolean;
  createdAt: Date;
}
