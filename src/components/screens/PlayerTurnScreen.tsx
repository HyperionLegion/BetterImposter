import { motion } from 'framer-motion';
import { useGameStore } from '../../state/useGameStore';
import Button from '../ui/Button';

export default function PlayerTurnScreen() {
  const { currentPlayerIndex, players, mode, showReveal } = useGameStore();
  const player = players[currentPlayerIndex];

  return (
    <motion.div
      key={`turn-${currentPlayerIndex}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-dvh flex flex-col items-center justify-center px-6 gap-8"
    >
      {/* Progress indicator */}
      <div className="flex gap-1.5">
        {players.map((_, i) => (
          <motion.div
            key={i}
            initial={i === currentPlayerIndex ? { scale: 0 } : {}}
            animate={i === currentPlayerIndex ? { scale: 1 } : {}}
            className={`h-1 rounded-full transition-all duration-300 ${
              i < currentPlayerIndex
                ? 'w-6 bg-cyan/40'
                : i === currentPlayerIndex
                  ? 'w-8 bg-cyan'
                  : 'w-4 bg-white/[0.08]'
            }`}
          />
        ))}
      </div>

      {/* Avatar */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.1 }}
        className="relative"
      >
        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-cyan to-violet flex items-center justify-center text-4xl font-extrabold text-bg font-[family-name:var(--font-display)] shadow-[0_0_40px_rgba(0,240,255,0.2)]">
          {currentPlayerIndex + 1}
        </div>
        <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-cyan/20 to-violet/20 blur-xl -z-10" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center"
      >
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight mb-2">
          {player.name}
        </h2>
        <p className="text-text-secondary text-sm">
          Make sure only you can see the screen
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="w-full max-w-xs"
      >
        <Button onClick={showReveal} size="lg" className="w-full">
          Reveal My {mode === 'word' ? 'Role' : 'Question'}
        </Button>
      </motion.div>
    </motion.div>
  );
}
