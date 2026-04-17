'use client';

import { useTradeStore, Position } from '@/store/tradeStore';
import { Button } from '@/components/shared/Button';
import { Input } from '@/components/shared/Input';
import { Check, AlertTriangle, Radio, Ban, Newspaper, Play } from 'lucide-react';

const POSITIONS: { id: Position; label: string; icon: React.ElementType; desc: string; multiplier: string; color: string }[] = [
  { id: 'confirmed', label: 'CONFIRMED', icon: Check, desc: 'Doğrulandı', multiplier: '1.4x', color: '#00D68F' },
  { id: 'disputed', label: 'DISPUTED', icon: AlertTriangle, desc: 'Şüpheli', multiplier: '5.2x', color: '#F0B90B' },
  { id: 'developing', label: 'DEVELOPING', icon: Radio, desc: 'Gelişiyor', multiplier: '2.8x', color: '#10b981' },
  { id: 'retracted', label: 'RETRACTED', icon: Ban, desc: 'Geri Çekildi', multiplier: '15.0x', color: '#f6465d' },
];

export function VerifyTradeModal() {
  const { step, setStep, selectedPosition, setPosition, stakeAmount, setStakeAmount } = useTradeStore();

  const handleQuickStake = (amount: string) => {
    setStakeAmount(amount);
  };

  const getActiveColor = () => {
    if (!selectedPosition) return '#10b981';
    return POSITIONS.find(p => p.id === selectedPosition)?.color || '#10b981';
  };

  return (
    <div className="flex flex-col h-full text-[#E8ECF4]">
      {/* Header Info */}
      <div className="flex items-start gap-4 mb-6 pb-6 border-b border-white/5">
        <div className="w-16 h-16 rounded-xl overflow-hidden relative shrink-0 bg-[#1e2329] border border-white/10 flex items-center justify-center">
          <Newspaper className="w-8 h-8 text-[#10b981]" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold text-[#10b981] bg-[#10b981]/10 px-2 py-0.5 rounded-full border border-[#10b981]/20">
              📰 VERIFY MARKET
            </span>
          </div>
          <h3 className="text-base font-bold text-white truncate">Breaking: New Regulations</h3>
          <p className="text-sm text-[#9BA3B8] truncate mt-0.5">🌐 SourceNews • ⏱ 6 saat kaldı</p>
        </div>
      </div>

      {/* STEP 1: Position Selection */}
      {step === 1 && (
        <div className="flex-1 flex flex-col min-h-0 space-y-6">
          <div>
            <h4 className="text-sm font-bold text-white mb-3">Pozisyon Seçin</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {POSITIONS.map((pos) => {
                const Icon = pos.icon;
                const isSelected = selectedPosition === pos.id;
                return (
                  <button
                    key={pos.id}
                    onClick={() => setPosition(pos.id)}
                    className={`flex flex-col items-center justify-center p-4 rounded-xl border transition-all duration-200 ${
                      isSelected 
                        ? `bg-[${pos.color}]/10 border-[${pos.color}]/50 shadow-[0_0_15px_${pos.color}33]` 
                        : 'bg-[#131720] border-white/5 hover:border-white/20'
                    }`}
                    style={{ 
                      borderColor: isSelected ? `${pos.color}80` : undefined,
                      backgroundColor: isSelected ? `${pos.color}15` : undefined,
                      boxShadow: isSelected ? `0 0 15px ${pos.color}33` : undefined 
                    }}
                  >
                    <Icon className="w-6 h-6 mb-2" style={{ color: pos.color }} />
                    <span className="text-xs font-bold text-white mb-1">{pos.label}</span>
                    <span className="text-[10px] text-[#9BA3B8] mb-2">{pos.desc}</span>
                    <span className="text-sm font-bold" style={{ color: pos.color }}>{pos.multiplier}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="bg-[#181A20] rounded-xl p-4 border border-white/5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-xs text-[#9BA3B8]">Doğrulama Durumu</span>
                <div className="text-sm font-bold text-[#F0B90B] mt-1">Beklemede</div>
              </div>
              <div>
                <span className="text-xs text-[#9BA3B8]">Kaynak Güveni</span>
                <div className="text-sm font-bold text-white mt-1">B Sınıfı</div>
              </div>
            </div>
          </div>

          <Button 
            className="w-full text-white font-bold h-12 disabled:opacity-50 disabled:shadow-none"
            style={{ 
              backgroundColor: selectedPosition ? getActiveColor() : '#2B2F36',
              boxShadow: selectedPosition ? `0 0 15px ${getActiveColor()}40` : 'none',
              color: selectedPosition === 'confirmed' || selectedPosition === 'disputed' || selectedPosition === 'developing' ? '#000' : '#fff'
            }}
            disabled={!selectedPosition}
            onClick={() => setStep(2)}
          >
            Sonraki Adım
          </Button>
        </div>
      )}

      {/* STEP 2: Stake Amount Input */}
      {step === 2 && (
        <div className="flex-1 flex flex-col min-h-0 space-y-6">
          <div className="bg-[#181A20] p-4 rounded-xl border border-white/5 flex items-center justify-between">
            <span className="text-sm text-[#9BA3B8]">Seçilen Pozisyon:</span>
            {selectedPosition && (
              <span className="text-sm font-bold flex items-center gap-1" style={{ color: getActiveColor() }}>
                {POSITIONS.find(p => p.id === selectedPosition)?.label} ({POSITIONS.find(p => p.id === selectedPosition)?.multiplier})
              </span>
            )}
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-bold text-white">Miktar (PULSE)</label>
              <span className="text-xs text-[#9BA3B8]">Bakiye: 2,847 PULSE</span>
            </div>
            <Input 
              type="number" 
              placeholder="0.00" 
              value={stakeAmount}
              onChange={(e) => setStakeAmount(e.target.value)}
              className="text-lg bg-[#131720] border-white/10"
              rightIcon={<span className="text-sm font-bold text-[#F0B90B]">PULSE</span>}
            />
            
            <div className="flex gap-2 mt-3">
              {['10', '50', '100', 'MAX'].map((val) => (
                <button
                  key={val}
                  onClick={() => handleQuickStake(val === 'MAX' ? '2847' : val)}
                  className="flex-1 py-1.5 text-xs font-medium bg-[#1e2329] hover:bg-white/10 text-[#E8ECF4] rounded-lg transition-colors border border-white/5"
                >
                  {val !== 'MAX' ? '+' : ''}{val}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-[#131720] p-4 rounded-xl border border-[#10b981]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#10b981]/5 rounded-full blur-2xl -mt-10 -mr-10"></div>
            <h4 className="text-xs text-[#9BA3B8] mb-2 relative z-10">Potansiyel Kazanç</h4>
            <div className="text-xl font-bold text-[#00D68F] relative z-10">
              {stakeAmount ? (parseFloat(stakeAmount) * parseFloat(POSITIONS.find(p => p.id === selectedPosition)?.multiplier || '0')).toFixed(2) : '0.00'} PULSE
            </div>
            <div className="text-xs text-[#9BA3B8] mt-1 relative z-10">
              Kâr: <span className="text-[#00D68F]">+{stakeAmount ? ((parseFloat(POSITIONS.find(p => p.id === selectedPosition)?.multiplier || '0') - 1) * parseFloat(stakeAmount)).toFixed(2) : '0.00'} PULSE</span>
            </div>
          </div>

          <div className="flex gap-3">
            <Button variant="ghost" onClick={() => setStep(1)} className="flex-1 bg-[#1e2329] hover:bg-[#2B2F36]">Geri</Button>
            <Button 
              className="flex-[2] font-bold h-12 disabled:opacity-50"
              style={{ 
                backgroundColor: getActiveColor(),
                boxShadow: `0 0 15px ${getActiveColor()}50`,
                color: selectedPosition === 'confirmed' || selectedPosition === 'disputed' || selectedPosition === 'developing' ? '#000' : '#fff'
              }}
              disabled={!stakeAmount || parseFloat(stakeAmount) <= 0}
              onClick={() => setStep(3)}
            >
              Pozisyonu Onayla
            </Button>
          </div>
        </div>
      )}

      {/* STEP 3 & 4 remain mostly structural but keeping to TradeModal's pattern */}
      {step >= 3 && (
        <div className="flex-1 flex flex-col min-h-0 space-y-6 items-center justify-center text-center py-6">
          <Play className="w-16 h-16 text-[#10b981] animate-pulse mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">İşlem Onaylanıyor...</h3>
          <p className="text-sm text-[#9BA3B8]">Lütfen cüzdanınızdan işlemi onaylayın.</p>
          <div className="pt-4">
            <Button variant="ghost" className="text-[#E8ECF4]" onClick={() => setStep(1)}>İptal</Button>
          </div>
        </div>
      )}
    </div>
  );
}
