import { AnimatePresence } from 'framer-motion';
import { useGameStore } from './state/useGameStore';
import SetupScreen from './components/screens/SetupScreen';
import PlayerTurnScreen from './components/screens/PlayerTurnScreen';
import RevealScreen from './components/screens/RevealScreen';
import DiscussionScreen from './components/screens/DiscussionScreen';
import ResultsScreen from './components/screens/ResultsScreen';

function App() {
  const phase = useGameStore(s => s.phase);
  const currentPlayerIndex = useGameStore(s => s.currentPlayerIndex);

  return (
    <div className="min-h-dvh bg-bg relative overflow-hidden">
      {/* Ambient background gradients */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute -top-[40%] -left-[20%] w-[70%] h-[70%] rounded-full bg-violet/[0.04] blur-[120px]" />
        <div className="absolute -bottom-[30%] -right-[20%] w-[60%] h-[60%] rounded-full bg-cyan/[0.03] blur-[120px]" />
      </div>

      <div className="relative z-10">
        <AnimatePresence mode="wait">
          {phase === 'setup' && <SetupScreen key="setup" />}
          {phase === 'playerTurn' && <PlayerTurnScreen key={`playerTurn-${currentPlayerIndex}`} />}
          {phase === 'reveal' && <RevealScreen key={`reveal-${currentPlayerIndex}`} />}
          {phase === 'discussion' && <DiscussionScreen key="discussion" />}
          {phase === 'results' && <ResultsScreen key="results" />}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
