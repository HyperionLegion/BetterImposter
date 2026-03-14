import { motion } from 'framer-motion';
import { useGameStore } from '../../state/useGameStore';
import Button from '../ui/Button';

const playerColors = [
  'from-cyan to-blue-400',
  'from-violet to-purple-400',
  'from-emerald to-teal-400',
  'from-amber-400 to-orange-400',
  'from-pink-400 to-rose-400',
  'from-sky-400 to-indigo-400',
  'from-lime-400 to-green-400',
  'from-fuchsia-400 to-pink-400',
  'from-yellow-400 to-amber-400',
  'from-teal-400 to-cyan',
  'from-red-400 to-orange-400',
  'from-indigo-400 to-violet',
];

export default function ResultsScreen() {
  const {
    players, mode, currentWord, currentHint, currentCategory,
    currentNormalQuestion, currentImposterQuestion, playAgain, resetToSetup,
  } = useGameStore();

  const imposters = players.filter(p => p.isImposter);
  const isWordMode = mode === 'word';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-dvh flex flex-col px-5 py-8 gap-5 overflow-y-auto pb-12"
    >
      {/* Header */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className="text-center py-6"
      >
        <p className="text-[11px] uppercase tracking-[0.25em] text-text-dim font-semibold mb-3">
          The Reveal
        </p>
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight">
          {isWordMode ? (
            <>
              The word was{' '}
              <span className="bg-gradient-to-r from-cyan to-violet bg-clip-text text-transparent">
                {currentWord}
              </span>
            </>
          ) : (
            <span className="text-cyan">Responses Are In</span>
          )}
        </h2>
      </motion.div>

      {/* Imposters reveal */}
      <motion.div
        initial={{ y: 16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-crimson/[0.08] border border-crimson/20 rounded-2xl p-5"
      >
        <p className="text-[10px] uppercase tracking-[0.25em] text-crimson font-bold mb-3">
          {imposters.length === 1 ? 'The Imposter' : 'The Imposters'}
        </p>
        <div className="flex flex-wrap gap-2">
          {imposters.map(p => (
            <div
              key={p.id}
              className="flex items-center gap-2 bg-crimson/10 border border-crimson/20 rounded-xl px-3 py-2"
            >
              <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${playerColors[p.id % playerColors.length]} flex items-center justify-center text-xs font-bold text-bg`}>
                {p.id + 1}
              </div>
              <span className="font-semibold text-sm">{p.name}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Word mode: show word + hint */}
      {isWordMode && (
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="bg-card/50 backdrop-blur-sm border border-card-border rounded-2xl p-5"
        >
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4 text-center">
              <div className="flex items-center justify-center gap-1.5 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan" />
                <p className="text-[10px] uppercase tracking-wider text-cyan font-semibold">Word</p>
              </div>
              <p className="font-semibold text-sm">{currentWord}</p>
            </div>
            <div className="bg-crimson/[0.06] border border-crimson/20 rounded-xl p-4 text-center">
              <div className="flex items-center justify-center gap-1.5 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-crimson" />
                <p className="text-[10px] uppercase tracking-wider text-crimson font-semibold">Hint</p>
              </div>
              <p className="font-semibold text-sm">{currentHint}</p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Question mode: show questions + responses */}
      {!isWordMode && (
        <>
          {/* The questions */}
          <motion.div
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="bg-card/50 backdrop-blur-sm border border-card-border rounded-2xl p-5"
          >
            <p className="text-[10px] uppercase tracking-[0.25em] text-text-dim font-semibold mb-3">The Questions</p>
            <div className="space-y-3">
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4">
                <div className="flex items-center gap-1.5 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan" />
                  <p className="text-[10px] uppercase tracking-wider text-cyan font-semibold">Crew Question</p>
                </div>
                <p className="text-sm leading-relaxed">{currentNormalQuestion}</p>
              </div>
              <div className="bg-crimson/[0.06] border border-crimson/20 rounded-xl p-4">
                <div className="flex items-center gap-1.5 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-crimson" />
                  <p className="text-[10px] uppercase tracking-wider text-crimson font-semibold">Imposter Question</p>
                </div>
                <p className="text-sm leading-relaxed">{currentImposterQuestion}</p>
              </div>
            </div>
          </motion.div>

          {/* Responses */}
          <motion.div
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-[10px] uppercase tracking-[0.25em] text-text-dim font-semibold mb-3">Responses</p>
            <div className="space-y-2">
              {players.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.06 }}
                  className={`rounded-2xl p-4 ${
                    p.isImposter
                      ? 'bg-crimson/[0.08] border border-crimson/20'
                      : 'bg-card/50 border border-card-border'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${playerColors[p.id % playerColors.length]} flex items-center justify-center text-[10px] font-bold text-bg`}>
                      {p.id + 1}
                    </div>
                    <span className="font-semibold text-sm">{p.name}</span>
                    {p.isImposter && (
                      <span className="text-[10px] bg-crimson/20 text-crimson px-2 py-0.5 rounded-lg font-bold uppercase tracking-wider">
                        Imposter
                      </span>
                    )}
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed pl-8">
                    "{p.response}"
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </>
      )}

      {/* Players list for word mode */}
      {isWordMode && (
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-[10px] uppercase tracking-[0.25em] text-text-dim font-semibold mb-3">Players</p>
          <div className="flex flex-wrap gap-2">
            {players.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.04 }}
                className={`flex items-center gap-2 rounded-xl px-3 py-2 ${
                  p.isImposter
                    ? 'bg-crimson/10 border border-crimson/20'
                    : 'bg-card/50 border border-card-border'
                }`}
              >
                <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${playerColors[p.id % playerColors.length]} flex items-center justify-center text-[10px] font-bold text-bg`}>
                  {p.id + 1}
                </div>
                <span className="text-sm font-medium">{p.name}</span>
                {p.isImposter && (
                  <span className="text-[10px] text-crimson font-bold">SPY</span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex gap-3 mt-auto pt-4"
      >
        <Button onClick={resetToSetup} variant="ghost" className="flex-1">
          Settings
        </Button>
        <Button onClick={playAgain} className="flex-1">
          Play Again
        </Button>
      </motion.div>
    </motion.div>
  );
}
