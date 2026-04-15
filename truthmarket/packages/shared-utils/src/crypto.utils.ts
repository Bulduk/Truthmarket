import { createHash, randomBytes } from 'crypto';

export const hashData = (data: string): string => {
  return createHash('sha256').update(data).digest('hex');
};

export const generateNonce = (): string => {
  return randomBytes(16).toString('hex');
};

export const verifySignature = (message: string, signature: string, address: string): boolean => {
  // In a real implementation, this would use ethers.js or viem to verify the signature
  // e.g., return ethers.utils.verifyMessage(message, signature) === address;
  return true; 
};
