'use client';

import { useCreateStore } from '@/store/createStore';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Video, FileText, Music, Image as ImageIcon, 
  BarChart2, Newspaper, Package, User, ArrowLeft 
} from 'lucide-react';

import { VideoCreateModal } from './modals/VideoCreateModal';
import { ArticleCreateModal } from './modals/ArticleCreateModal';

const CONTENT_TYPES = [
  { id: 'video', label: 'Video', icon: Video, desc: 'Upload or record', badge: 'REACH', highlight: '#c084fc' },
  { id: 'article', label: 'Makale', icon: FileText, desc: 'Write a story', badge: 'TRUTH', highlight: '#00e5ff' },
  { id: 'audio', label: 'Ses', icon: Music, desc: 'Upload audio', badge: 'VIBE', highlight: '#fcd535' },
  { id: 'photo', label: 'Fotoğraf', icon: ImageIcon, desc: 'Share an image', badge: 'LENS', highlight: '#ff007f' },
  { id: 'analysis', label: 'Analiz', icon: BarChart2, desc: 'Data & charts', badge: 'EDGE', highlight: '#0ecb81' },
  { id: 'news', label: 'Haber', icon: Newspaper, desc: 'Breaking news', badge: 'VERIFY', highlight: '#2563eb' },
  { id: 'product', label: 'Ürün', icon: Package, desc: 'New launches', badge: 'LAUNCH', highlight: '#f59e0b' },
  { id: 'person', label: 'Kişi', icon: User, desc: 'Profiles', badge: 'RISE', highlight: '#14b8a6' },
];

export function CreateModal() {
  const { isOpen, step, selectedType, setOpen, setSelectedType, reset } = useCreateStore();

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass border border-white/10 shadow-2xl rounded-2xl flex flex-col md:w-auto md:min-w-[600px] m-4"
        >
          {/* Header */}
          <div className="sticky top-0 z-10 p-5 border-b border-white/5 bg-[#0A0C0F]/80 backdrop-blur-xl flex justify-between items-center">
            <div className="flex items-center gap-3">
              {step > 1 && (
                <button 
                  onClick={() => setSelectedType(null)} // go back to step 1
                  className="p-1 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 text-gray-400 hover:text-white" />
                </button>
              )}
              <h2 className="text-xl font-bold text-white">
                {step === 1 ? 'Ne oluşturmak istiyorsun?' : `Yeni ${CONTENT_TYPES.find(c => c.id === selectedType)?.label} Oluştur`}
              </h2>
            </div>
            
            <button 
              onClick={() => reset()}
              className="p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6">
            {step === 1 && (
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {CONTENT_TYPES.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className="relative group p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all flex flex-col items-center justify-center gap-3 text-center overflow-hidden"
                  >
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300" 
                      style={{ backgroundColor: type.highlight }} 
                    />
                    
                    <span 
                      className="absolute top-2 right-2 text-[8px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider"
                      style={{ color: type.highlight, backgroundColor: `${type.highlight}20` }}
                    >
                      {type.badge}
                    </span>

                    <type.icon 
                      className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors relative z-10" 
                    />
                    
                    <div className="relative z-10">
                      <h3 className="text-sm font-bold text-white mb-0.5">{type.label}</h3>
                      <p className="text-[10px] text-gray-400">{type.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {step === 2 && selectedType && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                {selectedType === 'video' ? (
                  <VideoCreateModal />
                ) : selectedType === 'article' ? (
                  <ArticleCreateModal />
                ) : (
                  <div className="p-10 border border-dashed border-white/20 rounded-xl flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
                      {(() => {
                        const Icon = CONTENT_TYPES.find(c => c.id === selectedType)?.icon || Video;
                        return <Icon className="w-8 h-8 text-[#8a2be2]" />;
                      })()}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{CONTENT_TYPES.find(c => c.id === selectedType)?.label} Modülü Yükleniyor</h3>
                    <p className="text-gray-400 text-sm max-w-sm">Bu modül içerik tipine özel formları, IPFS yükleyicisini ve PulseMarket signal smart contract bağlantılarını içerecektir.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
