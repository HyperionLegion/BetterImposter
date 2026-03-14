import { useGameStore } from '../../state/useGameStore';
import { useTimer } from '../../hooks/useTimer';
import Timer from '../ui/Timer';
import Button from '../ui/Button';
import { motion } from 'framer-motion';

export default function DiscussionScreen() {
  const { timerDuration, currentCategory, goToResults } = useGameStore();
  const { secondsLeft, progress, isRunning, start, pause } = useTimer(timerDuration, goToResults);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-dvh flex flex-col items-center justify-center px-6 gap-7"
    >
      <motion.h2
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight"
      >
        Discussion
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="bg-card/50 backdrop-blur-sm border border-card-border rounded-2xl px-6 py-3.5 text-center"
      >
        <p className="text-[10px] uppercase tracking-[0.25em] text-text-dim font-semibold mb-1">Category</p>
        <p className="font-[family-name:var(--font-display)] text-lg font-bold text-cyan">
          {currentCategory}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Timer secondsLeft={secondsLeft} progress={progress} />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-text-secondary text-sm text-center max-w-[280px] leading-relaxed"
      >
        Give clues about your word without saying it directly. Find who has a different one!
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex gap-3 w-full max-w-xs"
      >
        {!isRunning ? (
          <Button onClick={start} variant="secondary" className="flex-1">
            {secondsLeft === timerDuration ? 'Start Timer' : 'Resume'}
          </Button>
        ) : (
          <Button onClick={pause} variant="ghost" className="flex-1">
            Pause
          </Button>
        )}
        <Button onClick={goToResults} variant="danger" className="flex-1">
          Reveal
        </Button>
      </motion.div>
    </motion.div>
  );
}
