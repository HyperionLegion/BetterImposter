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
  const imposterIndices = new Set<number>();
  while (imposterIndices.size < imposterCount) {
    imposterIndices.add(Math.floor(Math.random() * playerCount));
  }

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
