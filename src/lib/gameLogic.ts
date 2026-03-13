import type { ContentPair, PlayerState, GameMode } from '../types/game';
import { wordPairs, wordCategories } from '../data/wordPairs';
import { questionPairs, questionCategories } from '../data/questionPairs';

export function getCategories(mode: GameMode): string[] {
  return mode === 'word' ? wordCategories : questionCategories;
}

export function pickPair(mode: GameMode, category: string): ContentPair {
  const pool = mode === 'word' ? wordPairs : questionPairs;
  const filtered = category === 'Random'
    ? pool
    : pool.filter(p => p.category === category);
  return filtered[Math.floor(Math.random() * filtered.length)];
}

export function assignPlayers(
  playerCount: number,
  impostorCount: number,
  pair: ContentPair,
): PlayerState[] {
  const impostorIndices = new Set<number>();
  while (impostorIndices.size < impostorCount) {
    impostorIndices.add(Math.floor(Math.random() * playerCount));
  }

  return Array.from({ length: playerCount }, (_, i) => ({
    id: i,
    name: `Player ${i + 1}`,
    isImpostor: impostorIndices.has(i),
    content: impostorIndices.has(i) ? pair.impostor : pair.normal,
    vote: null,
    votesReceived: 0,
  }));
}

export function tallyVotes(players: PlayerState[]): {
  players: PlayerState[];
  winner: 'crew' | 'impostors';
} {
  const voteCounts = new Map<number, number>();
  for (const p of players) {
    if (p.vote !== null) {
      voteCounts.set(p.vote, (voteCounts.get(p.vote) ?? 0) + 1);
    }
  }

  const updated = players.map(p => ({
    ...p,
    votesReceived: voteCounts.get(p.id) ?? 0,
  }));

  const maxVotes = Math.max(...updated.map(p => p.votesReceived));
  const mostVoted = updated.filter(p => p.votesReceived === maxVotes);

  // Crew wins if the most-voted player is an impostor
  const crewWins = mostVoted.some(p => p.isImpostor);

  return {
    players: updated,
    winner: crewWins ? 'crew' : 'impostors',
  };
}
