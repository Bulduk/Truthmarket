'use client';

import { Plus } from 'lucide-react';
import { useCreateStore } from '@/store/createStore';

export function CreateButton() {
  const setOpen = useCreateStore((state) => state.setOpen);

  return (
    <button
      onClick={(e) => {
        e.preventDefault(); // If embedded in a Link or form
        setOpen(true);
      }}
      className="relative flex items-center justify-center w-[46px] h-[46px] rounded-xl bg-gradient-to-tr from-[#8a2be2] to-[#1e3a8a] shadow-[0_0_15px_rgba(138,43,226,0.6)] hover:scale-95 transition-transform animate-pulse focus:outline-none"
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-[#8a2be2] to-[#c084fc] opacity-20 blur-sm" />
      <Plus className="w-6 h-6 text-white relative z-10" strokeWidth={2.5} />
    </button>
  );
}
