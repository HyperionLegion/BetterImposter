import { useState } from 'react';
import { motion } from 'framer-motion';
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
    // If all votes in, store auto-advances to results
  };

  if (showingVoter) {
    return (
      <motion.div
        key={`voter-${currentVoter}`}
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 40 }}
        className="min-h-dvh flex flex-col items-center justify-center px-6 gap-8"
      >
        <div className="w-20 h-20 rounded-full bg-purple flex items-center justify-center text-3xl font-bold">
          {currentVoter + 1}
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">{voter.name}'s Vote</h2>
          <p className="text-text-muted">Tap below when only you can see the screen</p>
        </div>
        <Button onClick={() => setShowingVoter(false)} size="lg" className="w-full max-w-xs">
          Ready to Vote
        </Button>
        <p className="text-text-muted text-xs">
          Voter {currentVoter + 1} of {players.length}
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      key={`vote-${currentVoter}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-dvh flex flex-col px-6 py-8 gap-4"
    >
      <div className="text-center mb-2">
        <h2 className="text-xl font-bold">{voter.name}, who is the impostor?</h2>
      </div>

      <div className="flex flex-col gap-2">
        {players.map(p => (
          p.id === voter.id ? null : (
            <PlayerCard
              key={p.id}
              name={p.name}
              selected={selectedTarget === p.id}
              onClick={() => setSelectedTarget(p.id)}
            />
          )
        ))}
      </div>

      <div className="mt-auto pt-4">
        <Button
          onClick={confirmVote}
          disabled={selectedTarget === null}
          size="lg"
          className="w-full"
        >
          Confirm Vote
        </Button>
      </div>
    </motion.div>
  );
}
