import { useState } from 'react';
import { motion } from 'framer-motion';
import { useGameStore } from '../../state/useGameStore';
import Button from '../ui/Button';

export default function RevealScreen() {
  const { currentPlayerIndex, players, mode, nextPlayer, submitResponse } = useGameStore();
  const player = players[currentPlayerIndex];
  const [response, setResponse] = useState('');

  const handleNext = () => {
    if (mode === 'question') {
      submitResponse(player.id, response);
    }
    setResponse('');
    nextPlayer();
  };

  const isQuestionMode = mode === 'question';
  const canProceed = isQuestionMode ? response.trim().length > 0 : true;

  return (
    <motion.div
      key={`reveal-${currentPlayerIndex}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-dvh flex flex-col items-center justify-center px-6 gap-6"
    >
      {/* Imposter alert for word mode */}
      {player.isImposter && mode === 'word' && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          className="bg-crimson/15 border border-crimson/30 rounded-2xl px-5 py-3 text-center"
        >
          <p className="text-crimson font-[family-name:var(--font-display)] font-bold text-sm tracking-wide uppercase">
            You are the Imposter
          </p>
        </motion.div>
      )}

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-text-dim text-xs uppercase tracking-[0.2em] font-semibold"
      >
        {player.name}
      </motion.p>

      {/* The reveal card */}
      <motion.div
        initial={{ scale: 0.6, opacity: 0, rotateX: -15 }}
        animate={{ scale: 1, opacity: 1, rotateX: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 18, delay: 0.1 }}
        className="relative w-full max-w-sm"
      >
        {/* Card glow */}
        <div className={`absolute -inset-4 rounded-[28px] blur-2xl ${
          player.isImposter && mode === 'word'
            ? 'bg-gradient-to-br from-crimson/15 to-orange-500/10'
            : 'bg-gradient-to-br from-cyan/15 to-violet/10'
        }`} />

        <div className={`relative backdrop-blur-md border rounded-3xl px-8 py-10 text-center ${
          player.isImposter && mode === 'word'
            ? 'bg-card/70 border-crimson/15'
            : 'bg-card/70 border-white/[0.08]'
        }`}>
          {/* Decorative corner accents */}
          {(() => {
            const color = player.isImposter && mode === 'word' ? 'border-crimson/30' : 'border-cyan/30';
            return <>
              <div className={`absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 ${color} rounded-tl-lg`} />
              <div className={`absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 ${color} rounded-tr-lg`} />
              <div className={`absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 ${color} rounded-bl-lg`} />
              <div className={`absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 ${color} rounded-br-lg`} />
            </>;
          })()}

          {mode === 'word' ? (
            <>
              <p className="text-[11px] uppercase tracking-[0.25em] text-text-dim font-semibold mb-5">
                {player.isImposter ? 'Your Hint' : 'Your Word'}
              </p>
              <p className="font-[family-name:var(--font-display)] text-[26px] font-bold leading-snug tracking-tight">
                {player.content}
              </p>
              {player.isImposter && (
                <p className="text-text-dim text-xs mt-4">
                  Figure out the real word from the discussion
                </p>
              )}
            </>
          ) : (
            <>
              <p className="text-[11px] uppercase tracking-[0.25em] text-text-dim font-semibold mb-5">
                Your Question
              </p>
              <p className="font-[family-name:var(--font-display)] text-lg font-bold leading-snug tracking-tight">
                {player.content}
              </p>
            </>
          )}
        </div>
      </motion.div>

      {/* Response input for question mode */}
      {isQuestionMode && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-full max-w-sm"
        >
          <textarea
            value={response}
            onChange={e => setResponse(e.target.value)}
            placeholder="Type your answer..."
            maxLength={200}
            rows={3}
            className="w-full bg-white/[0.04] border border-white/[0.08] rounded-2xl px-4 py-3 text-[15px] text-text placeholder:text-text-dim/50 focus:outline-none focus:border-cyan/40 focus:bg-white/[0.06] transition-all resize-none"
          />
          <p className="text-text-dim text-[11px] text-right mt-1">{response.length}/200</p>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="w-full max-w-sm"
      >
        <Button
          onClick={handleNext}
          variant="ghost"
          size="lg"
          className="w-full"
          disabled={!canProceed}
        >
          {isQuestionMode ? 'Submit & Pass Device' : 'Got it — Pass Device'}
        </Button>
      </motion.div>
    </motion.div>
  );
}
