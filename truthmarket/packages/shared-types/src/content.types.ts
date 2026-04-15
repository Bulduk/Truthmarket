export enum ContentType {
  VIDEO = 'VIDEO',
  ARTICLE = 'ARTICLE',
  AUDIO = 'AUDIO',
  PHOTO = 'PHOTO',
  ANALYSIS = 'ANALYSIS',
  NEWS = 'NEWS',
  PRODUCT = 'PRODUCT',
  PERSON = 'PERSON'
}

export interface IContent {
  id: string;
  userId: string;
  type: ContentType;
  title: string;
  body: string;
  signalStrength: number;
  createdAt: Date;
}

export interface IVideoContent extends IContent {
  videoUrl: string;
  durationSeconds: number;
  viralCoefficient: number;
}

export interface IArticleContent extends IContent {
  readingTimeMinutes: number;
  sourceUrls: string[];
}

export interface IAudioContent extends IContent {
  audioUrl: string;
  resonanceScore: number;
}

export interface IPhotoContent extends IContent {
  imageUrl: string;
  visualImpactScore: number;
}

export interface IAnalysisContent extends IContent {
  accuracyRate: number;
  marketPerformance: number;
}

export interface INewsContent extends IContent {
  sourceVerification: boolean;
  reliabilityChain: string[];
}

export interface IProductContent extends IContent {
  productMarketFitScore: number;
}

export interface IPersonContent extends IContent {
  influenceTrajectory: number;
}
