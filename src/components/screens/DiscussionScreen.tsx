import { useGameStore } from '../../state/useGameStore';
import { useTimer } from '../../hooks/useTimer';
import Timer from '../ui/Timer';
import Button from '../ui/Button';
import { motion } from 'framer-motion';

export default function DiscussionScreen() {
  const { timerDuration, currentPair, mode, startVoting } = useGameStore();
  const { secondsLeft, progress, isRunning, start, pause } = useTimer(timerDuration, startVoting);

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 40 }}
      className="min-h-dvh flex flex-col items-center justify-center px-6 gap-8"
    >
      <h2 className="text-2xl font-bold">Discussion Time</h2>

      <div className="bg-card rounded-2xl px-6 py-4 text-center">
        <p className="text-xs text-text-muted uppercase tracking-wider mb-1">Category</p>
        <p className="text-lg font-semibold">{currentPair?.category}</p>
      </div>

      <Timer secondsLeft={secondsLeft} progress={progress} />

      <p className="text-text-muted text-sm text-center max-w-xs">
        {mode === 'word'
          ? 'Give clues about your word without saying it directly!'
          : 'Answer the question — but be careful, someone has a different one!'}
      </p>

      <div className="flex gap-3 w-full max-w-xs">
        {!isRunning ? (
          <Button onClick={start} variant="secondary" className="flex-1">
            {secondsLeft === timerDuration ? 'Start Timer' : 'Resume'}
          </Button>
        ) : (
          <Button onClick={pause} variant="ghost" className="flex-1">
            Pause
          </Button>
        )}
        <Button onClick={startVoting} className="flex-1">
          Vote Now
        </Button>
      </div>
    </motion.div>
  );
}
