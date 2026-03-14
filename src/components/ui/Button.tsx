import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
}

const variantStyles = {
  primary:
    'bg-gradient-to-r from-cyan to-[#00c8d4] text-bg font-bold shadow-[0_0_24px_rgba(0,240,255,0.25)] hover:shadow-[0_0_32px_rgba(0,240,255,0.4)]',
  secondary:
    'bg-violet/20 text-violet border border-violet/30 hover:bg-violet/30 hover:border-violet/50',
  ghost:
    'bg-white/[0.04] border border-white/[0.08] text-text-secondary hover:bg-white/[0.08] hover:text-text',
  danger:
    'bg-gradient-to-r from-crimson to-[#e6194b] text-white font-bold shadow-[0_0_24px_rgba(255,45,85,0.25)]',
};

const sizeStyles = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-5 py-3 text-[15px] rounded-xl',
  lg: 'px-6 py-4 text-base rounded-xl',
};

export default function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
}: ButtonProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      whileHover={{ scale: 1.01 }}
      onClick={onClick}
      disabled={disabled}
      className={`
        font-[family-name:var(--font-body)] font-semibold transition-all duration-200
        min-h-[48px] tracking-wide cursor-pointer
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${disabled ? 'opacity-30 pointer-events-none saturate-0' : ''}
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
}
