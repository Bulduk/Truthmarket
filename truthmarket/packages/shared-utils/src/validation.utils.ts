export const isValidAddress = (address: string): boolean => {
  return /^0x[a-fA-F0-9]{40}$/.test(address);
};

export const isValidEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const isValidUsername = (username: string): boolean => {
  return /^[a-zA-Z0-9_]{3,15}$/.test(username);
};

export const sanitizeInput = (input: string): string => {
  if (!input) return '';
  return input.replace(/[<>]/g, '');
};
