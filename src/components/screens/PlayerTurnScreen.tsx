import { motion } from 'framer-motion';
import { useGameStore } from '../../state/useGameStore';
import Button from '../ui/Button';

export default function PlayerTurnScreen() {
  const { currentPlayerIndex, players, showReveal } = useGameStore();
  const player = players[currentPlayerIndex];

  return (
    <motion.div
      key={`turn-${currentPlayerIndex}`}
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 40 }}
      className="min-h-dvh flex flex-col items-center justify-center px-6 gap-8"
    >
      <div className="w-20 h-20 rounded-full bg-purple flex items-center justify-center text-3xl font-bold">
        {currentPlayerIndex + 1}
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">{player.name}</h2>
        <p className="text-text-muted">Tap below when only you can see the screen</p>
      </div>

      <Button onClick={showReveal} size="lg" className="w-full max-w-xs">
        Show My {useGameStore.getState().mode === 'word' ? 'Word' : 'Question'}
      </Button>

      <p className="text-text-muted text-xs">
        Player {currentPlayerIndex + 1} of {players.length}
      </p>
    </motion.div>
  );
}
