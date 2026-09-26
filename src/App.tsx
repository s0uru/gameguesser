import { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import puzzles from './data/puzzles.json';
import SearchBar from './components/SearchBar';
import type { Puzzle } from './types/game';

const MAX_GUESSES = 5;

export default function App() {
  const [puzzle, setPuzzle] = useState<Puzzle | null>(null);
  const [guesses, setGuesses] = useState<string[]>([]);
  const [isWon, setIsWon] = useState(false);
  const [isLost, setIsLost] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const startNewGame = () => {
    // Losowanie nowej zagadki
    const randomIndex = Math.floor(Math.random() * puzzles.length);
    setPuzzle(puzzles[randomIndex]);
    
    // Resetowanie stanu gry
    setGuesses([]);
    setIsWon(false);
    setIsLost(false);
  };

  useEffect(() => {
    startNewGame(); // Inicjalizacja pierwszej gry po wejściu na stronę

    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleGuess = (guess: string) => {
    if (!puzzle || isWon || isLost || guesses.includes(guess)) return;

    const newGuesses = [...guesses, guess];
    setGuesses(newGuesses);

    if (guess === puzzle.answer) {
      setIsWon(true);
    } else if (newGuesses.length >= MAX_GUESSES) {
      setIsLost(true);
    }
  };

  if (!puzzle) {
    return <div className="min-h-screen flex items-center justify-center text-white">Loading...</div>;
  }

  return (
    <div className={`min-h-screen flex flex-col items-center pt-16 px-4 ${isLost ? 'animate-shake' : ''}`}>
      
      {isWon && <Confetti width={windowSize.width} height={windowSize.height} recycle={false} numberOfPieces={400} />}

      <header className="mb-10 text-center z-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-white mb-2">EmojiGuesser</h1>
        <p className="text-zinc-400">Can you guess the video game? You have {MAX_GUESSES} tries.</p>
      </header>

      <div className="flex gap-2 sm:gap-4 mb-10 z-10">
        {puzzle.emojis.map((emoji, index) => {
          const isRevealed = index <= guesses.length || isWon || isLost;
          const isJustRevealed = index === guesses.length && !isWon && !isLost;
          
          return (
            <div 
              key={`${puzzle.id}-${index}`} 
              className={`w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center text-3xl sm:text-4xl rounded-xl transition-colors duration-300 ${
                isRevealed 
                  ? 'bg-zinc-800 border border-zinc-600 shadow-md' 
                  : 'bg-zinc-900 border border-zinc-800 opacity-50'
              } ${isJustRevealed ? 'animate-reveal' : ''}`}
            >
              {isRevealed ? emoji : '❓'}
            </div>
          );
        })}
      </div>

      <div className="w-full max-w-md space-y-2 mb-6 z-10">
        {guesses.map((g, i) => (
          <div 
            key={i} 
            className={`p-3 rounded-lg border font-medium animate-fade-in ${
              g === puzzle.answer 
                ? 'bg-green-900/40 border-green-700 text-green-400' 
                : 'bg-zinc-800/80 border-zinc-700 text-zinc-300'
            }`}
          >
            {g}
          </div>
        ))}
        {Array.from({ length: MAX_GUESSES - guesses.length }).map((_, i) => (
          <div 
            key={`empty-${i}`} 
            className="p-3 rounded-lg border border-dashed border-zinc-700 bg-zinc-800/10 h-[50px] transition-all"
          />
        ))}
      </div>

      <div className="w-full max-w-md z-10">
        <SearchBar onGuess={handleGuess} disabled={isWon || isLost} />
      </div>

      {(isWon || isLost) && (
        <div className="mt-8 text-center bg-zinc-800/90 p-6 rounded-xl border border-zinc-700 w-full max-w-md animate-fade-in z-10">
          <h2 className={`text-3xl font-black mb-2 ${isWon ? 'text-green-400' : 'text-red-500'}`}>
            {isWon ? 'Victory!' : 'Game Over!'}
          </h2>
          <p className="text-zinc-300 text-lg mb-6">
            The answer was: <br/>
            <span className="font-bold text-2xl text-amber-500 mt-1 block">{puzzle.answer}</span>
          </p>
          <button 
            onClick={startNewGame}
            className="bg-amber-600 hover:bg-amber-500 text-white font-bold py-3 px-8 rounded-full transition-colors w-full sm:w-auto"
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}