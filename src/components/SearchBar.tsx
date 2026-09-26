import { useState } from 'react';
import { GAMES_LIST } from '../data/gamesList';

interface SearchBarProps {
  onGuess: (guess: string) => void;
  disabled: boolean;
}

export default function SearchBar({ onGuess, disabled }: SearchBarProps) {
  const [input, setInput] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const filteredGames = GAMES_LIST.filter(game =>
    game.toLowerCase().includes(input.toLowerCase())
  );

  const handleSelect = (game: string) => {
    onGuess(game);
    setInput('');
    setShowDropdown(false);
  };

  return (
    <div className="relative w-full max-w-md mx-auto mt-6">
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          setShowDropdown(true);
        }}
        onFocus={() => setShowDropdown(true)}
        // Opóźniamy zamknięcie, żeby kliknięcie w opcję z listy zdążyło się wykonać
        onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
        disabled={disabled}
        placeholder={disabled ? "Game over!" : "Guess the game..."}
        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 disabled:opacity-50 transition-colors"
      />
      
      {showDropdown && input && !disabled && (
        <ul className="absolute z-10 w-full mt-1 bg-zinc-800 border border-zinc-700 rounded-lg shadow-lg max-h-60 overflow-auto">
          {filteredGames.length > 0 ? (
            filteredGames.map((game, index) => (
              <li
                key={index}
                onClick={() => handleSelect(game)}
                className="px-4 py-3 hover:bg-zinc-700 cursor-pointer text-zinc-200 border-b border-zinc-700/50 last:border-0"
              >
                {game}
              </li>
            ))
          ) : (
            <li className="px-4 py-3 text-zinc-500">No games found</li>
          )}
        </ul>
      )}
    </div>
  );
}