import { AnimatePresence } from 'framer-motion';
import { useGameStore } from './state/useGameStore';
import SetupScreen from './components/screens/SetupScreen';
import PlayerTurnScreen from './components/screens/PlayerTurnScreen';
import RevealScreen from './components/screens/RevealScreen';
import DiscussionScreen from './components/screens/DiscussionScreen';
import VotingScreen from './components/screens/VotingScreen';
import ResultsScreen from './components/screens/ResultsScreen';

function App() {
  const phase = useGameStore(s => s.phase);

  return (
    <div className="min-h-dvh bg-bg">
      <AnimatePresence mode="wait">
        {phase === 'setup' && <SetupScreen key="setup" />}
        {phase === 'playerTurn' && <PlayerTurnScreen key="playerTurn" />}
        {phase === 'reveal' && <RevealScreen key="reveal" />}
        {phase === 'discussion' && <DiscussionScreen key="discussion" />}
        {phase === 'voting' && <VotingScreen key="voting" />}
        {phase === 'results' && <ResultsScreen key="results" />}
      </AnimatePresence>
    </div>
  );
}

export default App;
