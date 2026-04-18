import { Gamepad2, PawPrint, ShoppingBasket, Trophy } from 'lucide-react';
import { motion } from 'motion/react';

interface SidebarProps {
  onNavClick: (view: 'selection' | 'game') => void;
  activeView: string;
}

export default function Sidebar({ onNavClick, activeView }: SidebarProps) {
  const NavItem = ({ icon: Icon, label, view }: { icon: any, label: string, view?: 'selection' | 'game' }) => {
    const isActive = view === activeView;
    return (
      <button
        onClick={() => view && onNavClick(view)}
        className={`flex items-center gap-4 w-full px-6 py-3 font-semibold transition-all rounded-full hover:scale-105 active:scale-95 ${
          isActive 
            ? 'bg-primary-container/20 text-primary' 
            : 'text-on-surface-variant hover:bg-surface-container'
        }`}
      >
        <Icon className="w-6 h-6" />
        <span>{label}</span>
      </button>
    );
  };

  return (
    <aside className="hidden lg:flex bg-surface-container-lowest rounded-r-[3rem] h-full flex-col gap-4 p-6 w-[280px] shadow-2xl z-40">
      <div className="flex items-center gap-3 mb-6 p-2">
        <div className="w-12 h-12 rounded-xl bg-secondary-container p-1 overflow-hidden">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqwLITvArV020-DaKdoDNuez4GKiDRfunHO5nn2o1e6Sk2B4dG0TA_NwlomZZ88QTRF29meleF-UfR9Krbhl6lexV_fWugia_RDmu4HPoF452LqXLEITTxOvK2Kg9neOPFakakAVrB3C7Z0OyBmEaUbXZMjyt8EvGm3yqnEfta1cClOJbseVP5NxtcRplaXTsAK6N4iMi127XWMYqPWZnOszyov_pQX9G2eP0FukTvTR9z-rHEPh5cftgnKJLO1YIKAzXLNFvY9iM" 
            alt="Level 12 Explorer"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div>
          <p className="text-sm font-bold text-on-surface">Level 12 Explorer</p>
          <p className="text-xs text-secondary font-bold">3,450 Star Coins</p>
        </div>
      </div>

      <nav className="flex flex-col gap-2">
        <NavItem icon={Gamepad2} label="Play" view="game" />
        <NavItem icon={PawPrint} label="Monsters" view="selection" />
        <NavItem icon={ShoppingBasket} label="Shop" />
        <NavItem icon={Trophy} label="Awards" />
      </nav>

      <div className="mt-auto">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold py-4 rounded-full shadow-lg"
        >
          Roll Dice!
        </motion.button>
      </div>
    </aside>
  );
}
