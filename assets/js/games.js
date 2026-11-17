// First 20 MIT open-source / self-hosted games. Each entry: slug, name, category, emoji, description, licence, source.
// Own flagships (airplane shooter, kart racer) are featured separately — web builds coming soon from the Cocos projects.
const GAMES = [
  {slug:"2048", name:"2048", cat:"Puzzle", emoji:"🔢", desc:"Slide the tiles and combine matching numbers to reach 2048. A classic number puzzle, free in your browser.", license:"MIT", source:"gabrielecirulli/2048"},
  {slug:"snake", name:"Snake", cat:"Arcade", emoji:"🐍", desc:"Eat, grow, don't hit the wall or yourself. The timeless arcade snake, with arrow keys or swipe.", license:"MIT", source:"Self-hosted implementation"},
  {slug:"tetris", name:"Tetris Blocks", cat:"Puzzle", emoji:"🧱", desc:"Stack falling blocks, clear lines, chase a high score. Keyboard controls, no download needed.", license:"MIT", source:"Self-hosted implementation"},
  {slug:"minesweeper", name:"Minesweeper", cat:"Puzzle", emoji:"💣", desc:"Clear the field without hitting a mine. Numbers tell you where the mines hide.", license:"MIT", source:"Self-hosted implementation"},
  {slug:"memory-match", name:"Memory Match", cat:"Puzzle", emoji:"🃏", desc:"Flip cards and find all matching pairs in as few moves as you can.", license:"MIT", source:"Self-hosted implementation"},
  {slug:"breakout", name:"Breakout", cat:"Arcade", emoji:"🧱", desc:"Bounce the ball, break all the bricks. Move the paddle with mouse or arrow keys.", license:"MIT", source:"Self-hosted implementation"},
  {slug:"asteroids", name:"Asteroids", cat:"Shooting", emoji:"☄️", desc:"Pilot your ship, shoot asteroids, avoid collisions. A space arcade classic.", license:"MIT", source:"attogram/games"},
  {slug:"tic-tac-toe", name:"Tic Tac Toe", cat:"Puzzle", emoji:"❌", desc:"Three in a row wins. Play against the computer or a friend on the same screen.", license:"MIT", source:"Self-hosted implementation"},
  {slug:"flappy-bird", name:"Flappy Bird", cat:"Arcade", emoji:"🐦", desc:"Tap to flap through the pipes. Simple to learn, hard to master.", license:"MIT", source:"Self-hosted implementation"},
  {slug:"pong", name:"Pong", cat:"Sports", emoji:"🏓", desc:"The original video game. Bounce the ball past your opponent's paddle.", license:"MIT", source:"Self-hosted implementation"},
  {slug:"space-invaders", name:"Space Invaders", cat:"Shooting", emoji:"👾", desc:"Defend Earth from waves of invaders. Move, shoot, don't let them land.", license:"MIT", source:"Self-hosted implementation"},
  {slug:"hearts", name:"Hearts Card Game", cat:"Card", emoji:"♥️", desc:"A classic trick-taking card game. Avoid hearts and the Queen of Spades.", license:"MIT", source:"attogram/games"},
  {slug:"sudoku", name:"Sudoku", cat:"Puzzle", emoji:"🔢", desc:"Fill the 9x9 grid so every row, column and box has 1-9. Daily brain training.", license:"MIT", source:"Self-hosted implementation"},
  {slug:"connect-four", name:"Connect Four", cat:"Puzzle", emoji:"🔴", desc:"Drop discs and get four in a row before your opponent does.", license:"MIT", source:"Self-hosted implementation"},
  {slug:"whack-a-mole", name:"Whack a Mole", cat:"Arcade", emoji:"🔨", desc:"Moles pop up — whack them fast. 30 seconds, how many can you get?", license:"MIT", source:"Self-hosted implementation"},
  {slug:"dino-run", name:"Dino Run", cat:"Arcade", emoji:"🦕", desc:"Jump over cacti and dodge birds in this endless runner. Space to jump.", license:"MIT", source:"Self-hosted implementation"},
  {slug:"simon", name:"Simon Says", cat:"Puzzle", emoji:"🎵", desc:"Repeat the colour and sound pattern. Each round adds one more step.", license:"MIT", source:"Self-hosted implementation"},
  {slug:"hangman", name:"Hangman", cat:"Word", emoji:"🔤", desc:"Guess the hidden word letter by letter before the drawing is complete.", license:"MIT", source:"Self-hosted implementation"},
  {slug:"solitaire", name:"Solitaire", cat:"Card", emoji:"♠️", desc:"The classic single-player card game. Sort all cards by suit and rank.", license:"MIT", source:"attogram/games"},
  {slug:"maze", name:"Maze Runner", cat:"Puzzle", emoji:"🌀", desc:"Find your way out of the maze. Arrow keys to move, beat the clock.", license:"MIT", source:"Self-hosted implementation"},
];
