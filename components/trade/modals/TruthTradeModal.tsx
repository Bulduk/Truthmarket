'use client';

import { useTradeStore, Position } from '@/store/tradeStore';
import { Button } from '@/components/shared/Button';
import { Input } from '@/components/shared/Input';
import { FileText, CheckCircle, XCircle, RefreshCw, Clock } from 'lucide-react';

const POSITIONS: { id: Position; label: string; icon: React.ElementType; desc: string; multiplier: string; color: string }[] = [
  { id: 'confirm', label: 'CONFIRM', icon: CheckCircle, desc: 'Doğrula', multiplier: '1.8x', color: '#00D68F' }, // Green
  { id: 'refute', label: 'REFUTE', icon: XCircle, desc: 'Çürüt', multiplier: '4.2x', color: '#FF4757' }, // Red
  { id: 'evolve', label: 'EVOLVE', icon: RefreshCw, desc: 'Gelişir', multiplier: '7.5x', color: '#00e5ff' }, // Cyan
  { id: 'stale', label: 'STALE', icon: Clock, desc: 'Eskir', multiplier: '5.1x', color: '#848E9C' }, // Gray
];

export function TruthTradeModal() {
  const { selectedPosition, setSelectedPosition, stakeAmount, setStakeAmount, step, setStep } = useTradeStore();

  const handleQuickStake = (amount: string) => {
    setStakeAmount(amount);
  };

  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4">
      {/* HEADER */}
      <div className="flex items-start gap-4 pb-4 border-b border-[#252B3B]">
        <div className="relative w-16 h-20 rounded-lg overflow-hidden bg-[#1E2433] flex-shrink-0 flex items-center justify-center">
          <FileText className="w-6 h-6 text-[#9BA3B8]"/>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-bold tracking-widest text-[#00e5ff] bg-[rgba(0,229,255,0.1)] px-2 py-0.5 rounded-sm">TRUTH MARKET</span>
          </div>
          <h3 className="text-sm font-bold text-white leading-tight mb-2 truncate">Yeni quantum işlemci modeli...</h3>
          <p className="text-xs text-[#9BA3B8] flex items-center gap-2">
            <span>📰 TechDaily</span>
            <span>•</span>
            <span className="text-[#F0B90B]">⏱ 14 gün kaldı</span>
          </p>
        </div>
      </div>

      {step === 1 && (
        <div className="space-y-6">
          {/* POSITION BUTTONS */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            {POSITIONS.map((pos) => {
              const Icon = pos.icon;
              const isSelected = selectedPosition === pos.id;
              return (
                <button
                  key={pos.id}
                  onClick={() => setSelectedPosition(pos.id)}
                  style={{ 
                    borderColor: isSelected ? pos.color : '#252B3B',
                    backgroundColor: isSelected ? `${pos.color}15` : '#131720'
                  }}
                  className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all hover:bg-[#1E2433]`}
                >
                  <Icon className="w-5 h-5 mb-1" style={{ color: pos.color }} />
                  <span className="text-xs font-bold text-white mb-0.5">{pos.label}</span>
                  <span className="text-[10px] text-[#9BA3B8] mb-1">{pos.desc}</span>
                  <span className="text-xs font-mono font-bold" style={{ color: pos.color }}>{pos.multiplier}</span>
                </button>
              );
            })}
          </div>

          {/* METRICS */}
          <div className="bg-[#131720] border border-[#252B3B] p-4 rounded-xl space-y-3">
            <div className="flex justify-between items-center text-sm">
              <span className="text-[#9BA3B8]">Kaynak güvenilirliği</span>
              <span className="text-[#00e5ff] font-mono font-bold">%87</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-[#9BA3B8]">Atıf sayısı</span>
              <span className="text-white font-mono font-bold">23</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-[#9BA3B8]">Doğrulama durumu</span>
              <span className="text-[#F0B90B] font-medium text-xs">Beklemede</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-[#9BA3B8]">Uzman görüşü</span>
              <span className="text-white font-mono font-bold text-xs"><span className="text-[#00D68F]">4/5</span> destekliyor</span>
            </div>
          </div>

          <Button 
            className="w-full bg-[#00e5ff] hover:bg-[#00cce6] text-black font-bold h-12 shadow-[0_0_15px_rgba(0,229,255,0.3)] disabled:opacity-50 disabled:shadow-none"
            disabled={!selectedPosition}
            onClick={() => setStep(2)}
          >
            Sonraki Adım
          </Button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6">
          <div className="p-3 bg-[#131720] border border-[#252B3B] rounded-xl flex items-center justify-between">
            <span className="text-xs text-[#9BA3B8]">Seçilen Pozisyon:</span>
            {selectedPosition && (() => {
              const pos = POSITIONS.find(p => p.id === selectedPosition);
              return <span className="font-bold text-sm" style={{ color: pos?.color }}>{pos?.label} ({pos?.multiplier})</span>;
            })()}
          </div>

          <div>
            <label className="text-xs font-bold text-[#9BA3B8] uppercase block mb-2">Miktar (PULSE)</label>
            <div className="relative">
              <Input 
                type="number" 
                value={stakeAmount} 
                onChange={(e) => setStakeAmount(e.target.value)}
                className="w-full bg-[#0D0F14] border-[#252B3B] text-white text-2xl font-mono py-6 pr-16" 
                placeholder="0.00" 
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#5C6478] font-bold">PULSE</span>
            </div>
            
            <div className="flex gap-2 mt-3">
              {['10', '50', '100', '500'].map(val => (
                <button 
                  key={val} 
                  onClick={() => handleQuickStake(val)}
                  className="flex-1 bg-[#1E2433] hover:bg-[#252B3B] text-[#9BA3B8] hover:text-white py-1.5 rounded-lg text-xs font-mono font-bold transition-colors"
                >
                  {val}
                </button>
              ))}
              <button 
                onClick={() => handleQuickStake('2847')}
                className="flex-1 bg-[rgba(240,185,11,0.1)] hover:bg-[rgba(240,185,11,0.2)] text-[#F0B90B] py-1.5 rounded-lg text-xs font-mono font-bold transition-colors"
              >
                MAX
              </button>
            </div>
          </div>

          <div className="p-4 bg-[rgba(0,229,255,0.05)] border border-[rgba(0,229,255,0.2)] rounded-xl space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-[#9BA3B8]">Potansiyel Kazanç:</span>
              <span className="text-white font-mono">
                {stakeAmount ? (Number(stakeAmount) * parseFloat(POSITIONS.find(p => p.id === selectedPosition)?.multiplier || '0')).toFixed(2) : '0.00'} PULSE
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-[#9BA3B8]">Kâr:</span>
              <span className="text-[#00D68F] font-mono font-bold">
                +{stakeAmount ? (Number(stakeAmount) * (parseFloat(POSITIONS.find(p => p.id === selectedPosition)?.multiplier || '1') - 1)).toFixed(2) : '0.00'} PULSE
              </span>
            </div>
          </div>

          <div className="flex justify-between items-center px-1">
            <span className="text-xs text-[#5C6478]">Bakiye:</span>
            <span className="text-xs text-[#9BA3B8] font-mono">2,847 PULSE</span>
          </div>

          <div className="flex gap-3">
            <Button variant="ghost" onClick={() => setStep(1)} className="flex-1">Geri</Button>
            <Button 
              className="flex-[2] bg-[#F0B90B] hover:bg-[#d4a000] text-black font-bold h-12 shadow-[0_0_15px_rgba(240,185,11,0.3)] disabled:opacity-50"
              disabled={!stakeAmount || parseFloat(stakeAmount) <= 0}
              onClick={() => setStep(3)} // In real app, goes to confirm/tx steps
            >
              Pozisyonu Onayla
            </Button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="text-center py-8 space-y-4">
          <div className="w-16 h-16 rounded-full bg-[#00D68F]/20 flex items-center justify-center mx-auto mb-4">
            <div className="w-8 h-8 rounded-full border-t-2 border-[#00D68F] animate-spin" />
          </div>
          <h3 className="text-lg font-bold text-white">İşlem Onaylanıyor...</h3>
          <p className="text-sm text-[#9BA3B8]">Lütfen cüzdanınızdan işlemi onaylayın.</p>
          <div className="pt-4">
            <Button variant="ghost" className="text-[#E8ECF4]" onClick={() => setStep(1)}>İptal</Button>
          </div>
        </div>
      )}
    </div>
  );
}
