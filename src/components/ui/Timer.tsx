import { motion } from 'framer-motion';

interface TimerProps {
  secondsLeft: number;
  progress: number;
  size?: number;
}

export default function Timer({ secondsLeft, progress, size = 180 }: TimerProps) {
  const strokeWidth = 5;
  const radius = (size - strokeWidth * 2) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - progress);
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const isUrgent = secondsLeft <= 10;

  return (
    <motion.div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
      animate={isUrgent ? { scale: [1, 1.02, 1] } : {}}
      transition={isUrgent ? { duration: 1, repeat: Infinity } : {}}
    >
      {/* Outer glow */}
      <div
        className={`absolute inset-0 rounded-full blur-xl transition-colors duration-500 ${
          isUrgent ? 'bg-crimson/20' : 'bg-cyan/10'
        }`}
      />

      <svg width={size} height={size} className="rotate-[-90deg] relative z-10">
        {/* Track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-white/[0.06]"
        />
        {/* Progress ring */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className={`transition-all duration-1000 linear ${
            isUrgent ? 'stroke-crimson' : 'stroke-cyan'
          }`}
          style={{
            filter: `drop-shadow(0 0 8px ${isUrgent ? 'rgba(255,45,85,0.6)' : 'rgba(0,240,255,0.5)'})`,
          }}
        />
      </svg>

      {/* Time display */}
      <div className="absolute z-10 flex flex-col items-center">
        <span
          className={`text-4xl font-[family-name:var(--font-display)] font-bold tabular-nums tracking-tight transition-colors duration-500 ${
            isUrgent ? 'text-crimson' : 'text-text'
          }`}
        >
          {minutes}:{seconds.toString().padStart(2, '0')}
        </span>
        <span className="text-[11px] uppercase tracking-[0.2em] text-text-dim mt-1">
          remaining
        </span>
      </div>
    </motion.div>
  );
}
