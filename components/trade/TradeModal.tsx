'use client';

import { useTradeStore } from '@/store/tradeStore';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { ReachTradeModal } from './modals/ReachTradeModal';
import { TruthTradeModal } from './modals/TruthTradeModal';

export function TradeModal() {
  const { isOpen, closeTradeModal, marketType } = useTradeStore();

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center pointer-events-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeTradeModal}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ y: '100%', opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: '100%', opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full sm:max-w-md bg-[#0A0C0F] border border-[#252B3B] rounded-t-3xl sm:rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={closeTradeModal}
              className="absolute top-4 right-4 p-2 bg-white/5 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Dynamic Content */}
            <div className="overflow-y-auto px-4 py-6 sm:p-6 w-full custom-scrollbar">
              {marketType === 'reach' && <ReachTradeModal />}
              {marketType === 'truth' && <TruthTradeModal />}
              {/* Add other market types here, showing a placeholder for now if unhandled */}
              {marketType !== 'reach' && marketType !== 'truth' && (
                <div className="py-12 text-center text-gray-400">
                  <p>Bu market türü henüz entegre edilmedi ({marketType})</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
