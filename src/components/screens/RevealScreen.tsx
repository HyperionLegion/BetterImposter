import { motion } from 'framer-motion';
import { useGameStore } from '../../state/useGameStore';
import Button from '../ui/Button';

export default function RevealScreen() {
  const { currentPlayerIndex, players, mode, nextPlayer } = useGameStore();
  const player = players[currentPlayerIndex];

  return (
    <motion.div
      key={`reveal-${currentPlayerIndex}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-dvh flex flex-col items-center justify-center px-6 gap-8"
    >
      <p className="text-text-muted text-sm">{player.name} — memorize this!</p>

      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="bg-card rounded-2xl px-8 py-10 w-full max-w-sm text-center"
      >
        <p className="text-xs text-text-muted mb-3 uppercase tracking-wider">
          Your {mode === 'word' ? 'Word' : 'Question'}
        </p>
        <p className="text-2xl font-bold leading-snug">{player.content}</p>
      </motion.div>

      <Button onClick={nextPlayer} size="lg" className="w-full max-w-xs">
        Got it — Pass the Device
      </Button>
    </motion.div>
  );
}
