import { motion } from 'framer-motion';
import { useGameStore } from '../../state/useGameStore';
import Button from '../ui/Button';
import PlayerCard from '../ui/PlayerCard';

export default function ResultsScreen() {
  const { players, winner, currentPair, mode, playAgain, resetToSetup } = useGameStore();
  const sorted = [...players].sort((a, b) => b.votesReceived - a.votesReceived);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-dvh flex flex-col px-6 py-8 gap-5 overflow-y-auto"
    >
      {/* Winner Banner */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className={`text-center rounded-2xl py-6 px-4 ${
          winner === 'crew' ? 'bg-green-600/20' : 'bg-accent/20'
        }`}
      >
        <p className="text-4xl mb-2">{winner === 'crew' ? '🎉' : '🕵️'}</p>
        <h2 className="text-2xl font-bold">
          {winner === 'crew' ? 'Crew Wins!' : 'Impostors Win!'}
        </h2>
        <p className="text-text-muted text-sm mt-1">
          {winner === 'crew'
            ? 'The group found the impostor!'
            : 'The impostor got away with it!'}
        </p>
      </motion.div>

      {/* Words Reveal */}
      {currentPair && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-card rounded-2xl p-5"
        >
          <p className="text-xs text-text-muted uppercase tracking-wider mb-3">
            The {mode === 'word' ? 'Words' : 'Questions'}
          </p>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-bg rounded-xl p-3 text-center">
              <p className="text-xs text-text-muted mb-1">Crew</p>
              <p className="font-semibold text-sm">{currentPair.normal}</p>
            </div>
            <div className="bg-bg rounded-xl p-3 text-center border border-accent/30">
              <p className="text-xs text-accent mb-1">Impostor</p>
              <p className="font-semibold text-sm">{currentPair.impostor}</p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Vote Breakdown */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <p className="text-xs text-text-muted uppercase tracking-wider mb-2">Vote Results</p>
        <div className="flex flex-col gap-2">
          {sorted.map(p => (
            <PlayerCard
              key={p.id}
              name={p.name}
              isImpostor={p.isImpostor}
              showRole
              votes={p.votesReceived}
            />
          ))}
        </div>
      </motion.div>

      {/* Actions */}
      <div className="flex gap-3 mt-auto pt-4">
        <Button onClick={resetToSetup} variant="ghost" className="flex-1">
          Settings
        </Button>
        <Button onClick={playAgain} className="flex-1">
          Play Again
        </Button>
      </div>
    </motion.div>
  );
}
