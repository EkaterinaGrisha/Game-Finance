import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SelectionView from './components/SelectionView';
import GameView from './components/GameView';
import { View } from './types';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('selection');
  const [selectedMonsterId, setSelectedMonsterId] = useState<string | null>(null);
  const [activeMonsterId, setActiveMonsterId] = useState<string | null>(null);

  const handleConfirm = (id: string) => {
    setActiveMonsterId(id);
    setCurrentView('game');
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header 
        activeView={currentView} 
        onNavClick={setCurrentView} 
      />
      
      <div className="flex flex-1 pt-24 overflow-hidden">
        <Sidebar 
          activeView={currentView} 
          onNavClick={setCurrentView} 
        />
        
        <main className="flex-1 relative overflow-auto">
          <AnimatePresence mode="wait">
            {currentView === 'selection' ? (
              <motion.div
                key="selection"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <SelectionView 
                  selectedId={selectedMonsterId}
                  onSelect={setSelectedMonsterId}
                  onConfirm={handleConfirm}
                />
              </motion.div>
            ) : (
              <motion.div
                key="game"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="h-full"
              >
                <GameView 
                  currentMonsterId={activeMonsterId || 'sparky'} 
                />
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>

      {/* Mobile Navigation */}
      <footer className="md:hidden fixed bottom-0 w-full bg-white/90 backdrop-blur-xl flex justify-around py-4 px-2 rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.04)] z-50">
        <button 
          onClick={() => setCurrentView('game')}
          className={`flex flex-col items-center gap-1 ${currentView === 'game' ? 'text-primary' : 'text-on-surface-variant'}`}
        >
          <span className="text-[10px] font-bold">Play</span>
        </button>
        <button 
          onClick={() => setCurrentView('selection')}
          className={`flex flex-col items-center gap-1 ${currentView === 'selection' ? 'text-primary' : 'text-on-surface-variant'}`}
        >
          <span className="text-[10px] font-bold">Monsters</span>
        </button>
      </footer>
    </div>
  );
}

