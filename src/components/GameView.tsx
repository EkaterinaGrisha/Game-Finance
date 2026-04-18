import { Cloud, Dices, Flashlight, IceCream, Star, Trophy } from 'lucide-react';
import { motion } from 'motion/react';
import { MONSTERS } from '../types';

interface GameViewProps {
  currentMonsterId: string;
}

export default function GameView({ currentMonsterId }: GameViewProps) {
  const monster = MONSTERS.find(m => m.id === currentMonsterId) || MONSTERS[0];

  const steps = Array.from({ length: 40 }, (_, i) => i + 1);

  const getStepColor = (i: number) => {
    if (i === 1) return 'bg-primary text-white';
    if (i === 40) return 'bg-gradient-to-br from-tertiary to-tertiary-container text-white';
    const colors = ['bg-secondary-container', 'bg-tertiary-container', 'bg-primary-container'];
    return `${colors[i % 3]} text-on-surface`;
  };

  const getRandomRotation = (i: number) => {
    const rotations = [-3, 0, 3, -2, 2];
    return rotations[i % rotations.length];
  };

  const getMarginTop = (i: number) => {
    const margins = [0, 4, -8, 12, -4, 2, 8, -2];
    return margins[i % margins.length];
  };

  return (
    <div className="flex-1 relative overflow-hidden board-canvas bg-surface-bright p-8 h-full">
      {/* Background Decor */}
      <div className="absolute top-10 left-20 opacity-40 select-none">
        <Cloud size={160} className="text-primary-container fill-current" />
      </div>
      <div className="absolute bottom-20 right-40 opacity-30 select-none">
        <Cloud size={120} className="text-tertiary-container fill-current" />
      </div>

      {/* Path */}
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="grid grid-cols-8 grid-rows-5 gap-6 max-w-5xl">
          {steps.map((num, i) => (
            <div 
              key={num} 
              className={`relative w-16 h-16 rounded-full flex items-center justify-center font-bold shadow-xl border-4 border-white curved-path-step ${getStepColor(num)}`}
              style={{ 
                transform: `rotate(${getRandomRotation(i)}deg)`,
                marginTop: `${getMarginTop(i)}px` 
              }}
            >
              {num}
              {num === 1 && (
                <div className="absolute -top-12 -left-4">
                  <motion.img 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    src={monster.image} 
                    className="w-14 h-14 drop-shadow-xl"
                  />
                </div>
              )}
              {num === 40 && (
                <Trophy className="absolute -top-6 -right-6 text-tertiary w-10 h-10 drop-shadow-lg" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Landmarks */}
      <div className="absolute bottom-10 left-10 flex flex-col items-center">
        <div className="w-24 h-24 rounded-full bg-primary-container border-8 border-white shadow-lg"></div>
        <div className="w-4 h-16 bg-surface-container-highest rounded-b-full"></div>
        <p className="font-headline font-bold text-primary mt-2">Lollipop Lane</p>
      </div>

      <div className="absolute top-24 right-10 flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-secondary-container border-8 border-white shadow-lg flex items-center justify-center">
          <IceCream className="text-secondary w-10 h-10" />
        </div>
        <div className="w-4 h-12 bg-surface-container-highest rounded-b-full"></div>
        <p className="font-headline font-bold text-secondary mt-2">Sundae Summit</p>
      </div>

      {/* Stats Card */}
      <div className="absolute bottom-8 right-8 flex flex-col gap-4">
        <div className="bg-white/90 backdrop-blur-md p-6 rounded-[2rem] shadow-2xl flex flex-col gap-4 border border-white/50 w-72">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Progress</span>
            <span className="text-xs font-bold text-primary">1 / 40</span>
          </div>
          <div className="w-full bg-surface-container rounded-full h-3">
            <div className="bg-primary h-full rounded-full w-[2.5%]"></div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="bg-tertiary-container/10 p-3 rounded-2xl flex items-center gap-2 flex-1">
              <Star className="w-5 h-5 text-tertiary fill-current" />
              <span className="font-bold text-on-tertiary-container">3,450</span>
            </div>
            <div className="bg-secondary-container/10 p-3 rounded-2xl flex items-center gap-2 flex-1">
              <Flashlight className="w-5 h-5 text-secondary fill-current" />
              <span className="font-bold text-on-secondary-container">12</span>
            </div>
          </div>
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-primary to-primary-container text-white font-bold py-4 rounded-full shadow-lg flex items-center justify-center gap-2"
          >
            <Dices size={20} />
            Roll Dice
          </motion.button>
        </div>
      </div>
    </div>
  );
}
