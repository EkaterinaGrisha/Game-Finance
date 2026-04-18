import { Star, Settings, User } from 'lucide-react';
import { motion } from 'motion/react';

interface HeaderProps {
  onNavClick: (view: 'selection' | 'game') => void;
  activeView: string;
}

export default function Header({ onNavClick, activeView }: HeaderProps) {
  return (
    <header className="bg-white/80 backdrop-blur-xl fixed top-0 w-full z-50 rounded-b-[3rem] shadow-[0_20px_40px_rgba(0,0,0,0.04)] flex justify-between items-center px-8 py-4">
      <div className="flex items-center gap-4">
        <span className="text-2xl font-black text-primary italic font-headline tracking-tight">Monster Path</span>
      </div>
      
      <nav className="hidden md:flex gap-8 items-center">
        <button 
          onClick={() => onNavClick('game')}
          className={`font-headline pb-1 transition-all duration-300 hover:scale-105 active:scale-95 ${
            activeView === 'game' ? 'text-primary font-bold border-b-4 border-primary' : 'text-on-surface-variant font-medium hover:text-primary'
          }`}
        >
          Play
        </button>
        <button 
          onClick={() => onNavClick('selection')}
          className={`font-headline pb-1 transition-all duration-300 hover:scale-105 active:scale-95 ${
            activeView === 'selection' ? 'text-primary font-bold border-b-4 border-primary' : 'text-on-surface-variant font-medium hover:text-primary'
          }`}
        >
          Monsters
        </button>
        <button className="text-on-surface-variant font-headline font-medium hover:scale-105 transition-transform duration-300 hover:text-primary active:scale-95">Shop</button>
        <button className="text-on-surface-variant font-headline font-medium hover:scale-105 transition-transform duration-300 hover:text-primary active:scale-95">Awards</button>
      </nav>

      <div className="flex items-center gap-4">
        <button className="p-2 hover:scale-110 transition-transform duration-300 active:scale-95 text-on-surface-variant hover:bg-surface-container rounded-full">
          <Star className="w-6 h-6" />
        </button>
        <button className="p-2 hover:scale-110 transition-transform duration-300 active:scale-95 text-on-surface-variant hover:bg-surface-container rounded-full">
          <Settings className="w-6 h-6" />
        </button>
        <div className="w-10 h-10 rounded-full border-2 border-primary shadow-sm overflow-hidden bg-surface-container">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTFgDjlQ4JJMjyzJoZqzMkwSW3qVFM0JCBXzFyL8skHMW_ARH0XRUKdQUeNWJnxeRaheR0FnR34GBcsmlg_td0Hpuc1dy2WxCXJRENGO-Gs48iWGct7gdlQYnHo2e2D97T-qbmqkmWkcFHvA4Fz4fOdmj1ReI-IOtsllUUIu4Lhfps-8oLxkPpGejzsoTm_WxdAQ2T0LOsxbIZwm29543gHeihGwpUZnWK_lDfRsZoPpRI6CiRQUqq9jLCExpgBKtIdwDt72hfvBA" 
            alt="Current Player"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}
