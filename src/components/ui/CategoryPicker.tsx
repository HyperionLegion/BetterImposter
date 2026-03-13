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
      {all.map(cat => (
        <motion.button
          key={cat}
          whileTap={{ scale: 0.95 }}
          onClick={() => onSelect(cat)}
          className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-colors min-h-[44px] ${
            selected === cat
              ? 'bg-accent text-white'
              : 'bg-card text-text-muted hover:text-text'
          }`}
        >
          {cat}
        </motion.button>
      ))}
    </div>
  );
}
