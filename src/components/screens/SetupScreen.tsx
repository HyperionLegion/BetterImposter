import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameStore } from '../../state/useGameStore';
import { getCategories } from '../../lib/gameLogic';
import Button from '../ui/Button';
import Counter from '../ui/Counter';
import CategoryPicker from '../ui/CategoryPicker';

const TIMER_OPTIONS = [60, 90, 120, 180, 300];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function SetupScreen() {
  const {
    playerCount, imposterMin, imposterMax, mode, category, timerDuration,
    setPlayerCount, setImposterMin, setImposterMax, setMode, setCategory, setTimerDuration,
    setPlayerName, startGame, playerNames,
  } = useGameStore();

  const [showHowToPlay, setShowHowToPlay] = useState(false);
  const categories = getCategories(mode);

  return (
    <motion.div
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, y: 20 }}
      variants={stagger}
      className="min-h-dvh flex flex-col px-5 py-8 gap-4 overflow-y-auto pb-12"
    >
      {/* Header */}
      <motion.div variants={fadeUp} className="text-center mb-4 pt-4">
        <div className="inline-flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-cyan animate-[pulse-glow_2s_ease-in-out_infinite]" />
          <span className="text-[11px] uppercase tracking-[0.25em] text-text-dim font-semibold">
            Party Game
          </span>
          <div className="w-2 h-2 rounded-full bg-crimson animate-[pulse-glow_2s_ease-in-out_infinite_0.5s]" />
        </div>
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight">
          Better
          <span className="bg-gradient-to-r from-cyan to-violet bg-clip-text text-transparent"> Imposter</span>
        </h1>
        <p className="text-text-secondary text-sm mt-2">Find the liar among you</p>
      </motion.div>

      {/* Counters */}
      <motion.div variants={fadeUp}>
        <Counter label="Players" value={playerCount} onChange={setPlayerCount} min={3} max={12} />
      </motion.div>
      <motion.div variants={fadeUp}>
        <Counter
          label="Min Imposters"
          value={imposterMin}
          onChange={setImposterMin}
          min={0}
          max={playerCount}
        />
      </motion.div>
      <motion.div variants={fadeUp}>
        <Counter
          label="Max Imposters"
          value={imposterMax}
          onChange={setImposterMax}
          min={0}
          max={playerCount}
        />
      </motion.div>

      {/* Player Names */}
      <motion.div variants={fadeUp} className="bg-card/50 backdrop-blur-sm border border-card-border rounded-2xl p-4">
        <p className="text-[11px] uppercase tracking-[0.2em] text-text-dim font-semibold mb-3">Player Names</p>
        <div className="grid grid-cols-2 gap-2">
          {Array.from({ length: playerCount }, (_, i) => (
            <div key={i} className="relative">
              <input
                type="text"
                value={playerNames[i] || ''}
                onChange={e => setPlayerName(i, e.target.value)}
                placeholder={`Player ${i + 1}`}
                maxLength={16}
                className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-3 py-2.5 text-[13px] text-text placeholder:text-text-dim/50 focus:outline-none focus:border-cyan/40 focus:bg-white/[0.06] transition-all"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-text-dim font-bold">
                {i + 1}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Game Mode */}
      <motion.div variants={fadeUp} className="bg-card/50 backdrop-blur-sm border border-card-border rounded-2xl p-4">
        <p className="text-[11px] uppercase tracking-[0.2em] text-text-dim font-semibold mb-3">Mode</p>
        <div className="grid grid-cols-2 gap-2">
          {(['word', 'question'] as const).map(m => (
            <motion.button
              key={m}
              whileTap={{ scale: 0.97 }}
              onClick={() => setMode(m)}
              className={`py-3 rounded-xl text-[13px] font-semibold transition-all duration-200 cursor-pointer ${
                mode === m
                  ? 'bg-cyan/15 text-cyan border border-cyan/30 shadow-[0_0_12px_rgba(0,240,255,0.1)]'
                  : 'bg-white/[0.03] text-text-secondary border border-transparent hover:bg-white/[0.06]'
              }`}
            >
              {m === 'word' ? 'Words' : 'Questions'}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Category */}
      <motion.div variants={fadeUp} className="bg-card/50 backdrop-blur-sm border border-card-border rounded-2xl p-4">
        <p className="text-[11px] uppercase tracking-[0.2em] text-text-dim font-semibold mb-3">Category</p>
        <CategoryPicker categories={categories} selected={category} onSelect={setCategory} />
      </motion.div>

      {/* Timer — word mode only */}
      {mode === 'word' && (
        <motion.div variants={fadeUp} className="bg-card/50 backdrop-blur-sm border border-card-border rounded-2xl p-4">
          <p className="text-[11px] uppercase tracking-[0.2em] text-text-dim font-semibold mb-3">Discussion Timer</p>
          <div className="flex gap-2 flex-wrap">
            {TIMER_OPTIONS.map(t => (
              <motion.button
                key={t}
                whileTap={{ scale: 0.95 }}
                onClick={() => setTimerDuration(t)}
                className={`px-4 py-2.5 rounded-xl text-[13px] font-semibold transition-all duration-200 min-h-[40px] cursor-pointer ${
                  timerDuration === t
                    ? 'bg-cyan/15 text-cyan border border-cyan/30'
                    : 'bg-white/[0.03] text-text-secondary border border-transparent hover:bg-white/[0.06]'
                }`}
              >
                {t >= 60 ? `${t / 60}m` : `${t}s`}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}

      {/* Start */}
      <motion.div variants={fadeUp} className="mt-2">
        <Button onClick={startGame} size="lg" className="w-full">
          Start Game
        </Button>
      </motion.div>

      <motion.button
        variants={fadeUp}
        onClick={() => setShowHowToPlay(true)}
        className="text-text-dim text-[13px] font-medium hover:text-text-secondary transition-colors cursor-pointer"
      >
        How does this work?
      </motion.button>

      {/* How to Play Modal */}
      <AnimatePresence>
        {showHowToPlay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setShowHowToPlay(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              onClick={e => e.stopPropagation()}
              className="bg-bg-elevated border border-card-border rounded-3xl p-7 max-w-sm w-full"
            >
              <h2 className="font-[family-name:var(--font-display)] text-xl font-bold mb-5 tracking-tight">
                How to Play
              </h2>
              <div className="space-y-4">
                {[
                  { n: '01', text: 'Each player privately views their content on the shared device' },
                  { n: '02', text: <>In <strong className="text-cyan">Word mode</strong>, everyone sees a word — but imposters get a <strong className="text-crimson">hint</strong> instead and must figure out the word</> },
                  { n: '03', text: <>In <strong className="text-cyan">Question mode</strong>, imposters get a <strong className="text-crimson">different question</strong> — everyone types a response</> },
                  { n: '04', text: 'The imposter KNOWS they\'re the imposter and must blend in' },
                  { n: '05', text: 'Discuss and figure out who doesn\'t belong!' },
                ].map(({ n, text }) => (
                  <div key={n} className="flex gap-3">
                    <span className="text-cyan/50 text-xs font-bold font-[family-name:var(--font-display)] mt-0.5 shrink-0">{n}</span>
                    <p className="text-sm text-text-secondary leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
              <Button onClick={() => setShowHowToPlay(false)} variant="ghost" className="w-full mt-6">
                Got it
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
