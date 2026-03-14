import { motion } from 'framer-motion';

interface CategoryPickerProps {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}

export default function CategoryPicker({ categories, selected, onSelect }: CategoryPickerProps) {
  const all = ['Random', ...categories];
  return (
    <div className="grid grid-cols-2 gap-2">
      {all.map((cat, i) => (
        <motion.button
          key={cat}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onSelect(cat)}
          className={`
            px-3 py-2.5 rounded-xl text-[13px] font-semibold transition-all duration-200 min-h-[44px] cursor-pointer
            ${selected === cat
              ? 'bg-cyan/15 text-cyan border border-cyan/30 shadow-[0_0_12px_rgba(0,240,255,0.1)]'
              : 'bg-white/[0.03] text-text-secondary border border-transparent hover:bg-white/[0.06] hover:text-text'
            }
          `}
        >
          {cat === 'Random' ? '✦ Random' : cat}
        </motion.button>
      ))}
    </div>
  );
}
