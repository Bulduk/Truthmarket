import { create } from 'zustand';

interface CreateState {
  isOpen: boolean;
  step: number;
  selectedType: string | null;
  setOpen: (isOpen: boolean) => void;
  setStep: (step: number) => void;
  setSelectedType: (type: string | null) => void;
  reset: () => void;
}

export const useCreateStore = create<CreateState>((set) => ({
  isOpen: false,
  step: 1,
  selectedType: null,
  setOpen: (isOpen) => set({ isOpen }),
  setStep: (step) => set({ step }),
  setSelectedType: (selectedType) => set({ selectedType, step: 2 }),
  reset: () => set({ isOpen: false, step: 1, selectedType: null }),
}));
