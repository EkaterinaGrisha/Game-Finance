import { ArrowRight, Cloud, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { MONSTERS } from '../types';
import MonsterCard from './MonsterCard';

interface SelectionViewProps {
  onConfirm: (id: string) => void;
  selectedId: string | null;
  onSelect: (id: string) => void;
}

export default function SelectionView({ onConfirm, selectedId, onSelect }: SelectionViewProps) {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="fixed top-1/4 -left-10 opacity-10 pointer-events-none select-none">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}>
          <Sparkles size={240} className="text-primary" />
        </motion.div>
      </div>
      <div className="fixed bottom-1/4 -right-20 opacity-10 pointer-events-none select-none">
        <motion.div animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}>
          <Cloud size={320} className="text-secondary" />
        </motion.div>
      </div>

      <header className="text-center mb-16 relative">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-20 pointer-events-none">
          <Cloud size={120} className="text-primary-container fill-current" />
        </div>
        <h1 className="font-headline text-5xl md:text-6xl font-extrabold text-on-surface tracking-tight mb-4">
          Choose Your <span className="text-primary italic">Bestie!</span>
        </h1>
        <p className="text-on-surface-variant text-lg max-w-2xl mx-auto leading-relaxed">
          Pick a companion to start your journey through Lollipop Lane. Each monster has a unique personality and special trail effects!
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 px-4">
        {MONSTERS.map((monster) => (
          <MonsterCard 
            key={monster.id} 
            monster={monster} 
            onSelect={onSelect}
            isSelected={selectedId === monster.id}
          />
        ))}
      </div>

      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white/70 backdrop-blur-2xl rounded-[2.5rem] p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white/50"
      >
        <div className="flex items-center gap-6">
          <div className="flex flex-col">
            <span className="text-on-surface-variant text-sm font-semibold uppercase tracking-wider">Starting Level</span>
            <span className="text-3xl font-black text-secondary font-headline">Level 1</span>
          </div>
          <div className="w-px h-12 bg-surface-container-highest"></div>
          <div className="flex flex-col">
            <span className="text-on-surface-variant text-sm font-semibold uppercase tracking-wider">Welcome Bonus</span>
            <span className="text-3xl font-black text-tertiary font-headline">500 Coins</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="px-8 py-4 rounded-full border-2 border-primary text-primary font-bold hover:bg-primary/5 transition-colors active:scale-95">
            View Abilities
          </button>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-tertiary rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <button 
              onClick={() => selectedId && onConfirm(selectedId)}
              disabled={!selectedId}
              className={`relative px-10 py-4 bg-on-surface text-white rounded-full font-bold flex items-center gap-2 transition-all active:scale-95 ${
                !selectedId && 'opacity-50 grayscale cursor-not-allowed'
              }`}
            >
              Confirm Selection
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
