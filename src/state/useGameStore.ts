import { create } from 'zustand';
import type { GameState, GameMode } from '../types/game';
import { pickWordEntry, pickQuestionPair, assignPlayers } from '../lib/gameLogic';

interface GameActions {
  setPlayerCount: (n: number) => void;
  setImposterMin: (n: number) => void;
  setImposterMax: (n: number) => void;
  setMode: (mode: GameMode) => void;
  setCategory: (category: string) => void;
  setTimerDuration: (seconds: number) => void;
  setPlayerName: (index: number, name: string) => void;
  startGame: () => void;
  showReveal: () => void;
  submitResponse: (playerId: number, response: string) => void;
  nextPlayer: () => void;
  startDiscussion: () => void;
  goToResults: () => void;
  playAgain: () => void;
  resetToSetup: () => void;
}

function randomInRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const initialState: GameState = {
  phase: 'setup',
  mode: 'word',
  playerCount: 4,
  imposterMin: 1,
  imposterMax: 1,
  category: 'Random',
  timerDuration: 120,
  players: [],
  currentPlayerIndex: 0,
  currentWord: null,
  currentHint: null,
  currentCategory: null,
  currentNormalQuestion: null,
  currentImposterQuestion: null,
};

export const useGameStore = create<GameState & GameActions & { playerNames: string[] }>((set, get) => ({
  ...initialState,
  playerNames: ['', '', '', ''],

  setPlayerCount: (n) => {
    const count = Math.max(3, Math.min(12, n));
    const names = [...get().playerNames];
    while (names.length < count) names.push('');
    while (names.length > count) names.pop();
    set({
      playerCount: count,
      playerNames: names,
      imposterMin: Math.min(get().imposterMin, count),
      imposterMax: Math.min(get().imposterMax, count),
    });
  },

  setImposterMin: (n) => {
    const clamped = Math.max(0, Math.min(get().playerCount, n));
    set({
      imposterMin: clamped,
      imposterMax: Math.max(get().imposterMax, clamped),
    });
  },

  setImposterMax: (n) => {
    const clamped = Math.max(0, Math.min(get().playerCount, n));
    set({
      imposterMax: clamped,
      imposterMin: Math.min(get().imposterMin, clamped),
    });
  },

  setMode: (mode) => set({ mode, category: 'Random' }),
  setCategory: (category) => set({ category }),
  setTimerDuration: (seconds) => set({ timerDuration: seconds }),

  setPlayerName: (index, name) => {
    const names = [...get().playerNames];
    names[index] = name;
    set({ playerNames: names });
  },

  startGame: () => {
    const { mode, category, imposterMin, imposterMax, playerNames } = get();
    const imposterCount = randomInRange(imposterMin, imposterMax);
    const names = playerNames.map((n, i) => n.trim() || `Player ${i + 1}`);

    let wordEntry = null;
    let questionPair = null;
    let currentWord = null;
    let currentHint = null;
    let currentCategory: string | null = null;
    let currentNormalQuestion = null;
    let currentImposterQuestion = null;

    if (mode === 'word') {
      wordEntry = pickWordEntry(category);
      currentWord = wordEntry.word;
      currentHint = wordEntry.hint;
      currentCategory = wordEntry.category;
    } else {
      questionPair = pickQuestionPair(category);
      currentNormalQuestion = questionPair.normal;
      currentImposterQuestion = questionPair.imposter;
      currentCategory = questionPair.category;
    }

    const players = assignPlayers(names, imposterCount, mode, wordEntry, questionPair);

    set({
      phase: 'playerTurn',
      currentPlayerIndex: 0,
      players,
      currentWord,
      currentHint,
      currentCategory,
      currentNormalQuestion,
      currentImposterQuestion,
      playerNames: names,
    });
  },

  showReveal: () => set({ phase: 'reveal' }),

  submitResponse: (playerId, response) => {
    const players = get().players.map(p =>
      p.id === playerId ? { ...p, response, hasRevealed: true } : p
    );
    set({ players });
  },

  nextPlayer: () => {
    const { currentPlayerIndex, players, mode } = get();
    const updated = players.map((p, i) =>
      i === currentPlayerIndex ? { ...p, hasRevealed: true } : p
    );

    if (currentPlayerIndex + 1 >= players.length) {
      set({
        players: updated,
        phase: mode === 'word' ? 'discussion' : 'results',
      });
    } else {
      set({
        players: updated,
        phase: 'playerTurn',
        currentPlayerIndex: currentPlayerIndex + 1,
      });
    }
  },

  startDiscussion: () => set({ phase: 'discussion' }),
  goToResults: () => set({ phase: 'results' }),

  playAgain: () => {
    const { mode, category, imposterMin, imposterMax, timerDuration, playerNames } = get();
    const imposterCount = randomInRange(imposterMin, imposterMax);
    const names = playerNames.map((n, i) => n.trim() || `Player ${i + 1}`);

    let wordEntry = null;
    let questionPair = null;
    let currentWord = null;
    let currentHint = null;
    let currentCategory: string | null = null;
    let currentNormalQuestion = null;
    let currentImposterQuestion = null;

    if (mode === 'word') {
      wordEntry = pickWordEntry(category);
      currentWord = wordEntry.word;
      currentHint = wordEntry.hint;
      currentCategory = wordEntry.category;
    } else {
      questionPair = pickQuestionPair(category);
      currentNormalQuestion = questionPair.normal;
      currentImposterQuestion = questionPair.imposter;
      currentCategory = questionPair.category;
    }

    const players = assignPlayers(names, imposterCount, mode, wordEntry, questionPair);

    set({
      phase: 'playerTurn',
      currentPlayerIndex: 0,
      players,
      currentWord,
      currentHint,
      currentCategory,
      currentNormalQuestion,
      currentImposterQuestion,
      timerDuration,
    });
  },

  resetToSetup: () => {
    const { playerNames } = get();
    set({ ...initialState, playerNames });
  },
}));
