import { motion } from 'framer-motion';

interface CounterProps {
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  label: string;
}

export default function Counter({ value, onChange, min, max, label }: CounterProps) {
  return (
    <div className="flex items-center justify-between bg-card rounded-xl px-5 py-4">
      <span className="text-text text-base">{label}</span>
      <div className="flex items-center gap-4">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
          className="w-10 h-10 rounded-full bg-purple text-white text-xl font-bold flex items-center justify-center disabled:opacity-30"
        >
          −
        </motion.button>
        <span className="text-2xl font-bold w-8 text-center">{value}</span>
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          className="w-10 h-10 rounded-full bg-purple text-white text-xl font-bold flex items-center justify-center disabled:opacity-30"
        >
          +
        </motion.button>
      </div>
    </div>
  );
}
