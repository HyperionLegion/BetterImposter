export type GameMode = 'word' | 'question';

export type GamePhase =
  | 'setup'
  | 'playerTurn'
  | 'reveal'
  | 'discussion'
  | 'voting'
  | 'results';

export interface ContentPair {
  normal: string;
  impostor: string;
  category: string;
}

export interface PlayerState {
  id: number;
  name: string;
  isImpostor: boolean;
  content: string;
  vote: number | null;
  votesReceived: number;
}

export interface GameState {
  phase: GamePhase;
  mode: GameMode;
  playerCount: number;
  impostorCount: number;
  category: string;
  timerDuration: number;
  players: PlayerState[];
  currentPlayerIndex: number;
  currentPair: ContentPair | null;
  winner: 'crew' | 'impostors' | null;
}
