🎮 EmojiGuesser

EmojiGuesser to interaktywna gra przeglądarkowa oparta na logice popularnych "guesserów" (jak Wordle). Zadaniem gracza jest odgadnięcie tytułu gry wideo na podstawie zestawu 5 emotikon. Projekt został stworzony z naciskiem na płynność działania, czystą architekturę i nowoczesny interfejs użytkownika.

✨ Funkcjonalności

Nieskończony tryb (Endless Mode): Możliwość losowania nowych zagadek bez ograniczeń czasowych.

Baza Zagadek: Prawie 100 unikalnych, ręcznie przygotowanych zestawów emotikon dla najpopularniejszych gier wideo.

Inteligentna Wyszukiwarka: Pole tekstowe z dynamicznym filtrowaniem i autouzupełnianiem (Fuzzy Search), zapobiegające literówkom.

Progresywne Podpowiedzi: Każda z 5 prób odkrywa kolejną emotikonę.

Zaawansowany UI/UX: Responsywny design, autorskie animacje CSS (efekt wstrząsu przy porażce, płynne odsłanianie kafelków) oraz system konfetti nagradzający gracza za zwycięstwo.

🛠️ Technologie

Projekt został zbudowany przy użyciu nowoczesnego ekosystemu frontendowego:

React 18 – Zarządzanie stanem i renderowanie komponentów.

TypeScript – Silne typowanie i bezpieczeństwo kodu (interfejsy zagadek i stanu gry).

Vite – Ultraszybki bundler i serwer deweloperski.

Tailwind CSS (v4) – Stylowanie oparte na klasach narzędziowych i implementacja własnych animacji kluczowych (keyframes).

react-confetti – Efekty cząsteczkowe przy ekranie wygranej.

🚀 Uruchomienie lokalne

Aby uruchomić projekt na własnej maszynie, wykonaj poniższe kroki:

Sklonuj repozytorium:

git clone https://github.com/s0uru/gameguesser.git


Przejdź do folderu z projektem:

cd gameguesser


Zainstaluj wymagane zależności:

npm install


Uruchom serwer deweloperski:

npm run dev


Otwórz w przeglądarce adres http://localhost:5173.

📂 Architektura Projektu

src/
├── components/     # Reużywalne klocki interfejsu (np. SearchBar)
├── data/           # Statyczna baza danych (JSON zagadek, lista gier)
├── types/          # Interfejsy TypeScript (kontrakty danych)
├── App.tsx         # Główny komponent z logiką i pętlą gry
├── index.css       # Konfiguracja Tailwinda i własne animacje kluczowe
└── main.tsx        # Punkt wejścia aplikacji


🎮 Zasady gry

Gra wyświetla 5 pustych kafelków – na początku odkryty jest tylko pierwszy.

Spróbuj odgadnąć grę wpisując jej tytuł w pole wyszukiwania. Wyszukiwarka podpowie Ci poprawne nazwy.

Jeśli nie zgadniesz, tracisz próbę, a kolejna emotikona zostaje odsłonięta.

Masz maksymalnie 5 prób na poprawne odgadnięcie tytułu.

Po zakończeniu możesz zagrać ponownie, klikając przycisk "Play Again".
