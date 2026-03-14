import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameStore } from '../../state/useGameStore';
import Button from '../ui/Button';
import PlayerCard from '../ui/PlayerCard';

export default function VotingScreen() {
  const { players, castVote } = useGameStore();
  const [currentVoter, setCurrentVoter] = useState(0);
  const [selectedTarget, setSelectedTarget] = useState<number | null>(null);
  const [showingVoter, setShowingVoter] = useState(true);

  const voter = players[currentVoter];

  const confirmVote = () => {
    if (selectedTarget === null) return;
    castVote(voter.id, selectedTarget);
    setSelectedTarget(null);
    if (currentVoter + 1 < players.length) {
      setCurrentVoter(currentVoter + 1);
      setShowingVoter(true);
    }
  };

  if (showingVoter) {
    return (
      <motion.div
        key={`voter-${currentVoter}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-dvh flex flex-col items-center justify-center px-6 gap-8"
      >
        {/* Progress dots */}
        <div className="flex gap-1.5">
          {players.map((_, i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all duration-300 ${
                i < currentVoter
                  ? 'w-6 bg-crimson/40'
                  : i === currentVoter
                    ? 'w-8 bg-crimson'
                    : 'w-4 bg-white/[0.08]'
              }`}
            />
          ))}
        </div>

        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="relative"
        >
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-crimson to-orange-500 flex items-center justify-center text-4xl font-extrabold text-white font-[family-name:var(--font-display)] shadow-[0_0_40px_rgba(255,45,85,0.2)]">
            {currentVoter + 1}
          </div>
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-crimson/20 to-orange-500/20 blur-xl -z-10" />
        </motion.div>

        <div className="text-center">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight mb-2">
            {voter.name}'s Vote
          </h2>
          <p className="text-text-secondary text-sm">
            Make sure only you can see the screen
          </p>
        </div>

        <Button onClick={() => setShowingVoter(false)} variant="danger" size="lg" className="w-full max-w-xs">
          Ready to Vote
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div
      key={`vote-${currentVoter}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-dvh flex flex-col px-5 py-8 gap-3"
    >
      <div className="text-center mb-2">
        <p className="text-[11px] uppercase tracking-[0.2em] text-text-dim font-semibold mb-2">{voter.name}</p>
        <h2 className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight">
          Who is the imposter?
        </h2>
      </div>

      <AnimatePresence>
        <div className="flex flex-col gap-2">
          {players.map((p, i) => (
            p.id === voter.id ? null : (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <PlayerCard
                  name={p.name}
                  selected={selectedTarget === p.id}
                  onClick={() => setSelectedTarget(p.id)}
                />
              </motion.div>
            )
          ))}
        </div>
      </AnimatePresence>

      <div className="mt-auto pt-4">
        <Button
          onClick={confirmVote}
          disabled={selectedTarget === null}
          variant="danger"
          size="lg"
          className="w-full"
        >
          Lock In Vote
        </Button>
      </div>
    </motion.div>
  );
}
