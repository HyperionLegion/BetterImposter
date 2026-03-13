import { create } from 'zustand';
import type { GameState, GameMode } from '../types/game';
import { pickPair, assignPlayers, tallyVotes, getCategories } from '../lib/gameLogic';

interface GameActions {
  setPlayerCount: (n: number) => void;
  setImpostorCount: (n: number) => void;
  setMode: (mode: GameMode) => void;
  setCategory: (category: string) => void;
  setTimerDuration: (seconds: number) => void;
  startGame: () => void;
  nextPlayer: () => void;
  showReveal: () => void;
  startDiscussion: () => void;
  startVoting: () => void;
  castVote: (voterId: number, targetId: number) => void;
  showResults: () => void;
  playAgain: () => void;
  resetToSetup: () => void;
}

const initialState: GameState = {
  phase: 'setup',
  mode: 'word',
  playerCount: 4,
  impostorCount: 1,
  category: 'Random',
  timerDuration: 120,
  players: [],
  currentPlayerIndex: 0,
  currentPair: null,
  winner: null,
};

export const useGameStore = create<GameState & GameActions>((set, get) => ({
  ...initialState,

  setPlayerCount: (n) => set({ playerCount: Math.max(3, Math.min(12, n)) }),
  setImpostorCount: (n) => {
    const max = Math.floor(get().playerCount / 3);
    set({ impostorCount: Math.max(1, Math.min(max, n)) });
  },
  setMode: (mode) => set({ mode, category: 'Random' }),
  setCategory: (category) => set({ category }),
  setTimerDuration: (seconds) => set({ timerDuration: seconds }),

  startGame: () => {
    const { mode, category, playerCount, impostorCount } = get();
    const pair = pickPair(mode, category);
    const players = assignPlayers(playerCount, impostorCount, pair);
    set({
      phase: 'playerTurn',
      currentPlayerIndex: 0,
      currentPair: pair,
      players,
      winner: null,
    });
  },

  showReveal: () => set({ phase: 'reveal' }),

  nextPlayer: () => {
    const { currentPlayerIndex, players } = get();
    if (currentPlayerIndex + 1 >= players.length) {
      set({ phase: 'discussion' });
    } else {
      set({
        phase: 'playerTurn',
        currentPlayerIndex: currentPlayerIndex + 1,
      });
    }
  },

  startDiscussion: () => set({ phase: 'discussion' }),
  startVoting: () => set({ phase: 'voting' }),

  castVote: (voterId, targetId) => {
    const players = get().players.map(p =>
      p.id === voterId ? { ...p, vote: targetId } : p
    );
    set({ players });

    // Auto-advance to results when all votes are in
    if (players.every(p => p.vote !== null)) {
      const result = tallyVotes(players);
      set({ players: result.players, winner: result.winner, phase: 'results' });
    }
  },

  showResults: () => {
    const { players } = get();
    const result = tallyVotes(players);
    set({ players: result.players, winner: result.winner, phase: 'results' });
  },

  playAgain: () => {
    const { mode, category, playerCount, impostorCount, timerDuration } = get();
    const pair = pickPair(mode, category);
    const players = assignPlayers(playerCount, impostorCount, pair);
    set({
      phase: 'playerTurn',
      currentPlayerIndex: 0,
      currentPair: pair,
      players,
      winner: null,
      timerDuration,
    });
  },

  resetToSetup: () => set({ ...initialState }),
}));
