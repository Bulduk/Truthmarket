'use client';

import { useState } from 'react';
import { Upload, Camera, Link as LinkIcon, ShieldAlert, Globe, MapPin, Percent } from 'lucide-react';
import { Button } from '@/components/shared/Button';
import { Input } from '@/components/shared/Input';

export function VideoCreateModal() {
  const [sourceMode, setSourceMode] = useState<'upload' | 'record'>('upload');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [mintAsNFT, setMintAsNFT] = useState(true);

  return (
    <div className="flex flex-col gap-6 w-full fade-in slide-in-from-right-4 duration-300">
      {/* source mode tabs */}
      <div className="flex gap-2 p-1 bg-[#101010] border border-white/10 rounded-xl">
        <button 
          onClick={() => setSourceMode('upload')} 
          className={`flex-1 flex justify-center items-center gap-2 py-2 rounded-lg text-sm font-bold transition-all ${
            sourceMode === 'upload' ? 'bg-[rgba(138,43,226,0.2)] text-[#c084fc] shadow-[0_0_10px_rgba(138,43,226,0.3)]' : 'text-gray-400 hover:text-white'
          }`}
        >
          <Upload className="w-4 h-4"/> Yükle
        </button>
        <button 
          onClick={() => setSourceMode('record')} 
          className={`flex-1 flex justify-center items-center gap-2 py-2 rounded-lg text-sm font-bold transition-all ${
            sourceMode === 'record' ? 'bg-[rgba(138,43,226,0.2)] text-[#c084fc] shadow-[0_0_10px_rgba(138,43,226,0.3)]' : 'text-gray-400 hover:text-white'
          }`}
        >
          <Camera className="w-4 h-4"/> Kaydet
        </button>
      </div>
      
      {/* File input area */}
      <div className="h-40 border-2 border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center gap-2 hover:border-[#8a2be2]/50 transition-colors bg-white/5 cursor-pointer group">
        <Upload className="w-8 h-8 text-gray-500 group-hover:text-[#c084fc] transition-colors"/>
        <span className="text-gray-300 text-sm">Sürükle bırak veya <b className="text-[#c084fc]">gözat</b></span>
        <span className="text-gray-500 text-xs">MP4, WebM (Max 50MB)</span>
      </div>

      {/* Form fields */}
      <div className="space-y-4">
        <div>
          <label className="text-xs font-bold text-[#c084fc] uppercase mb-1.5 block">Video Başlığı *</label>
          <Input 
            placeholder="Videonuza açıklayıcı bir başlık verin" 
            maxLength={200} 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            className="bg-[#050505] border-white/10 text-white focus-visible:ring-[#8a2be2]/50 focus-visible:border-[#8a2be2]" 
          />
        </div>
        <div>
          <label className="text-xs font-bold text-gray-400 uppercase mb-1.5 block">Açıklama</label>
          <textarea 
            placeholder="Videonuzu açıklayın..." 
            maxLength={2000} 
            rows={3} 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            className="w-full bg-[#050505] border border-white/10 rounded-xl p-3 text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#8a2be2]/50 focus:border-[#8a2be2] resize-none" 
          />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-bold text-gray-400 uppercase mb-1.5 block">Etiketler</label>
            <Input 
              placeholder="Vurgül ile ayır (örn: #btc, #haber)" 
              value={tags} 
              onChange={e => setTags(e.target.value)} 
              className="bg-[#050505] border-white/10 text-white" 
            />
          </div>
          <div>
            <label className="text-xs font-bold text-gray-400 uppercase mb-1.5 block">Kaynak URL (Opsiyonel)</label>
            <Input 
              placeholder="https://..." 
              className="bg-[#050505] border-white/10 text-white" 
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-bold text-gray-400 uppercase mb-1.5 block">Telif Hakkı *</label>
            <select className="w-full bg-[#050505] border border-white/10 rounded-xl p-3 text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#8a2be2]/50 focus:border-[#8a2be2] appearance-none">
              <option value="original">Orijinal İçerik (Benim)</option>
              <option value="cc">Creative Commons</option>
              <option value="commercial">Ticari Lisans</option>
              <option value="public">Kamu Malı</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-bold text-gray-400 uppercase mb-1.5 block">Görünürlük</label>
            <select className="w-full bg-[#050505] border border-white/10 rounded-xl p-3 text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#8a2be2]/50 focus:border-[#8a2be2] appearance-none">
              <option value="public">Herkese Açık</option>
              <option value="followers">Sadece Takipçiler</option>
              <option value="private">Gizli</option>
            </select>
          </div>
        </div>

        {/* NFT settings */}
        <div className="p-4 bg-gradient-to-br from-[rgba(138,43,226,0.1)] to-transparent border border-[#8a2be2]/20 rounded-xl mt-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h4 className="text-[#c084fc] font-bold text-sm">NFT Olarak Yayınla</h4>
              <p className="text-gray-400 text-xs mt-0.5">İçeriğiniz blockchain&apos;e kaydedilir ve doğrulanır</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" checked={mintAsNFT} onChange={(e) => setMintAsNFT(e.target.checked)} className="sr-only peer" />
              <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#8a2be2] shadow-[0_0_10px_rgba(138,43,226,0.5)]"></div>
            </label>
          </div>
          {mintAsNFT && (
            <div>
              <label className="text-xs font-bold text-[#c084fc] uppercase mb-1.5 flex items-center gap-1">
                <Percent className="w-3 h-3"/> Telif Payı % (0-10)
              </label>
              <input type="range" min="0" max="10" defaultValue="5" className="w-full accent-[#c084fc]"/>
              <div className="flex justify-between text-[10px] text-gray-500 mt-1"><span>0%</span><span>5%</span><span>10%</span></div>
            </div>
          )}
        </div>
      </div>

      <div className="pt-4 flex justify-end gap-3 border-t border-white/10">
        <Button variant="ghost">İptal</Button>
        <Button variant="primary" className="bg-gradient-to-r from-[#8a2be2] to-[#1e3a8a] text-white hover:from-[#7e22ce] hover:to-[#1e3a8a] shadow-[0_0_15px_rgba(138,43,226,0.4)]">
          İçeriği Yükle & Sinyal Yarat
        </Button>
      </div>
    </div>
  );
}
