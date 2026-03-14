import type { WordEntry, QuestionPair, PlayerState, GameMode } from '../types/game';
import { wordEntries, wordCategories } from '../data/wordPairs';
import { questionPairs, questionCategories } from '../data/questionPairs';

export function getCategories(mode: GameMode): string[] {
  return mode === 'word' ? wordCategories : questionCategories;
}

export function pickWordEntry(category: string): WordEntry {
  const filtered = category === 'Random'
    ? wordEntries
    : wordEntries.filter(p => p.category === category);
  return filtered[Math.floor(Math.random() * filtered.length)];
}

export function pickQuestionPair(category: string): QuestionPair {
  const filtered = category === 'Random'
    ? questionPairs
    : questionPairs.filter(p => p.category === category);
  return filtered[Math.floor(Math.random() * filtered.length)];
}

export function assignPlayers(
  names: string[],
  imposterCount: number,
  mode: GameMode,
  wordEntry: WordEntry | null,
  questionPair: QuestionPair | null,
): PlayerState[] {
  const playerCount = names.length;
  // Fisher-Yates shuffle to pick imposters uniformly
  const indices = Array.from({ length: playerCount }, (_, i) => i);
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  const imposterIndices = new Set(indices.slice(0, imposterCount));

  return names.map((name, i) => {
    const isImposter = imposterIndices.has(i);
    let content: string;

    if (mode === 'word') {
      content = isImposter ? wordEntry!.hint : wordEntry!.word;
    } else {
      content = isImposter ? questionPair!.imposter : questionPair!.normal;
    }

    return {
      id: i,
      name,
      isImposter,
      content,
      response: '',
      hasRevealed: false,
    };
  });
}
