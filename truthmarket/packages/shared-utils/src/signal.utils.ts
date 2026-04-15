export const calculateSignalStrength = (
  engagementRate: number,
  velocityScore: number,
  sourceQuality: number,
  networkReach: number,
  sentimentScore: number
): number => {
  return (
    engagementRate * 0.30 +
    velocityScore * 0.25 +
    sourceQuality * 0.20 +
    networkReach * 0.15 +
    sentimentScore * 0.10
  );
};

export const calculateOdds = (volumeA: number, volumeB: number): number => {
  const total = volumeA + volumeB;
  if (total === 0) return 0.5; // Default 50/50
  return volumeA / total;
};

export const calculatePotentialReturn = (amount: number, odds: number): number => {
  if (odds <= 0) return 0;
  return amount / odds;
};

export const getPositionColor = (type: string): string => {
  switch (type) {
    case 'AMPLIFY':
    case 'SPIKE':
    case 'CONFIRM':
    case 'RESONATE':
    case 'ICONIC':
    case 'SHARP':
    case 'CONFIRMED':
    case 'BREAKOUT':
    case 'ASCEND':
      return '#0ecb81'; // Green
    case 'DAMPEN':
    case 'FADE':
    case 'REFUTE':
    case 'FLEETING':
    case 'DULL':
    case 'DISPUTED':
    case 'FLOP':
    case 'DESCEND':
      return '#f6465d'; // Red
    default:
      return '#fcd535'; // Yellow/Gold
  }
};
