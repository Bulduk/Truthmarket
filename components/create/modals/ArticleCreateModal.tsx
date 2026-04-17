'use client';

import { useState } from 'react';
import { FileText, Image as ImageIcon, Link as LinkIcon } from 'lucide-react';
import { Button } from '@/components/shared/Button';
import { Input } from '@/components/shared/Input';

export function ArticleCreateModal() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [summary, setSummary] = useState('');

  return (
    <div className="flex flex-col gap-6 w-full fade-in slide-in-from-right-4 duration-300">
      {/* Cover image area */}
      <div className="h-32 border-2 border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center gap-2 hover:border-[#00e5ff]/50 transition-colors bg-white/5 cursor-pointer group">
        <ImageIcon className="w-8 h-8 text-gray-500 group-hover:text-[#00e5ff] transition-colors"/>
        <span className="text-gray-300 text-sm">Kapak Görseli <b className="text-[#00e5ff]">Yükle</b></span>
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-xs font-bold text-[#00e5ff] uppercase mb-1.5 block">Makale Başlığı *</label>
          <Input 
            placeholder="Dikkat çekici bir başlık girin..." 
            maxLength={300} 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            className="bg-[#050505] border-white/10 text-white text-lg font-bold focus-visible:ring-[#00e5ff]/50 focus-visible:border-[#00e5ff]" 
          />
        </div>
        
        <div>
          <label className="text-xs font-bold text-gray-400 uppercase mb-1.5 flex items-center justify-between">
            <span>İçerik (Markdown) *</span>
            <span className="text-[10px] text-gray-500 normal-case">{body.length} / 10000</span>
          </label>
          <textarea 
            placeholder="# Başlık&#10;&#10;Hikayenizi anlatın..." 
            rows={8} 
            value={body} 
            onChange={(e) => setBody(e.target.value)} 
            className="w-full bg-[#050505] border border-white/10 rounded-xl p-4 text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#00e5ff]/50 focus:border-[#00e5ff] font-mono resize-y" 
          />
        </div>

        <div>
          <label className="text-xs font-bold text-gray-400 uppercase mb-1.5 block">Kısa Özet</label>
          <textarea 
            placeholder="Okuyucular için en fazla 300 karakterlik bir özet..." 
            maxLength={300} 
            rows={2} 
            value={summary} 
            onChange={(e) => setSummary(e.target.value)} 
            className="w-full bg-[#050505] border border-white/10 rounded-xl p-3 text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#00e5ff]/50 focus:border-[#00e5ff] resize-none" 
          />
        </div>
        
        <div>
          <label className="text-xs font-bold text-gray-400 uppercase mb-1.5 flex items-center gap-1">
            <LinkIcon className="w-3 h-3"/> Alıntı / Kaynak Bağlantıları (Opsiyonel)
          </label>
          <Input 
            placeholder="https://... (Virgülle ayırın)" 
            className="bg-[#050505] border-white/10 text-white focus-visible:ring-[#00e5ff]/50 focus-visible:border-[#00e5ff]" 
          />
        </div>
      </div>

      <div className="pt-4 flex justify-end gap-3 border-t border-white/10">
        <Button variant="ghost">Taslak Kaydet</Button>
        <Button variant="primary" className="bg-[#00e5ff] hover:bg-[#00b3cc] text-black font-bold shadow-[0_0_15px_rgba(0,229,255,0.4)]">
          Makaleyi Yayınla (TRUTH)
        </Button>
      </div>
    </div>
  );
}
