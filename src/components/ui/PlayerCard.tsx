import { motion } from 'framer-motion';

interface PlayerCardProps {
  name: string;
  isImposter?: boolean;
  showRole?: boolean;
  votes?: number;
  selected?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

const playerColors = [
  'from-cyan to-blue-400',
  'from-violet to-purple-400',
  'from-emerald to-teal-400',
  'from-amber-400 to-orange-400',
  'from-pink-400 to-rose-400',
  'from-sky-400 to-indigo-400',
  'from-lime-400 to-green-400',
  'from-fuchsia-400 to-pink-400',
  'from-yellow-400 to-amber-400',
  'from-teal-400 to-cyan',
  'from-red-400 to-orange-400',
  'from-indigo-400 to-violet',
];

export default function PlayerCard({
  name,
  isImposter = false,
  showRole = false,
  votes,
  selected = false,
  onClick,
  disabled = false,
}: PlayerCardProps) {
  const playerNum = parseInt(name.split(' ')[1] || '1') - 1;
  const gradient = playerColors[playerNum % playerColors.length];

  return (
    <motion.button
      whileTap={onClick && !disabled ? { scale: 0.98 } : undefined}
      layout
      onClick={onClick}
      disabled={disabled || !onClick}
      className={`
        w-full flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-200 min-h-[56px]
        ${selected
          ? 'bg-cyan/[0.08] border border-cyan/40 shadow-[0_0_20px_rgba(0,240,255,0.1)]'
          : 'bg-card/50 border border-card-border hover:border-white/[0.1]'
        }
        ${disabled ? 'opacity-40' : onClick ? 'cursor-pointer' : ''}
      `}
    >
      <div className="flex items-center gap-3">
        <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-sm font-bold text-bg shadow-lg`}>
          {name.split(' ')[1]}
        </div>
        <span className="font-semibold text-[15px]">{name}</span>
        {showRole && isImposter && (
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-[11px] bg-crimson/20 text-crimson px-2.5 py-1 rounded-lg font-bold uppercase tracking-wider border border-crimson/20"
          >
            Imposter
          </motion.span>
        )}
      </div>
      {votes !== undefined && (
        <div className="flex items-center gap-1.5">
          <span className="text-text-secondary text-sm font-medium tabular-nums">
            {votes}
          </span>
          <span className="text-text-dim text-xs">
            vote{votes !== 1 ? 's' : ''}
          </span>
        </div>
      )}
    </motion.button>
  );
}
