export type GameMode = 'word' | 'question';

export type GamePhase =
  | 'setup'
  | 'playerTurn'
  | 'reveal'
  | 'discussion'
  | 'results';

export interface WordEntry {
  word: string;
  hint: string;
  category: string;
}

export interface QuestionPair {
  normal: string;
  imposter: string;
  category: string;
}

export interface PlayerState {
  id: number;
  name: string;
  isImposter: boolean;
  content: string;        // the word, hint, or question they see
  response: string;       // typed response (question mode only)
  hasRevealed: boolean;   // whether they've seen their content
}

export interface GameState {
  phase: GamePhase;
  mode: GameMode;
  playerCount: number;
  imposterMin: number;
  imposterMax: number;
  category: string;
  timerDuration: number;
  players: PlayerState[];
  currentPlayerIndex: number;
  // Word mode: the actual word + hint
  currentWord: string | null;
  currentHint: string | null;
  currentCategory: string | null;
  // Question mode: both questions
  currentNormalQuestion: string | null;
  currentImposterQuestion: string | null;
}
