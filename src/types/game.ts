export interface DailyPuzzle {
  id: number;
  date: string;
  emojis: string[];
  answer: string;
}

export interface GameState {
  guesses: string[];
  isWon: boolean;
  isLost: boolean;
  lastPlayedDate: string | null;
}