import { motion } from 'framer-motion';

interface PlayerCardProps {
  name: string;
  isImpostor?: boolean;
  showRole?: boolean;
  votes?: number;
  selected?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

export default function PlayerCard({
  name,
  isImpostor = false,
  showRole = false,
  votes,
  selected = false,
  onClick,
  disabled = false,
}: PlayerCardProps) {
  return (
    <motion.button
      whileTap={onClick && !disabled ? { scale: 0.95 } : undefined}
      onClick={onClick}
      disabled={disabled || !onClick}
      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-colors min-h-[52px] ${
        selected
          ? 'bg-accent/20 border-2 border-accent'
          : 'bg-card border-2 border-transparent'
      } ${disabled ? 'opacity-40' : onClick ? 'active:bg-card/80' : ''}`}
    >
      <div className="flex items-center gap-3">
        <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold ${
          showRole && isImpostor ? 'bg-accent text-white' : 'bg-purple text-white'
        }`}>
          {name.split(' ')[1]}
        </div>
        <span className="font-medium">{name}</span>
        {showRole && isImpostor && (
          <span className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-full font-semibold">
            IMPOSTOR
          </span>
        )}
      </div>
      {votes !== undefined && (
        <span className="text-text-muted text-sm font-medium">
          {votes} vote{votes !== 1 ? 's' : ''}
        </span>
      )}
    </motion.button>
  );
}
