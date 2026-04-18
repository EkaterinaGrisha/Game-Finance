import { Bolt, Droplets, Heart, Leaf } from 'lucide-react';
import { motion } from 'motion/react';
import { Monster } from '../types';

interface MonsterCardProps {
  monster: Monster;
  onSelect: (id: string) => void;
  isSelected?: boolean;
  key?: string | number;
}

const IconMap = {
  bolt: Bolt,
  water_drop: Droplets,
  favorite: Heart,
  eco: Leaf,
};

export default function MonsterCard({ monster, onSelect, isSelected }: MonsterCardProps) {
  const TagIcon = IconMap[monster.tagIcon];

  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className={`group relative bg-surface-container-lowest rounded-[2rem] p-6 transition-all duration-500 border-4 border-transparent ${
        isSelected ? 'border-primary shadow-2xl' : 'hover:shadow-[0_30px_60px_rgba(168,39,90,0.12)] border-white/50'
      }`}
    >
      <div className="aspect-square rounded-[1.5rem] bg-surface-container-low mb-6 overflow-hidden relative">
        <img 
          src={monster.image} 
          alt={monster.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur shadow-sm rounded-full px-3 py-1 flex items-center gap-1">
          <TagIcon className={`w-4 h-4 fill-current`} style={{ color: monster.primaryColor }} />
          <span className="text-xs font-bold text-on-surface uppercase tracking-wider">{monster.tag}</span>
        </div>
      </div>
      
      <div className="space-y-2">
        <h3 className="font-headline text-2xl font-bold text-on-surface">{monster.name}</h3>
        <p className="text-on-surface-variant text-sm leading-relaxed">{monster.description}</p>
      </div>
      
      <div className="mt-6">
        <button 
          onClick={() => onSelect(monster.id)}
          className={`w-full font-bold py-4 rounded-full transition-all active:scale-95 shadow-lg ${
            isSelected 
              ? 'bg-primary text-white shadow-primary/20' 
              : 'bg-surface-container-high text-on-surface-variant hover:bg-primary hover:text-white'
          }`}
        >
          {isSelected ? `Selected ${monster.name}` : `Select ${monster.name}`}
        </button>
      </div>
    </motion.div>
  );
}
