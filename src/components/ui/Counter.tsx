import { motion, AnimatePresence } from 'framer-motion';

interface CounterProps {
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  label: string;
}

export default function Counter({ value, onChange, min, max, label }: CounterProps) {
  return (
    <div className="flex items-center justify-between bg-card/60 backdrop-blur-sm border border-card-border rounded-2xl px-5 py-4">
      <span className="font-[family-name:var(--font-display)] text-[15px] font-semibold tracking-wide text-text-secondary">
        {label}
      </span>
      <div className="flex items-center gap-3">
        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
          className="w-10 h-10 rounded-full bg-white/[0.06] border border-white/[0.1] text-text text-lg font-medium flex items-center justify-center disabled:opacity-20 cursor-pointer transition-colors hover:bg-white/[0.1]"
        >
          −
        </motion.button>
        <div className="w-10 h-10 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.span
              key={value}
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 12, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="text-2xl font-bold text-cyan tabular-nums font-[family-name:var(--font-display)]"
            >
              {value}
            </motion.span>
          </AnimatePresence>
        </div>
        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          className="w-10 h-10 rounded-full bg-white/[0.06] border border-white/[0.1] text-text text-lg font-medium flex items-center justify-center disabled:opacity-20 cursor-pointer transition-colors hover:bg-white/[0.1]"
        >
          +
        </motion.button>
      </div>
    </div>
  );
}
