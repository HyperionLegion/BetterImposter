import { useState } from 'react';
import { motion } from 'framer-motion';
import { useGameStore } from '../../state/useGameStore';
import { getCategories } from '../../lib/gameLogic';
import Button from '../ui/Button';
import Counter from '../ui/Counter';
import CategoryPicker from '../ui/CategoryPicker';

const TIMER_OPTIONS = [60, 90, 120, 180, 300];

export default function SetupScreen() {
  const {
    playerCount, impostorCount, mode, category, timerDuration,
    setPlayerCount, setImpostorCount, setMode, setCategory, setTimerDuration,
    startGame,
  } = useGameStore();

  const [showHowToPlay, setShowHowToPlay] = useState(false);
  const categories = getCategories(mode);

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 40 }}
      className="min-h-dvh flex flex-col px-5 py-8 gap-5 overflow-y-auto"
    >
      <div className="text-center mb-2">
        <h1 className="text-3xl font-bold">Better Impostor</h1>
        <p className="text-text-muted text-sm">The party game of deception</p>
      </div>

      <Counter label="Players" value={playerCount} onChange={setPlayerCount} min={3} max={12} />
      <Counter
        label="Impostors"
        value={impostorCount}
        onChange={setImpostorCount}
        min={1}
        max={Math.floor(playerCount / 3)}
      />

      {/* Game Mode */}
      <div className="bg-card rounded-xl p-4">
        <p className="text-sm text-text-muted mb-3">Game Mode</p>
        <div className="grid grid-cols-2 gap-2">
          {(['word', 'question'] as const).map(m => (
            <motion.button
              key={m}
              whileTap={{ scale: 0.95 }}
              onClick={() => setMode(m)}
              className={`py-2.5 rounded-xl text-sm font-medium transition-colors min-h-[44px] ${
                mode === m ? 'bg-accent text-white' : 'bg-bg text-text-muted'
              }`}
            >
              {m === 'word' ? '🔤 Words' : '❓ Questions'}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Category */}
      <div className="bg-card rounded-xl p-4">
        <p className="text-sm text-text-muted mb-3">Category</p>
        <CategoryPicker categories={categories} selected={category} onSelect={setCategory} />
      </div>

      {/* Timer */}
      <div className="bg-card rounded-xl p-4">
        <p className="text-sm text-text-muted mb-3">Discussion Timer</p>
        <div className="flex gap-2 flex-wrap">
          {TIMER_OPTIONS.map(t => (
            <motion.button
              key={t}
              whileTap={{ scale: 0.95 }}
              onClick={() => setTimerDuration(t)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors min-h-[40px] ${
                timerDuration === t ? 'bg-accent text-white' : 'bg-bg text-text-muted'
              }`}
            >
              {t >= 60 ? `${t / 60}m` : `${t}s`}
            </motion.button>
          ))}
        </div>
      </div>

      <Button onClick={startGame} size="lg" className="w-full mt-2">
        Start Game
      </Button>

      <button
        onClick={() => setShowHowToPlay(true)}
        className="text-text-muted text-sm underline"
      >
        How to Play
      </button>

      {/* How to Play Modal */}
      {showHowToPlay && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-6"
          onClick={() => setShowHowToPlay(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={e => e.stopPropagation()}
            className="bg-card rounded-2xl p-6 max-w-sm w-full space-y-4"
          >
            <h2 className="text-xl font-bold">How to Play</h2>
            <ol className="text-sm text-text-muted space-y-2 list-decimal list-inside">
              <li>Each player privately views a word or question on the shared device</li>
              <li>Most players see the <strong className="text-text">same</strong> word — but the impostor(s) see a <strong className="text-accent">different</strong> one</li>
              <li>The impostor does NOT know they are the impostor</li>
              <li>Everyone discusses and gives clues to figure out who has the different word</li>
              <li>Vote on who you think the impostor is</li>
              <li>If the group votes correctly, they win!</li>
            </ol>
            <Button onClick={() => setShowHowToPlay(false)} variant="secondary" className="w-full">
              Got it!
            </Button>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}
