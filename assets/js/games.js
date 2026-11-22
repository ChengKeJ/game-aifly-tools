// First 20 MIT open-source / self-hosted games. Each entry: slug, name, category, emoji, description, licence, source.
// Own flagships (airplane shooter, kart racer) are featured separately — web builds coming soon from the Cocos projects.
const GAMES = [
  
  {slug:"apex-drift", name:"Apex Drift", cat:"Racing", emoji:"🕹️", desc:"Apex Drift is a realistic 3D drift racing game. Throw your car into hairpins, chain long slides and chase the perfect line on three maps: a mountain pass, a neon city and a sunset coast road. Modes and levels: 15 stages", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/mh3m76ny9x2us9zflygjy2s5tdmv4ban/512x384.jpg"},
  
  {slug:"mech-strike-frozen-sky", name:"Mech Strike: Frozen Sky", cat:"Shooting", emoji:"🕹️", desc:"Mech Strike: Frozen Sky is a fast third-person mech flight shooter. Your battle mech has wings, jet thrusters, twin cannons and shoulder missiles: launch over a shattered frozen sea at sunset, race between glacier walls", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/92wh9c28k3yxsw068qxpdh1md3t8vl8r/512x384.jpg"},
  
  {slug:"zombie-survival-blackout", name:"Zombie Survival: Blackout", cat:"Shooting", emoji:"🕹️", desc:"Night falls, the power is out and the city belongs to the zombies. Survive the horde, rescue the people hiding across the city and get them out by helicopter. Your hero fires automatically - you focus on moving, dodging", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/z0rtwh2scjubgdg80bnt2slalw03yv94/512x384.jpg"},
  
  {slug:"regolith", name:"REGOLITH", cat:"Shooting", emoji:"🕹️", desc:"Your ship has crashed on an unknown planet and the only way out is down. Take your astronaut through five underground worlds and find the five missing parts of the ship. Everything in the cave is made of small pixels", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/779p1tmy7fq4gbeyc7s53ey4yy6t1bbl/512x384.jpg"},
  
  {slug:"city-tow-master-3d", name:"City Tow Master 3D", cat:"3D", emoji:"🕹️", desc:"Get behind the wheel of a powerful tow truck and become the citys top recovery driver! Answer dispatch calls, race through busy streets, highways and steep hill roads, and find broken-down, crashed and illegally parked", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/wda6lkrux0i1j0x7j3o45fu014u98a6r/512x384.jpg"},
  
  {slug:"drift-city-car-driving-games", name:"Drift City Car Driving  Games", cat:"3D", emoji:"🕹️", desc:"Drift City Car Driving Games is a fast drifting game. Slide your car across race tracks, snowy highways and city roads. The longer and wider your drift, the more points and coins you earn. FEATURES - 40 levels in 4", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/1a6vy9mevmusbmab6m6hox8ccq14i2zj/512x384.jpg"},
  
  {slug:"monster-truck-stunt-cars", name:"Monster Truck Stunt cars", cat:"3D", emoji:"🕹️", desc:"# Monster Truck Stunt Cars Get ready for an exciting monster truck driving adventure! Jump behind the wheel of powerful monster trucks and perform incredible stunts across challenging tracks. Drive through massive", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/01rnyr1p3k8rx6tz0p434kr4ks02moaz/512x384.jpg"},
  
  {slug:"kart-volcano", name:"Kart Volcano", cat:"Racing", emoji:"🕹️", desc:"Race through volcanoes, deserts, forests, carnival streets and the ocean floor in Kart Volcano! Pick one of 12 drivers, customize your kart, grab item boxes, fire power-ups at your rivals and drift through every curve", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/8ztwujcxmlnukpqektsn1b0npu4rzd53/512x384.jpg"},
  
  {slug:"hover-rush", name:"Hover Rush", cat:"Racing", emoji:"🕹️", desc:"Race anti-gravity hovers over a tropical archipelago! Speed across 10 floating tracks above turquoise lagoons, jungle waterfalls, a smoking volcano, a tropical storm and a glowing sea at night. Hit boost pads, grab item", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/4fjq0kzdnxp5528bpkxeaz80yo6yacwm/512x384.jpg"},
  
  {slug:"mach-rush", name:"Mach Rush", cat:"Action", emoji:"🕹️", desc:"Fly a fighter jet through canyons, islands and seas. Dodge missiles, sink warships, and unlock 14 jets in 144 levels across 16 maps.", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/xxyoatucaibl7ca8pvt9u2z5zx21qm9d/512x384.jpg"},
  
  {slug:"clutchcraft-drive-car-driving", name:"ClutchCraft Drive: Car Driving", cat:"3D", emoji:"🕹️", desc:"**STEERNOVA &ndash; Real Car Driving Simulator** Get behind the wheel and experience the thrill of realistic car driving! Explore detailed city streets, drive through challenging roads, master parking skills, and learn", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/ggi3bte1vfb9m7neiooy4aeqknr8haoh/512x384.jpg"},
  
  {slug:"last-frontier", name:"Last Frontier", cat:"Action", emoji:"🕹️", desc:"Defend your base in a 3D real-time strategy battle. Build barracks, factories and towers, train infantry, tanks, artillery and aircraft, and lead your commander into the fight. Each building pad is upgraded by running", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/2pkaqbrzvwkya6o8uxtw73aaednhhvfh/512x384.jpg"},
  
  {slug:"jelly-vortex-3d", name:"Jelly Vortex 3D", cat:"Puzzles", emoji:"🕹️", desc:"Welcome to Jelly Vortex 3D, a fun and addictive color-sorting puzzle adventure! Dive into a colorful 3D world where your goal is to sort vibrant jelly pieces and organize them by color. Use your logic, strategy, and", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/pex9kjqp1igfkttn2o96jk7gwl2h11gg/512x384.jpg"},
  
  {slug:"prado-parking-master-3d", name:"Prado Parking Master 3D", cat:"Boys", emoji:"🕹️", desc:"Get ready for an exciting 3D Prado Car Parking adventure! Drive a powerful luxury SUV through challenging parking courses, navigate tight spaces, avoid obstacles, and park your vehicle perfectly. Complete 5 challenging", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/k0xsy9r7ncw790mai4fwlo7kh4fnhyam/512x384.jpg"},
  
  {slug:"moon-dust-simulator", name:"Moon Dust Simulator", cat:"Arcade", emoji:"🕹️", desc:"Sweep the Moon clean! Start with a toothbrush, brush up colorful moon dust, pack it into capsules and deliver it to your ship for cash. Upgrade through 20 tools, from brooms and vacuums to rovers and a giant cleaning", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/8vg4m5slioj3lxy15oielve5hrirh9zu/512x384.jpg"},
  
  {slug:"moto-x3m", name:"Moto X3M", cat:"Racing", emoji:"🏍️", desc:"Master off-road circuits and perform stunts in Moto X3M. This bike racing game is playable online for free on desktop, iOS, and Android devices. Beat the clock.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/moto-x3m/big_preview/6863e1c77f624087bae1d217cdf4c240_og.jpg"},
  
  {slug:"mr-racer-car-racing", name:"MR RACER - Car Racing", cat:"Racing", emoji:"🏎️", desc:"Drive supercars through traffic in MR RACER - Car Racing. Complete missions and customize your ride in this free online game for desktop, iOS, and Android devices.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/mr-racer-car-racing/big-preview/45ff957c535b47b7b3c3bc1a365201f6_og.jpg"},
  
  {slug:"epic-empire-tower-defense", name:"Epic Empire: Tower Defense", cat:"Strategy", emoji:"🏰", desc:"Defend your kingdom from waves of enemies in this tower defense game. Control heroes, build towers, and upgrade skills. Play this strategy game online for free.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/epic-empire-tower-defense/big-preview/e36d9a6a44964f5f8add3f0947fa390d_og.jpg"},
  
  {slug:"zombie-derby", name:"Zombie Derby", cat:"Racing", emoji:"🏎️", desc:"Drive through hordes of the undead in this racing game. Manage your fuel and nitro to survive. Play this game online for free on desktop, iOS, and Android.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/zombie-derby/big-preview/2540efe567a44658975ece5322e0c70f_og.jpg"},
  
  {slug:"epic-battle-simulator-2", name:"Epic Battle Simulator 2", cat:"Strategy", emoji:"⚔️", desc:"Develop unique strategies and lead your army to victory in this simulation game. Play online for free on desktop, iOS, and Android devices with realistic physics.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/epic-battle-simulator-2/big-preview/5c1998558eb34c5aa9d63d8843542aa5_og.jpg"},
  
  {slug:"rivals-fps-online-shooter", name:"RIVALS FPS: Online Shooter", cat:"Shooting", emoji:"🎯", desc:"Experience dynamic first-person shooting in RIVALS FPS: Online Shooter. Join competitive arena battles for free online on your desktop, Android, or iOS device.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/rivals-fps-online-shooter/big_preview/f09adf25db724a509d28d6427dfd4d7c_og.jpg"},
  
  {slug:"age-of-heroes", name:"Age of Heroes", cat:"Adventure", emoji:"⚔️", desc:"Build an army and defend towers across history in Age of Heroes. This tactical RPG is playable online for free on desktop, iOS, and Android devices.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/age-of-heroes/big_preview/2edf00207ba34813b41dd9b22da461c4_og.jpg"},
  
  {slug:"deadly-descent", name:"Deadly Descent", cat:"Adventure", emoji:"🏔️", desc:"Navigate your car down a mountain track filled with obstacles in this driving simulator. Play this game online for free on your desktop, Android, or iOS device.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/deadly-descent/big-preview/cd3969f230d54e6abe01716483d55c8a_og.jpg"},
  
  {slug:"barry-prison-parkour-escape", name:"Barry Prison: Parkour Escape!", cat:"Adventure", emoji:"🏃", desc:"Outwit the warden and navigate obstacle courses to escape in this obby game. Play this prison adventure online for free on your desktop, Android, or iOS device.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/barry-prison-parkour-escape/big-preview/4573be679daa449f83e245f8242ecb23_og.jpg"},
  
  {slug:"backgammon-multiplayer", name:"Backgammon", cat:"Board", emoji:"🎲", desc:"Master the classic game of Backgammon online for free. Use strategy to move your pieces and clear the board before your opponent on desktop, iOS, or Android.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/backgammon-multiplayer/big-preview/763a51507ab541d6a86327001536b609_og.jpg"},
  
  {slug:"cooking-city", name:"Cooking City", cat:"Simulation", emoji:"🍳", desc:"Master your time management skills in this cooking simulator. Prepare dishes for customers in various restaurants online for free on your desktop browser.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/cooking-city/big-preview/a613289a041d4af798d600782f703899_og.jpg"},
  
  {slug:"piece-of-cake-merge--bake", name:"Piece of Cake: Merge & Bake", cat:"Puzzle", emoji:"🍰", desc:"Restore your grandfather's café in this merge puzzle game. Combine ingredients, unlock dishes, and renovate 21 locations. Playable online and free on mobile or desktop.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/piece-of-cake-merge--bake/big_preview/b772122937124aa6b59d6e130537c8a8_og.jpg"},
  
  {slug:"retro-ucity", name:"µCity", cat:"Retro", emoji:"🏙️", desc:"A tiny city-building simulation for the Game Boy Color. Zone districts, lay power lines and grow your city.", license:"Homebrew", source:"EmulatorJS + AntonioND", thumb:""},
  
  {slug:"retro-into-the-blue", name:"Into the Blue", cat:"Retro", emoji:"🎮", desc:"A match-three puzzle game for the Game Boy (2018). Panels rise from the bottom — line up three or more to clear them.", license:"Homebrew", source:"EmulatorJS + Jonas Fischbach", thumb:"/assets/thumbs/retro-into-the-blue.jpg"},
  
  {slug:"2048", name:"2048", cat:"Puzzle", emoji:"🔢", desc:"Slide the tiles and combine matching numbers to reach 2048. A classic number puzzle, free in your browser.", license:"MIT", source:"gabrielecirulli/2048", thumb:"/assets/thumbs/2048.jpg"},
  
  {slug:"snake", name:"Snake", cat:"Arcade", emoji:"🐍", desc:"Eat, grow, don't hit the wall or yourself. The timeless arcade snake, with arrow keys or swipe.", license:"MIT", source:"Self-hosted implementation", thumb:"/assets/thumbs/snake.jpg"},
  
  {slug:"tetris", name:"Tetris Blocks", cat:"Puzzle", emoji:"🧱", desc:"Stack falling blocks, clear lines, chase a high score. Keyboard controls, no download needed.", license:"MIT", source:"Self-hosted implementation", thumb:"/assets/thumbs/tetris.jpg"},
  
  {slug:"minesweeper", name:"Minesweeper", cat:"Puzzle", emoji:"💣", desc:"Clear the field without hitting a mine. Numbers tell you where the mines hide.", license:"MIT", source:"Self-hosted implementation", thumb:"/assets/thumbs/minesweeper.jpg"},
  
  {slug:"memory-match", name:"Memory Match", cat:"Puzzle", emoji:"🃏", desc:"Flip cards and find all matching pairs in as few moves as you can.", license:"MIT", source:"Self-hosted implementation", thumb:"/assets/thumbs/memory-match.jpg"},
  
  {slug:"breakout", name:"Breakout", cat:"Arcade", emoji:"🧱", desc:"Bounce the ball, break all the bricks. Move the paddle with mouse or arrow keys.", license:"MIT", source:"Self-hosted implementation", thumb:"/assets/thumbs/breakout.jpg"},
  
  {slug:"asteroids", name:"Asteroids", cat:"Shooting", emoji:"☄️", desc:"Pilot your ship, shoot asteroids, avoid collisions. A space arcade classic.", license:"MIT", source:"attogram/games", thumb:"/assets/thumbs/asteroids.jpg"},
  
  {slug:"tic-tac-toe", name:"Tic Tac Toe", cat:"Puzzle", emoji:"❌", desc:"Three in a row wins. Play against the computer or a friend on the same screen.", license:"MIT", source:"Self-hosted implementation", thumb:"/assets/thumbs/tic-tac-toe.jpg"},
  
  {slug:"flappy-bird", name:"Flappy Bird", cat:"Arcade", emoji:"🐦", desc:"Tap to flap through the pipes. Simple to learn, hard to master.", license:"MIT", source:"Self-hosted implementation", thumb:"/assets/thumbs/flappy-bird.jpg"},
  
  {slug:"pong", name:"Pong", cat:"Sports", emoji:"🏓", desc:"The original video game. Bounce the ball past your opponent's paddle.", license:"MIT", source:"Self-hosted implementation", thumb:"/assets/thumbs/pong.jpg"},
  
  {slug:"space-invaders", name:"Space Invaders", cat:"Shooting", emoji:"👾", desc:"Defend Earth from waves of invaders. Move, shoot, don't let them land.", license:"MIT", source:"Self-hosted implementation", thumb:"/assets/thumbs/space-invaders.jpg"},
  
  {slug:"hearts", name:"Hearts Card Game", cat:"Card", emoji:"♥️", desc:"A classic trick-taking card game. Avoid hearts and the Queen of Spades.", license:"MIT", source:"attogram/games", thumb:"/assets/thumbs/hearts.jpg"},
  
  {slug:"sudoku", name:"Sudoku", cat:"Puzzle", emoji:"🔢", desc:"Fill the 9x9 grid so every row, column and box has 1-9. Daily brain training.", license:"MIT", source:"Self-hosted implementation", thumb:"/assets/thumbs/sudoku.jpg"},
  
  {slug:"connect-four", name:"Connect Four", cat:"Puzzle", emoji:"🔴", desc:"Drop discs and get four in a row before your opponent does.", license:"MIT", source:"Self-hosted implementation", thumb:"/assets/thumbs/connect-four.jpg"},
  
  {slug:"whack-a-mole", name:"Whack a Mole", cat:"Arcade", emoji:"🔨", desc:"Moles pop up — whack them fast. 30 seconds, how many can you get?", license:"MIT", source:"Self-hosted implementation", thumb:"/assets/thumbs/whack-a-mole.jpg"},
  
  {slug:"dino-run", name:"Dino Run", cat:"Arcade", emoji:"🦕", desc:"Jump over cacti and dodge birds in this endless runner. Space to jump.", license:"MIT", source:"Self-hosted implementation", thumb:"/assets/thumbs/dino-run.jpg"},
  
  {slug:"simon", name:"Simon Says", cat:"Puzzle", emoji:"🎵", desc:"Repeat the colour and sound pattern. Each round adds one more step.", license:"MIT", source:"Self-hosted implementation", thumb:"/assets/thumbs/simon.jpg"},
  
  {slug:"hangman", name:"Hangman", cat:"Word", emoji:"🔤", desc:"Guess the hidden word letter by letter before the drawing is complete.", license:"MIT", source:"Self-hosted implementation", thumb:"/assets/thumbs/hangman.jpg"},
  
  {slug:"solitaire", name:"Solitaire", cat:"Card", emoji:"♠️", desc:"The classic single-player card game. Sort all cards by suit and rank.", license:"MIT", source:"attogram/games", thumb:"/assets/thumbs/solitaire.jpg"},
  
  {slug:"maze", name:"Maze Runner", cat:"Puzzle", emoji:"🌀", desc:"Find your way out of the maze. Arrow keys to move, beat the clock.", license:"MIT", source:"Self-hosted implementation", thumb:"/assets/thumbs/maze.jpg"},
  
  {slug:"zigzag-snow-mountain", name:"ZigZag Snow Mountain", cat:"Hypercasual", emoji:"⛷️", desc:"Guide your skier down the snowy mountain, zigzag between obstacles and collect coins. Tap to change direction — one wrong turn ends the run.", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/s94xp6bhitgjcptd98dyph9u5m7i922m/512x384.jpg"},
  
  {slug:"hero-rescue-puzzle", name:"Hero Rescue Puzzle", cat:"Puzzle", emoji:"🦸", desc:"Pull the pins in the right order to rescue the hero, defeat enemies and grab the treasure. A physics puzzle where each pin changes the outcome.", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/3596x93682lmj4cn7mrtldmfhviig7jj/512x384.jpg"},
  
  {slug:"love-balls-2d", name:"Love Balls 2D", cat:"Puzzle", emoji:"💕", desc:"Draw lines to bring the two love balls together. Simple to start, tricky to master — every level needs a new clever line.", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/1l6pgl750zi41o2cktmkmr71dntshaej/512x384.jpg"},
  
  {slug:"happy-glass", name:"Happy Glass", cat:"Puzzle", emoji:"🥛", desc:"Draw a path so the water flows into the happy glass. Fill it up without spilling — physics, timing and a steady hand.", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/dayksem3hjbea9vsbklh6wqi213w9121/512x384.jpg"},
  
  {slug:"pou-online", name:"Pou Online", cat:"Puzzle", emoji:"🐾", desc:"Play with Pou in this online puzzle adventure. Feed, play and solve mini-challenges with the little alien pet.", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/jyeazqa0x7ym5xcq22g9mgv74s5tift1/512x384.jpg"},
  
  {slug:"zombie-bears-night-shooting", name:"Zombie Bears Night Shooting", cat:"Shooting", emoji:"🧟", desc:"Zombies are coming at night — grab your weapon and hold the line. Aim, shoot, survive wave after wave.", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/a8i3hhixhynwz435k72ub0ichgummyfw/512x384.jpg"},
  
  {slug:"roof-rails-color-stack-3d", name:"Roof Rails - Color Stack 3D", cat:"Arcade", emoji:"🌈", desc:"Slide down the rails, stack colours and avoid falling off. A fast 3D arcade runner with bright, satisfying stacks.", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/3zsuu4fl12ujvfaa5yett2t1rclzg9jj/512x384.jpg"},
  
  {slug:"among-us-online-edition", name:"Among Us Online Edition", cat:"Arcade", emoji:"👾", desc:"The popular social deduction game in your browser. Complete tasks, watch out for impostors, and vote wisely.", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/luye5rleios737wp2o9wjq7h577gl937/512x384.jpg"},
  
  {slug:"minecraft-remake", name:"Minecraft Remake", cat:"Arcade", emoji:"⛏️", desc:"Build and explore in this browser remake of Minecraft. Mine blocks, craft and create your own world, no download needed.", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/cznxajp3hzb8l7gtebaq96s0pbrfa33m/512x384.jpg"},
  
  {slug:"baldis-basics", name:"Baldi's Basics v1.4.3", cat:"Arcade", emoji:"🏫", desc:"Collect notebooks and escape Baldi's school. Solve maths problems, avoid Baldi, and don't get caught in the halls.", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/iiifrxhcnzl5laslqf3eaedtevjzb2bu/512x384.jpg"},
  
  {slug:"jumper-jam", name:"Jumper Jam", cat:"Arcade", emoji:"🦘", desc:"Jump from platform to platform, go as high as you can. A quick arcade jumper — one mistimed jump and you fall.", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/vz014sa1b6hbw3jquxwgn98xhzux2uhz/512x384.jpg"},
  
  {slug:"super-runcraft", name:"Super RunCraft", cat:"Arcade", emoji:"🕹️", desc:"Super RunCraft is a wonderful 3D Run Game, run through a long minecraft land to collect rows of golden coins, number of special items such as Hoveboard along your running lane and avoid the obstacles in your way. The", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/syoymgm7jw290t7mz0hpqjqmc8yqlmrd/512x384.jpg"},
  
  {slug:"skate-hooligans", name:"Skate Hooligans", cat:"Arcade", emoji:"🕹️", desc:"Cowabunga! Little hooligans are on the way! Choose your hero and arrange an amazing disorder ^_^ Collect coins, upgrade bonuses, buy cool skateboards, avoid dangerous obstacles and get scores as much as you can.", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/vy07es6s71vci1su3wzcqrp7e3ym0vtw/512x384.jpg"},
  
  {slug:"12-minibattles", name:"12 MiniBattles", cat:"Arcade", emoji:"🕹️", desc:"12 MiniBattles is a fun multiplayer game where you and a friend can play against each other on a variety of games. This physics style game has different game types that you can play at random including a soccer match", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/nuiyi3o2g6fktyjda55g42v3qe5a3hbq/512x384.jpg"},
  
  {slug:"squid-game-green-light-red-light-hints", name:"Squid Game Green Light Red Light Hints", cat:"Arcade", emoji:"🕹️", desc:"Invite to Squid Game. Invite to a fair game of Red lights, eco-friendly lights. Whoever wins this game will win a great deal of prize money. Stop at the red light. Continue when the thumbs-up is on. Follow your", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/etp56l9axninm4hfoue23ndqkvbpkho2/512x384.jpg"},
  
  {slug:"hunter-assassin", name:"Hunter Assassin", cat:"Arcade", emoji:"🕹️", desc:"Control the assassin and hunt down your targets one by one. Use your surroundings and shadows to stay hidden from flashlights. Targets with automatic machine guns can be lurking around each corner. Attack them swiftly", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/l1c9pkpxysqy1cao2axakpf8mdwkv8qg/512x384.jpg"},
  
  {slug:"bitlife-life-simulator", name:"BitLife - Life Simulator", cat:"Arcade", emoji:"🕹️", desc:"How will you live your BitLife? Will you try to make all the right choices in an attempt to become a model citizen sometime before you die? You could marry the love of your life, have kids, and pick up a good education", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/sunlne8825d1006jux3b1xrl9vda49f1/512x384.jpg"},
  
  {slug:"bottle-avenger-royale", name:"Bottle Avenger Royale", cat:"Arcade", emoji:"🕹️", desc:"Welcome to Bottle Avenger Royale! In this action-packed shooting game, you play as the brave bottle avenger. You will battle zombies or enemies to survive. Keep buying guns to upgrade merges of the same level to", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/xjr31mcvx0827ppslyqbiwp8pym1qlso/512x384.jpg"},
  
  {slug:"red-ball-forever-2", name:"Red Ball Forever 2", cat:"Arcade", emoji:"🕹️", desc:"Red Ball Forever 2 is an exciting Platformer where you must race through the levels collecting special items and defeating the evil guys. The monsters has invaded the beautiful kingdom the RedBall kingdom have peaceful", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/xvgxy279mumukqpyzmvgwn8x1cw7g9cd/512x384.jpg"},
  
  {slug:"dune-surfer-3d", name:"Dune Surfer 3d", cat:"Arcade", emoji:"🕹️", desc:"It’s a ball.. it’s a stickman… it’s a dune surfer! Go from ball, to stickman, to ball, to stickman as you draw, surf and slide your way out of the dunes, dune surfer stickman dude! You’re just a poor stickman dune", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/gbql8397haa6gwa3a1h6nqopiwsr0s0g/512x384.jpg"},
  
  {slug:"mini-switcher", name:"Mini Switcher", cat:"Arcade", emoji:"🕹️", desc:"Switch the gravity to guide a small blob character to the goal, traveling around 30 levels and facing a variety of colorful enemies and obstacles with different behaviors. You can also test your ability on the speed run", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/r822rwum14259b7wacvt1acbp3e4jv4a/512x384.jpg"},
  
  {slug:"save-the-kitten", name:"Save the Kitten", cat:"Arcade", emoji:"🕹️", desc:"Angry cat Tom lured the kittens to his tower. Rescue as many kittens as you can! Run, beat them off with a trampoline and carry them to the basket of mommy kitty! Kittens really hope for your help. Who will save them if", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/t4v0qrawern26uvsty9514lwespe8e8r/512x384.jpg"},
  
  {slug:"sonic-jump-fever-2", name:"Sonic Jump Fever 2", cat:"Arcade", emoji:"🕹️", desc:"Play as Sonic the Hedgehog as you run, dash, jump and spin your way across stunning 3D environments in his first fun endless runner game. Swipe your way over and under as you race past challenging obstacles in this free", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/ccx4nhc8sickzxyip9zwuk85vgyo4bsg/512x384.jpg"},
  
  {slug:"relic-runway", name:"Relic Runway", cat:"Arcade", emoji:"🕹️", desc:"Are you ready for crazy adventures? Run as far as you can, collect coins and upgrade useful bonuses, pick up relic parts to discover ancient artifacts, break idols to unlock amazing characters, and compete with your", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/ralnzjj3b624rjg6a31vl3m7tz7p8tf0/512x384.jpg"},
  
  {slug:"paper-io-2", name:"Paper.IO 2", cat:"Arcade", emoji:"🕹️", desc:"Capture new territories and defeat enemies in the new exciting game Paper.io 2Each player starts out with a small island, make it larger by adding new areas to it, but watch out for enemies. You are safe on your own", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/1skj7a1hu68a1p31ag4ywljq4gb18oma/512x384.jpg"},
  
  {slug:"temple-quest", name:"Temple Quest", cat:"Arcade", emoji:"🕹️", desc:"You shouldn't have stolen that artifact! Now you have to run for your life in an endless maze of temple ruins! Collect golden idols, ancient coins and power-ups. Master various obstacles, upgrade power-ups and fulfill", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/wfpm0h4x8a3f63snpkqvfp3b7mhx9z25/512x384.jpg"},
  
  {slug:"brazen-ball", name:"Brazen Ball", cat:"Arcade", emoji:"🕹️", desc:"You play as a robotic ball as you roll your way through challenging obstacles like sawblades, lasers, meteor showers, trap gates, spikes, magnets, water, wind and many more. Your task is to reach the end marker in as", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/ng1cndnhqyt5r986yphveujeapfk5sca/512x384.jpg"},
  
  {slug:"super-bowmasters", name:"Super Bowmasters", cat:"Arcade", emoji:"🕹️", desc:"Test your skills and play one of the most competitive archery games ever created. Master all the places and discover their secrets. Be the best archer and dominate the rankings! Super bowmasters games is the hottest and", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/5mkmynq4be442ueej5j4l6pommnieubj/512x384.jpg"},
  
  {slug:"super-mario-and-sonic", name:"Super Mario and Sonic", cat:"Arcade", emoji:"🕹️", desc:"Join your friend Mario and Sonic in this fantastic adventure. Get the party started in this fantasy world and help your friends to complete and survive the magic adventure levels with full of dangerous. Choose the", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/9s24edtryabq95mg8ebnh5ej6z60lpwp/512x384.jpg"},
  
  {slug:"ben10-omnirush", name:"Ben10 Omnirush", cat:"Arcade", emoji:"🕹️", desc:"Play now and have fun with Ben10 Omnirush first here at kiz10.com !!! Have fun with this spectacular game of action, adventure, running and lots of fun. Accompany Ben to complete this new mission to save the world once", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/6c71auwqycmsdn0g8wl7lkf3439dw3o3/512x384.jpg"},
  
  {slug:"super-buddy-kick-2", name:"Super Buddy Kick 2", cat:"Arcade", emoji:"🕹️", desc:"The most exciting action game is back to help you relieve stress in an unconventional way. Choose from an arsenal of weapons and devices to take out the Buddyman and he’ll respawn when you’re finished. Buddyman acts as", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/5619zg9qpx36cf48dkcof8v06wl4q00w/512x384.jpg"},
  
  {slug:"super-onion-boy", name:"Super Onion Boy", cat:"Arcade", emoji:"🕹️", desc:"Super Onion Boy is a fun platform game, your mission is to save the princess from the terrible monster that imprisoned her in a magic bubble, defeat all the monsters along the way and dodge obstacles until you reach the", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/jtnau6xam3feocnkwi3xn5i4qc0l1kpk/512x384.jpg"},
  
  {slug:"worms-zone-a-slithery-snake", name:"Worms Zone a Slithery Snake", cat:"Arcade", emoji:"🕹️", desc:"Worms Zone is a game with a dynamic storyline. Start growing your worm right now. Having tried to get a real anaconda, a small worm never gets stuck in one place – he’s ready to bite everyone. However, there is a danger", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/vz6qfngm0al4ggz8f3lrvrfrqrm1q19m/512x384.jpg"},
  
  {slug:"roads-off-fury", name:"Roads Off Fury", cat:"Arcade", emoji:"🕹️", desc:"THERE'S NO ESCAPE. Take the chance to FIGHT for your life in this charged-up ENDLESS arcade, free-roaming racing game. Select your POST-APOCALYPTIC modified vehicle and drive it through the deserted ruins of the wasted", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/j7i04kr27e5fxm6k3xbzse85zwu20s0k/512x384.jpg"},
  
  {slug:"gangsters", name:"Gangsters", cat:"Arcade", emoji:"🕹️", desc:"Gangsters is a pixelated shooting mayhem in which the players takes control of a gang. The goal of the game is to defend your turf against rival gangs. The graphics are retro and pixelated but the gameplay is exciting,", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/u3dgtp4b684ecqdv0k2teqczdtw8p38k/512x384.jpg"},
  
  {slug:"super-hitmasters", name:"Super HitMasters", cat:"Arcade", emoji:"🕹️", desc:"Become a spy and catch all your enemies to complete the levels. Start with simple puzzles and then advance to some challenging levels! Collect coins and unlock tons of weapons, clothes, and characters and prepare your", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/dbw075jc1l806ljs2z1tb69gl1rtb3up/512x384.jpg"},
  
  {slug:"super-rocket-buddy", name:"Super Rocket Buddy", cat:"Arcade", emoji:"🕹️", desc:"You have a cannon loaded with Buddies, and your goal is to get to the target. Solve puzzling challenges, avoid obstacles, and use as many Buddies as you need to complete every level. The game features your favorite", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/unyq7wdvi2bfsowowi91obhn48m9kuje/512x384.jpg"},
  
  {slug:"yeti-sensation", name:"Yeti Sensation", cat:"Arcade", emoji:"🕹️", desc:"OH NOOO! Bigfoot wanted! Help embarrassed Yeti to find a way to his new home, avoid sly snowmen, dangerous traps and other obstacles, buy new boosts in the supermarket and run away as further as possible.", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/ieco9m12x4vrouir7ytnupfddkucj1u2/512x384.jpg"},
  
  {slug:"subway-surfer-seoul", name:"Subway Surfer Seoul", cat:"Arcade", emoji:"🕹️", desc:"Descend into the subway and head towards a new adventure in the endless runner Subway Surfers: Seoul! Dodge obstacles, trains and more, collect coins and don\\\\\\\t let the grumpy inspector catch up with you!", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/4jerk8kzzf8685dbcx2buh5i3o5zhugu/512x384.jpg"},
  
  {slug:"fall-guyz", name:"Fall Guyz", cat:"Arcade", emoji:"🕹️", desc:"Play and have fun with this new Fall Guyz game here first on kiz10.com !!!! Now you can enjoy a new exclusive kiz10 game, a casual and entertaining adventure.In this opportunity, the fall guyz characters start an", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/epnb67gydx5b7fujbf6glepkav88egqs/512x384.jpg"},
  
  {slug:"bridge-race", name:"Bridge Race", cat:"Arcade", emoji:"🕹️", desc:"Do you want to be a champion? Try this game Bridge Race that combines collecting and racing! You need to collect your colored blocks to build the stairs to the next floor, not only to collect them quickly but also to", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/rex0qifhxf6n3jluvsgqkr84t7rp9260/512x384.jpg"},
  
  {slug:"geometry-dash-bloodbath", name:"Geometry Dash Bloodbath", cat:"Arcade", emoji:"🕹️", desc:"Welcome to Geometry dash Bloodbath game, the most harded game out there. Jump and fly your way through danger in this rhythm-based action platformer! is back with a brand new adventure, New levels, new music, new", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/vprj427n2nce955l5x81ewf1t3hohmfd/512x384.jpg"},
  
  {slug:"stack-colors", name:"Stack Colors!", cat:"Arcade", emoji:"🕹️", desc:"In the stacking colors game, transport as many bricks as possible. Each level will show you a new scene, and there is a person with a different color. Pay attention to transporting bricks of the same color, avoiding", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/um7ax218g49sfsbbyq13kb6a7ydv47wy/512x384.jpg"},
  
  {slug:"join-clash-3d", name:"Join Clash 3D", cat:"Arcade", emoji:"🕹️", desc:"Join Clash 3d is an interesting arcade game. It mix avoid, shooting, gun, collect, and monster elements. This is a very funny game with an easy method. In the beginning, you have only one soldier, you have to blow the", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/3djzlr2cyn9t88k4pguq094urdlly2f1/512x384.jpg"},
  
  {slug:"pacman-html5", name:"Pacman html5", cat:"Arcade", emoji:"🕹️", desc:"Play up to 70 unique levels of Pacman on the computer, tablet, or smartphone. Collect all small and big dots to score high and eat the fruits to score more. When you eat the big dots the enemies will decrease the speed", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/5st7c6asbp9urr7swcbr2im8b1ch0336/512x384.jpg"},
  
  {slug:"angry-birds", name:"Angry Birds", cat:"Arcade", emoji:"🕹️", desc:"Angry Birds take your chances in the Star Cup as you go head-to-head against individual opponents! Compete with your friends, come out on top, and climb the leaderboards to become the BEST Angry Birds player in the", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/l2j6sipnjw79fhhb6qw0yut18y0rusrg/512x384.jpg"},
  
  {slug:"fall-bros", name:"Fall Bros", cat:"Action", emoji:"🕹️", desc:"The ultimate Fall Guys experience for the web: Fall Bros! Play the most popular level Hex-A-Gone any time and for free! Survive the longest by not falling down. Kick your opponents off the platforms. Improve your play", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/vnvpo9h7zc6phugavlw7xni2thz4no4i/512x384.jpg"},
  
  {slug:"temple-run-2", name:"Temple Run 2", cat:"Action", emoji:"🕹️", desc:"Play Temple Run 2 Online - Run, jump, turn and slide through the endless landscape once again in this online version of the game Temple Run 2!", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/pkyyuilfrqkcdnmrxsg60j22ypk0peje/512x384.jpg"},
  
  {slug:"elastic-man", name:"Elastic Man", cat:"Action", emoji:"🕹️", desc:"Elastic Man is a funny game where you get to pinch and drag a man with a very elastic face. The man is like a balloon that will stretch when pulled. There is no goal in this game, just have fun pulling and dragging the", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/w4ytwq2s6jdvmkp8tzplxo8jphjsvuxr/512x384.jpg"},
  
  {slug:"drunken-boxing", name:"Drunken Boxing", cat:"Action", emoji:"🕹️", desc:"The Drunken battles continues with the new game. In Drunken Boxing, the Drunken Boxers come to the arena and try to knock out each other. You can make quick punches in the game, but watch out for your Energy Bar! If you", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/u7kh677sengcitk8eaib93z7gsiub9f6/512x384.jpg"},
  
  {slug:"stickman-street-fighter-3d", name:"Stickman Street Fighter 3D", cat:"Action", emoji:"🕹️", desc:"It is time to fight in kz10 !! Choose your favorite stickman and perform awesome combos to take the opponents down! Even more awesome is to be the one in the middle who kicks everyones ass. In Stickman Ultimate", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/r5tug67vf8lprllpnawokwa3p0xddr45/512x384.jpg"},
  
  {slug:"masked-forces", name:"Masked Forces", cat:"Shooting", emoji:"🕹️", desc:"If you enjoy CS:GO or CoD you’re in the right place. Masked Forces is a shooting action game which put at stake all your strategy and survival skills. You mission is to kill all your enemies, survive in a battlefield", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/yegbmgyux5zskmrg3yiulecah334hmrf/512x384.jpg"},
  
  {slug:"subway-clash-3d", name:"Subway Clash 3D", cat:"Shooting", emoji:"🕹️", desc:"You fight in an underground area of Moscow metro full of angry KGB soldiers trying to bring you down. Pick up various weapons to defend yourself and lead to the top of rank table!", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/nduhdua0yup2i0k4llj5wjplk62np2md/512x384.jpg"},
  
  {slug:"warfare-area", name:"Warfare Area", cat:"Shooting", emoji:"🕹️", desc:"It's war and enemies have captured your base. You are the last soldier from your troop in the base so only you can fight it back. Take the rifle and get ready for the battle.", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/3fnk3e4rstcjsqolnpx158fe8ptp74eb/512x384.jpg"},
  
  {slug:"blocky-siege", name:"Blocky Siege", cat:"Shooting", emoji:"🕹️", desc:"Blocky Siege features cool pixel graphics and intense multiplayer battles with other players, play as special forces soldier and use three types of weapons to shoot rival players and win each round.", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/udk0fqa59dkuxfajhd8hhfpxs1d1wsxu/512x384.jpg"},
  
  {slug:"winter-clash-3d", name:"Winter Clash 3D", cat:"Shooting", emoji:"🕹️", desc:"This Christmas the evil elves plan to take over the Santa’s secret place, and summon the evil Baba Yaga, also known as Pagan Idol to this world. Don’t let this happen. Take your gun and impose punishment on all who", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/ya6quof6a1n40xzz3thz9xekh349abp8/512x384.jpg"},
  
  {slug:"superbike-hero", name:"Superbike Hero", cat:"Racing", emoji:"🕹️", desc:"Compete across Europe and the Middle East as you race in the Superbike Series. Boost between opponents, hang-on around tight corners, collect coins and upgrade your superbike for the next race. Are you the Superbike", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/xadmbez57xew9kcphfpu4gaye4bt38t1/512x384.jpg"},
  
  {slug:"mad-day-special", name:"Mad Day Special", cat:"Racing", emoji:"🕹️", desc:"Battle the oncoming Alien Invasion of Earth in this epic racer to rescue your beloved pet Octopus Fluffy and escape. Mad Day is a combination of an awesome racing and alien shooting game. Upgrade your Car, Guns, Armor,", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/x1pcf3eqnaqhacegno3gkgidfsbz7us4/512x384.jpg"},
  
  {slug:"stock-car-hero", name:"Stock Car Hero", cat:"Racing", emoji:"🕹️", desc:"Compete across North America as you race in the Stock Car Series. Dodge traffic, boost around banked corners, collect coins and upgrade your car for the next race. Are you the Stock Car Hero?", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/txgllriwza6em334ggoovyr508bo2wow/512x384.jpg"},
  
  {slug:"grand-prix-hero", name:"Grand Prix Hero", cat:"Racing", emoji:"🕹️", desc:"Compete across multiple continents as you race in the Grand Prix Series. Dodge traffic, boost at high speeds, collect coins and upgrade your car for the next race. Are you the Grand Prix Hero?", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/xuwx294k0sxrwr1g8ct6vfj0dr9mxymu/512x384.jpg"},
  
  {slug:"supercars-drift-racing-cars", name:"Supercars Drift Racing Cars", cat:"Racing", emoji:"🕹️", desc:"Legends take the wheel of real cars from premium prominent epic car producers, such as Ferrari, Porsche, Lamborghini, and W Motors, among many various other worldwide brands. Drive, enhance and also carry out feats", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/k4ffna0j4dx8xjr7njii048zsn2ydw5h/512x384.jpg"},
  
  {slug:"fireboy-watergirl-island-survival-3", name:"Fireboy Watergirl Island Survival 3", cat:"Adventure", emoji:"🕹️", desc:"fireboy & Watergirl Island Survival 3 - new level ,new challenge. Fireboy and Watergirl is in a Isolated island. There are many fierce monsters,cannibals,and other agencies.Full of danger.Come and help them escape from", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/2tlcz2gaua43ul01tg2qybhv57h9b94d/512x384.jpg"},
  
  {slug:"bike-race-rush", name:"Bike Race Rush", cat:"Adventure", emoji:"🕹️", desc:"Whether you're a boy or a girl, there are plenty of FUNKY characters to satisfy and lots of cool bikes to earn! Collect coins, complete quests, pass rank and so on! Updated with the coolest features and content of the", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/4bb52narsr9s57z5y7qlch5zhupiucld/512x384.jpg"},
  
  {slug:"tiles-hop-edm-rush", name:"Tiles Hop: EDM Rush!", cat:"Hypercasual", emoji:"🕹️", desc:"Let's Hop! You can now upload your own favorite songs to play! Let's Play & enjoy the music on the go. Special gifts and music for all.", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/b8v1c5kj91f5sk7bfqwl8quds6jylhsw/512x384.jpg"},
  
  {slug:"golf-king-3d", name:"Golf king 3D", cat:"Hypercasual", emoji:"🕹️", desc:"Realistic Multiplayer Golf at your fingertips! Join and Tee off now! From the creators of Mini Golf King comes a new Golf game featuring real-time 1v1 matches, realistic courses of stunning graphics, customizable", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/5jvtch06tn67htxzd4x6brzo20pmdyjb/512x384.jpg"},
  
  {slug:"moto-x3m-winter", name:"Moto X3M Winter", cat:"Sports", emoji:"🕹️", desc:"Welcome to the winter special of this awesome bike stunt game, Moto X3M 4: Winter. Drive your two-wheeler through challenging tracks full of deadly traps, ramps, explosives and obstacles and try to get to the finish", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/1gjwgvl2j0ipdd9ybezeavu04y1nqjen/512x384.jpg"},
  
  {slug:"moto-x3m-halloween", name:"Moto X3M Halloween", cat:"Sports", emoji:"🕹️", desc:"Moto X3M is a bike racing game with crazy stunts and a twist on deadly obstacles and explosive crashes. With the different levels in challenges, the extremely dangerous but no less attractive high speed, the game will", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/hlmgvewlf6122xcmkubad7s5f0ajf1fo/512x384.jpg"},
  
  {slug:"basket-random", name:"Basket Random", cat:"Sports", emoji:"🕹️", desc:"Basketball is here with its most funny and random way. In Basket Random game, try to score a basket by using only one key with different variations from each other! Changing fields, changing players and changing balls", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/anaaahgt57d5t2tddrbc1m4qq97vz1jd/512x384.jpg"},
  
  {slug:"football-io", name:"Football.io", cat:"Sports", emoji:"🕹️", desc:"Football.io is fun addictive io game.You have to compete with 3 other players and eliminate them to win the game.", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/cx80i42fx1750j3bfk11laoibldijepw/512x384.jpg"},
  
  {slug:"golf-battle", name:"Golf Battle", cat:"Sports", emoji:"🕹️", desc:"The ultimate mini golf battle! Become King of the golf battle match! The perfect Golf Game for Casual Players, play online on mobile or PC!", license:"GameMonetize", source:"GameMonetize", thumb:"https://img.gamemonetize.com/w0ij1igcyt8yd96ppelksxcwulp0inye/512x384.jpg"},
  
  {slug:"retro-lunar-lancer", name:"Lunar Lancer", cat:"Retro", emoji:"🎮", desc:"A shoot 'em up for the Game Boy, made for the console's 35th anniversary (2024). Blast waves of enemies and keep your weapon charged.", license:"Homebrew", source:"EmulatorJS + Jonas Fischbach", thumb:"/assets/thumbs/retro-lunar-lancer.jpg"},
  
  {slug:"retro-retroid", name:"Retroid", cat:"Retro", emoji:"🎮", desc:"A Breakout / Arkanoid clone for the Game Boy (2016). 20 stages, power-ups, a boss battle and 8 chiptunes.", license:"Homebrew", source:"EmulatorJS + Jonas Fischbach", thumb:"/assets/thumbs/retro-retroid.jpg"},
  
  {slug:"driver-club-highway-racing", name:"Driver Club: Highway Racing", cat:"Racing", emoji:"🚗", desc:"Master high speed traffic racing on desktop. Overtake vehicles, upgrade your car, and customize your ride in this free online game. Experience realistic driving.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/driver-club-highway-racing/big-preview/037ce11afe4f4d58a0f93a6339db96b5_og.jpg"},
  
  {slug:"ragdoll-racing-extreme-downhill", name:"Ragdoll Racing: Extreme Downhill!", cat:"Racing", emoji:"🏁", desc:"Control a ragdoll stickman on dangerous tracks in this competitive racing game. Play online and for free on your desktop, Android, or iOS mobile device.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/ragdoll-racing-extreme-downhill/big_preview/8f4406e66d22496ab01d67381bc6dfe3_og.jpg"},
  
  {slug:"soccer-random", name:"Soccer Random", cat:"Sports", emoji:"⚽", desc:"Experience unpredictable physics-based soccer in this fast-paced game. Play online for free on desktop, iOS, and Android. Challenge the CPU or a friend locally.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/soccer-random/big-preview/6f59ef235c1e42198225c02473d66943_og.jpg"},
  
  {slug:"basket-random-playgama", name:"Basket Random (Playgama)", cat:"Sports", emoji:"🏀", desc:"Experience chaotic basketball with unpredictable physics in this ragdoll sports game. Playable online and free on desktop, iOS, and Android devices.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/basket-random/big_preview/796d7aa5c7c84741ae37cd1ae3da9c77_og.jpg"},
  
  {slug:"basketball-stars", name:"Basketball Stars", cat:"Sports", emoji:"⭐", desc:"Compete in 1-on-1 or 2-player basketball matches with famous athletes. Perform dunks and supershots in this free online game for desktop, iOS, and Android.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/basketball-stars/big_preview/2e0653c710ad43e09c40d1ba5968e447_og.jpg"},
  
  {slug:"golf-orbit", name:"Golf Orbit", cat:"Sports", emoji:"⛳", desc:"Launch golf balls to incredible heights in this casual sports game. Upgrade your gear, master your shots, and play online for free on desktop and mobile devices.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/golf-orbit/big-preview/e7f203e28b0745d880d1c0a995e9b213_og.jpg"},
  
  {slug:"hazmob-fps-online-shooter", name:"Hazmob FPS: Online Shooter", cat:"Shooting", emoji:"🔫", desc:"Experience intense multiplayer combat in Hazmob FPS: Online Shooter. Engage in various game modes on your desktop. This first-person shooter is playable online and free.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/hazmob-fps-online-shooter/big_preview/df01c609f8c44052b837b336d0e63617_og.jpg"},
  
  {slug:"aod--art-of-defense", name:"AOD - Art Of Defense", cat:"Shooting", emoji:"🛡️", desc:"Command your squad in this post-apocalyptic tower defense game. Build tech kingdoms, upgrade towers, and lead heroes in battles. Playable online and free on desktop.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/aod--art-of-defense/big_preview/748d6b91ce3c4a309fd6df323115b434_og.jpg"},
  
  {slug:"fruit-merge-playgama", name:"Fruit Merge: Juicy Drop Game", cat:"Arcade", emoji:"🍉", desc:"Combine identical fruits to create larger varieties in this matching puzzle. Play this game for free online on desktop, Android, and iOS devices.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/fruit-merge-playgama/big_preview/f88e2107d6554e668566d486ba0518a4_og.jpg"},
  
  {slug:"snake-2048-64be-1", name:"Snake 2048", cat:"Arcade", emoji:"🐍", desc:"Grow your snake by eating smaller cubes and dodging larger opponents. This game is free to play online on desktop, Android, and iOS devices.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/snake-2048-64be-1/big-preview/ac8a1a98a2a14b65a0a04ee3f82ef222_og.jpg"},
  
  {slug:"geometry-arrow-2", name:"Geometry Arrow 2", cat:"Arcade", emoji:"🔺", desc:"Navigate through 13 challenging cave levels in this skill game. Customize your character and dodge obstacles. Play this game online for free on desktop and mobile.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/geometry-arrow-2/big-preview/fa9899500c7145d3a791954f399fcb3b_og.jpg"},
  
  {slug:"block-blast-master", name:"Block Blast Master", cat:"Arcade", emoji:"🧱", desc:"Test your strategy in Block Blast Master. Drag and drop blocks to form lines and clear the board. This matching game is free to play online on Android, iOS, and desktop.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/preview/04a40614748247acb645c57a718f9e36_og.jpg"},
  
  {slug:"mahjong-classic", name:"Mahjong Classic", cat:"Puzzle", emoji:"🀄", desc:"Enjoy Mahjong Classic online for free. This solitaire game features unique level generation and popular layouts like Turtle and Dragon. Play on desktop, iOS, or Android.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/mahjong-classic/big-preview/730f65084d864a9baffefa86e110b106_og.jpg"},
  
  {slug:"nuts-puzzle-sort-by-color", name:"Nuts Puzzle: Sort By Color", cat:"Puzzle", emoji:"🔩", desc:"Sort colored nuts onto matching bolts in this brain-training puzzle game. Restore your garden as you play online for free on desktop, iOS, and Android devices.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/nuts-puzzle-sort-by-color/big_preview/faab3ed519024179b5a31afb72cdf675_og.jpg"},
  
  {slug:"bubble-shooter-tap--pop", name:"Bubble Shooter: Tap & Pop", cat:"Puzzle", emoji:"🫧", desc:"Test your skills in this bubble-shooter puzzle adventure. Unlock upgrades and bonuses as you pop bubbles. Play this game online for free on desktop and android.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/bubble-shooter-tap--pop/big-preview/c64cb16afcdf4a9b8aa6dde6b6cec88d_og.jpg"},
  
  {slug:"screw--pin-puzzle-levels", name:"Screw & Pin: Puzzle Levels", cat:"Puzzle", emoji:"🪛", desc:"Master this screw puzzle quest by strategically unlocking holes and clearing metal plates. Play this brain-training game online for free on desktop and mobile.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/screw-pin-puzzle-levels/big_preview/da9e577e17df48d1b4494f43c34126d2_og.jpg"},
  
  {slug:"color-sort-puzzle-milk-tea-sorting", name:"Color Sort Puzzle Milk Tea Sorting", cat:"Puzzle", emoji:"🧋", desc:"Sort colored liquids into bottles in this logic puzzle game. Play this brain training challenge online for free on desktop, iOS, and Android devices.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/color-sort-puzzle-milk-tea-sorting/big-preview/c194150319b84ce58ef6d3a9e5333945_og.jpg"},
  
  {slug:"master-chess", name:"Master Chess", cat:"Puzzle", emoji:"♟️", desc:"Sharpen your tactics in this classic chess game. Compete online for free against AI or players worldwide on your desktop, iOS, or Android mobile device.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/master-chess/big-preview/52cdd471a5044f1e94c36787ee523746_og.jpg"},
  
  {slug:"sudoku-online", name:"Sudoku Online", cat:"Puzzle", emoji:"🔢", desc:"Challenge your logic with Sudoku Online. This free game is playable online on desktop, Android, and iOS. Master classic grids or try X-Sudoku, Windoku, and more.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/preview/c9115ab8eaa246bb9059c21952319c4d_og.jpg"},
  
  {slug:"word-finder", name:"Word Finder", cat:"Puzzle", emoji:"🔤", desc:"Sharpen your mind with Word Finder, an immersive word search game with shifting tiles. Play this educational game online for free on desktop, iOS, and Android.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/word-finder/big_preview/781af1adb04747a5b1fafedc05eef869_og.jpg"},
  
  {slug:"vega-mix-2-adventure", name:"Vega Mix 2: Adventure", cat:"Adventure", emoji:"🏝️", desc:"Join a quest on a mysterious island in this match-3 puzzle game. Swap pieces to clear obstacles and solve strategic challenges. Play this game online for free.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/vega-mix-2-adventure/big-preview/46f5bcaca15b411382afc96ac1c38132_og.jpg"},
  
  {slug:"hidden-object-clues-and-mysteries", name:"Hidden Object: Clues and Mysteries", cat:"Adventure", emoji:"🔍", desc:"Play Hidden Object: Clues and Mysteries online for free on Playgama. Search scenes for hidden objects. Enjoy instant browser gameplay on desktop, mobile, or tablet.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/hidden-object-clues-and-mysteries/big-preview/918efb60143240eb99d962fecc6cdaf8_og.jpg"},
  
  {slug:"good-sort-master", name:"Good Sort Master: Triple Match", cat:"Puzzle", emoji:"🧩", desc:"Organize items on shelves by matching three identical objects to clear levels. This relaxing game is free to play online on desktop, iOS, and Android devices.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/good-sort-master/big-preview/87153c5702e14ce994b208df2c0a5f61_og.jpg"},
  
  {slug:"diamant-match-3-sky-story", name:"Diamant: Match 3 Sky Story", cat:"Puzzle", emoji:"💎", desc:"Solve match-3 puzzles to build your own floating city. This fantasy adventure is playable online for free on desktop, Android, and iOS devices.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/preview/03e557e7d56a44e4b13b9c9ac4c16bbb_og.jpg"},
  
  {slug:"2-minute-football-qb-legend", name:"2 Minute Football QB Legend", cat:"Sports", emoji:"🏈", desc:"Master football strategy by completing passes and scoring touchdowns in this competitive game. Play online for free on desktop, iOS, and Android devices.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/preview/c636ca027221477282964a767b7c2764_og.jpg"},
  
  {slug:"car-destruction-king", name:"Car Destruction King", cat:"Racing", emoji:"💥", desc:"Drive cars through obstacles, use slow motion for realistic crashes, and set records in this driving game. Play online for free on desktop, iOS, and Android devices.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/car-destruction-king/big_preview/0ca8f4094cfd4826b9888ea1d094bdd7_og.jpg"},
  
  {slug:"solitaire-the-collection", name:"Solitaire The Collection", cat:"Board", emoji:"🃏", desc:"Access 33 card game variants including Klondike, Spider, and FreeCell in one place. This collection is playable online for free on desktop, iOS, and Android.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/solitaire-the-collection/big_preview/c84b321790284d9196e415def1f52692_og.jpg"},
  
  {slug:"the-tall-man", name:"The Tall Man", cat:"Adventure", emoji:"🌲", desc:"Explore a dark forest to collect nine mysterious pages in this horror survival game. Play this tense experience online for free on desktop, iOS, and Android devices.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/the-tall-man/big_preview/cad21af835d348db83f9aace4ccca043_og.jpg"},
  
  {slug:"tap-3d-wood-block-away", name:"Tap 3D Wood Block Away", cat:"Puzzle", emoji:"🧱", desc:"Rotate and tap wooden blocks to reveal 3D designs in this logic puzzle. This game is playable online for free on your desktop, Android, or iOS mobile device.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/tap-3d-wood-block-away/big_preview/ecdad60b756f4006aec4d3a7d8d3c55d_og.jpg"},
  
  {slug:"epic-sword-battle-fight-in-the-ragdoll-arena", name:"Epic Sword Battle! Fight in the Ragdoll Arena!", cat:"Action", emoji:"⚔️", desc:"Engage in 3D sword duels with ragdoll physics. Control knights and gladiators in this arena game. Playable online and free on desktop, Android, and iOS devices.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/epic-sword-battle-fight-in-the-ragdoll-arena/big_preview/cd9b92eab74043d293dfbbba8d4bcfd2_og.jpg"},
  
  {slug:"snowball-rush", name:"Snowball Rush", cat:"Arcade", emoji:"⛄", desc:"Train your speed and roll down icy tracks in this obby game. Collect pets, skins, and characters. Play this game online for free on Android, iOS, and desktop.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/preview/60b71d2038854620bbe2a14e908ee513_og.jpg"},
  
  {slug:"yarn-fever-unravel-puzzle", name:"Yarn Fever! Unravel Puzzle", cat:"Puzzle", emoji:"🧶", desc:"Solve thread-sorting puzzles by organizing colorful yarns on your desktop, iOS, or Android device. This online game is free to play and offers a relaxing challenge.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/yarn-fever-unravel-puzzle/big_preview/faa68d61c5b44e64814eb14827a50d61_og.jpg"},
  
  {slug:"obby-minigames", name:"Obby: Mini-Games", cat:"Arcade", emoji:"🏃", desc:"Compete against other players in various modes like parkour, glass bridge, and falling tiles. This game is free to play online on desktop, Android, and iOS.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/obby-minigames/big_preview/b04df6b086d84f2d90034611cef8ad80_og.jpg"},
  
  {slug:"imposter-3d-online-horror", name:"Imposter 3D online horror", cat:"Action", emoji:"👾", desc:"Experience this survival horror game online for free. Save crewmates from traitors across 8 maps and 7 multiplayer modes on desktop, Android, and iOS devices.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/preview/d818e2bc88364077ac62353944df8ec3_og.jpg"},
  
  {slug:"bus-escape-clear-jam", name:"Bus Escape: Clear Jam", cat:"Puzzle", emoji:"🚌", desc:"Solve parking puzzles by sorting buses and cars to clear traffic jams. This brain-training game is playable online for free on desktop, iOS, and Android devices.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/bus-escape-clear-jam/big-preview/882762d1f3df4eed9bab0098ce2067d7_og.jpg"},
  
  {slug:"numicolor", name:"Numicolor", cat:"Puzzle", emoji:"🎨", desc:"Explore a creative coloring experience with Numicolor. This puzzle game is free to play online on desktop, Android, and iOS devices for stress relief and focus.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/preview/c2baef5d652a44b2900f383c159b1a92_og.jpg"},
  
  {slug:"grow-slime", name:"Grow Slime", cat:"Simulation", emoji:"🟢", desc:"Raise cute slimes on your farm in this idle game. Collect drops, upgrade your land, and discover unique creatures. Play this game online for free on desktop and mobile.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/grow-slime/big-preview/e50446ce287e471f87e9867e296b8309_og.jpg"},
  
  {slug:"archery-ragdoll", name:"Archery Ragdoll", cat:"Shooting", emoji:"🏹", desc:"Master archery with realistic physics and a detailed damage system. This ragdoll game is playable online for free on desktop, iOS, and Android devices.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/archery-ragdoll/big-preview/77ca7ee51b4e4cf1ada781b3d8795a1e_og.jpg"},
  
  {slug:"build-your-zombie-horde", name:"Build Your Zombie Horde", cat:"Strategy", emoji:"🧟", desc:"Summon the undead, collect resources, and upgrade your army in this strategy autobattler. Play this game for free online on your desktop, iOS, or Android device.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/build-your-zombie-horde/big-preview/36fafc3063dd437e90df9d3b1fdf6f5a_og.jpg"},
  
  {slug:"catch-the-bear", name:"Catch the Bear", cat:"Puzzle", emoji:"🐻", desc:"Solve logic puzzles by sliding blocks to match bears by color. This cozy puzzle game is free to play online on desktop, iOS, and Android devices.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/catch-the-bear/big-preview/59a1a074696f439ebef8d05ba5d527f2_og.jpg"},
  
  {slug:"color-pixels-coloring-by-numbers", name:"Color Pixels", cat:"Puzzle", emoji:"🎨", desc:"Transform black-and-white images into vibrant art by following numbered instructions. This relaxing color game is free to play online on desktop, iOS, and Android.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/color-pixels-coloring-by-numbers/big-preview/549956d9cbc04d79abf3be99ad2a5e26_og.jpg"},
  
  {slug:"detective-max-mystery-the-disappearance-of-mr-winters", name:"Detective Max Mystery", cat:"Puzzle", emoji:"🔍", desc:"Investigate the disappearance of Mr. Winters in this hidden-object mystery game. Collect evidence and solve puzzles online for free on desktop, iOS, and Android.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/detective-max-mystery-the-disappearance-of-mr-winters/big-preview/f21d60d399f84a2e90112f3317c47b0f_og.jpg"},
  
  {slug:"dungeon-master-cult-and-craft", name:"Dungeon Master: Cult & Craft", cat:"Simulation", emoji:"⛏️", desc:"Manage resources, mine ore, and expand your underground cult in this 3D idle simulator. Play this game for free online on desktop, iOS, and Android devices.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/dungeon-master-cult-and-craft/big-preview/60c8c6082dc543e39e321467be00f33b_og.jpg"},
  
  {slug:"find-out-hidden-object", name:"Find Out: Hidden Object", cat:"Puzzle", emoji:"🔎", desc:"Explore beautiful scenes to locate missing items in this scavenger hunt puzzle. Play this hidden object game online for free on desktop, Android, and iOS devices.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/find-out-hidden-object/big-preview/7d83bf75c3254e38872ba1bc8a712434_og.jpg"},
  
  {slug:"gangster-island-crime-city", name:"Gangsta Island: Crime City", cat:"Adventure", emoji:"🌆", desc:"Rise from a street dweller to an underworld boss in this crime adventure. Perform heists and confront rival crews. Play this game online for free on any device.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/gangster-island-crime-city/big_preview/8969fed03f85477894d478c0a911dcc6_og.jpg"},
  
  {slug:"hedgies", name:"Hedgies", cat:"Simulation", emoji:"🌾", desc:"Transform an abandoned plot into a thriving farm in this casual building game. Play this farming adventure online for free on desktop, iOS, and Android devices.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/hedgies/big_preview/82348afa3e7b4db0bf915c835c40a8bd_og.jpg"},
  
  {slug:"home-design-decorate-house", name:"Home Design: Decorate House", cat:"Puzzle", emoji:"🏠", desc:"Renovate and decorate your dream mansion by solving match 3 puzzles. This creative home design game is playable online for free on desktop, iOS, and Android.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/home-design-decorate-house/big_preview/732dcf8246c241bbb8bee665c08a5321_og.jpg"},
  
  {slug:"idle-supermarket-tycoon", name:"Idle Supermarket Tycoon", cat:"Simulation", emoji:"🛒", desc:"Build a retail empire in this idle simulation game. Manage shops, serve customers, and grow your mall. Play for free online on your desktop, Android, or iOS device.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/idle-supermarket-tycoon/big-preview/c341d0a8566f49a89546970826943d3d_og.jpg"},
  
  {slug:"king-simulator", name:"King Simulator", cat:"Adventure", emoji:"👑", desc:"Explore a fantasy world and defend your village from orc attacks in this adventure game. Play online for free on your desktop, Android, or iOS device.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/king-simulator/big-preview/5ef96642a1224c208555a25fb2a0e38d_og.jpg"},
  
  {slug:"knight-legend", name:"Knight Legend", cat:"Adventure", emoji:"🛡️", desc:"Embark on an epic quest in Knight Legend. Fight monsters, upgrade gear, and unlock levels in this free online game for desktop, iOS, and Android devices.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/knight-legend/big-preview/acaf0e22161344b4b924d90ef0f6c5c9_og.jpg"},
  
  {slug:"millionaire-life", name:"Millionaire Life", cat:"Simulation", emoji:"💰", desc:"Experience the ultimate luxury lifestyle in this simulation game. Play Millionaire Life online for free on your desktop, iOS, or Android device.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/preview/352a9b903c1e4ecd9161497ad961bd9f_og.jpg"},
  
  {slug:"pocket-universe", name:"Pocket Universe", cat:"Adventure", emoji:"🌍", desc:"Build and expand your own world in this adventure game. Gather resources, explore diverse biomes, and fight enemies. Play this game online for free on desktop and mobile.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/pocket-universe/big-preview/15c74ee2f97c48e6bbea19585bf87f69_og.jpg"},
  
  {slug:"rise-of-the-dead", name:"Rise of the Dead", cat:"Shooting", emoji:"🔫", desc:"Fight off waves of zombies and complete quests in this shooting horror game. Play online for free on desktop, iOS, and Android devices to survive the apocalypse.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/rise-of-the-dead/big-preview/123a84fd979245ed93b03fe4b412cfe2_og.jpg"},
  
  {slug:"runic-curse", name:"Runic Curse", cat:"Adventure", emoji:"✨", desc:"Explore ancient ruins and master magic in Runic Curse. This action-adventure game is playable online for free on desktop, iOS, and Android devices.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/preview/1e6e516be75648d7bbd35bab6d03eba8_og.jpg"},
  
  {slug:"wood-hexa-factory", name:"Wood Hexa Factory", cat:"Puzzle", emoji:"🧩", desc:"Sort colorful wooden hexes into trays in this factory puzzle game. Complete levels by filling boxes online for free on desktop, iOS, and Android devices.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/wood-hexa-factory/big_preview/c0c048aa706a4e5b9774c0778b52dce0_og.jpg"},
  
    {slug:"wreckbox-robot-fighting", name:"Wreckbox: Robot Fighting", cat:"Action", emoji:"🤖", desc:"Enter a physics-based robot combat arena. Customize your machine with weapons and armor to battle AI opponents. Play this action battle bots game online for free on desktop, Android, and iOS.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/preview/28952e4f19a94b3bb63a8681bc2d0ff8_og.jpg"},
  
    {slug:"vector-parkour-run", name:"Vector Parkour Run", cat:"Arcade", emoji:"🏃", desc:"Escape the Corporation in this silhouette parkour runner. Master jumps, slides, and vaults across 33 levels. Play this adventure game online for free on desktop and mobile.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/preview/83a5642f72fb4fb0a4f7faba84e549ff_og.jpg"},
  
    {slug:"tank-stars", name:"Tank Stars", cat:"Shooting", emoji:"💥", desc:"Master your trajectory and destroy opponents in this 2D shooting game. Access a massive arsenal on iOS, Android, and desktop. Play online and free on Playgama.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/tank-stars/big_preview/c087303e2cc8403e80f156089083ee18_og.jpg"},
  
    {slug:"true-sniper", name:"True Sniper", cat:"Shooting", emoji:"🎯", desc:"Experience a realistic tactical shooter with detailed graphics and accurate sight simulation. This game is playable online for free on desktop, Android, and iOS.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/preview/b1c409a3d5314bd88ad23dab35ff3b65_og.jpg"},
  
    {slug:"beam-drive-car-crash-test-simulator", name:"Beam Drive Car Crash Test Simulator", cat:"Racing", emoji:"🚗", desc:"Test vehicle durability in this realistic simulation. Create custom maps, drive various cars, and experience destruction physics. Playable online and free on mobile and PC.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/beam-drive-car-crash-test-simulator/big_preview/0963372e40aa423fb5263261ccb4d95c_og.jpg"},
  
    {slug:"car-stunt-races-mega-ramps", name:"Car Stunt Races: Mega Ramps", cat:"Racing", emoji:"🏎️", desc:"Master GT car stunts and race on impossible sky tracks in this driving simulator. Play this game online for free on your desktop, Android, or iOS device.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/car-stunt-races-mega-ramps/big_preview/56ea117f66894d3297cbe2119d92f10f_og.jpg"},
  
    {slug:"rocket-car-football-championship", name:"Rocket Car Football Championship", cat:"Sports", emoji:"⚽", desc:"Drive rocket-powered cars to score goals in arena matches. Compete in cups, upgrade your vehicle, and use skills. Play this sports game online for free on any device.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/rocket-car-football-championship/big_preview/5305e599f9174e869d3198c017fda411_og.jpg"},
  
    {slug:"soccer-legends-2026", name:"Soccer Legends 2026", cat:"Sports", emoji:"⚽", desc:"Compete in 1v1 or 2v2 soccer matches with unique player abilities. This arcade sports game is free to play online on desktop, iOS, and Android mobile devices.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/soccer-legends-2026/big_preview/d916a3616e35444c8252443a4a2fe2ff_og.jpg"},
  
    {slug:"home-run-superstars", name:"Home Run Superstars!", cat:"Sports", emoji:"⚾", desc:"Step up to the plate in this arcade baseball game. Time your swings to hit the ball around the world. Play this game for free online on Android, iOS, and desktop.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/home-run-superstars/big_preview/8ba5ccf2282a44739fdeb0b2836d0bac_og.jpg"},
  
    {slug:"8-ball-pool-club", name:"8 Ball Pool Club", cat:"Sports", emoji:"🎱", desc:"Master your shots in 8 Ball Pool Club. This billiards game features realistic physics and spin control. Play online for free on desktop, mobile, and tablet.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/8-ball-pool-club/big_preview/0e83be7fabe340ec83631dae23e9e44a_og.jpg"},
  
    {slug:"attack-hole", name:"Attack Hole", cat:"Arcade", emoji:"🕳️", desc:"Swallow weapons with a black hole before the timer runs out and defeat giant enemies. This arcade shooter is playable online for free on desktop, Android, and iOS.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/attack-hole/big-preview/27120fa9aded40b1a53caae4c2e4bf5e_og.jpg"},
  
    {slug:"fish-io-be-the-king", name:"Fish IO: Be the King", cat:"Arcade", emoji:"🐟", desc:"Compete in dynamic multiplayer battles in this IO game. Eat smaller fish to grow, avoid predators, and survive online for free on desktop, Android, and iOS.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/fish-io-be-the-king/big_preview/b522dda919544564bdcf8728e9cbdb55_og.jpg"},
  
    {slug:"age-of-tanks-warriors-td-war", name:"Age of Tanks Warriors: TD War", cat:"Strategy", emoji:"🏰", desc:"Lead your army through history in this tower defense game. Upgrade tanks and weapons to defeat opponents in online battles. Play for free on desktop and android.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/age-of-tanks-warriors-td-war/big-preview/5061aadf18094454bc3abd61cef1477e_og.jpg"},
  
    {slug:"europe-at-war", name:"Europe at War", cat:"Strategy", emoji:"🗺️", desc:"Command your nation in this turn-based strategy simulation. Manage your economy, research technology, and conquer Europe. Play this game online for free on desktop and mobile.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/europe-at-war/big-preview/0e14b6fbb75e442fac184a54238979ec_og.jpg"},
  
    {slug:"jurassic-merge-dino-evolution", name:"Jurassic Merge: Dino Evolution", cat:"Strategy", emoji:"🦕", desc:"Merge dinosaurs to evolve your army and win battles in this strategy game. Play this game online for free on your desktop, Android, or iOS mobile device.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/jurassic-merge-dino-evolution/big-preview/4f78db46e97e4e1ca45925d9d07e7236_og.jpg"},
  
    {slug:"cat-cafe", name:"Cat Cafe", cat:"Simulation", emoji:"🐱", desc:"Run a cozy cafe, rescue stray cats, and serve customers in this management game. Play this tycoon experience online for free on your desktop, Android, or iOS.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/cat-cafe/big_preview/0cfd78c477f04cd6a405729c5d7ffd6c_og.jpg"},
  
    {slug:"gas-station", name:"Gas Station", cat:"Simulation", emoji:"⛽", desc:"Transform a rundown station into a thriving business empire in this idle tycoon game. Manage operations and repair cars online for free on desktop, iOS, and Android.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/gas-station/big_preview/5f102238e733414b9f60dbe71341689c_og.jpg"},
  
    {slug:"big-magnetic-fishing", name:"Big Magnetic Fishing", cat:"Simulation", emoji:"🎣", desc:"Explore waterways and collect hidden objects in this simulation game. Play Big Magnetic Fishing online for free on your desktop, Android, or iOS device.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/big-magnetic-fishing/big_preview/210498976ddc4a5faf59867cb20edfc4_og.jpg"},
  
    {slug:"blockibo-color-blocks", name:"Blockibo: Color Blocks", cat:"Puzzle", emoji:"🧩", desc:"Solve logic puzzles by moving colorful blocks and clearing paths in this browser game. Play Blockibo: Color Blocks online for free on iOS, Android, and desktop.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/blockibo-color-blocks/big_preview/f06922a7ea184f9fa21501743310eb4f_og.jpg"},
  
    {slug:"star-shift-gravity-match", name:"Star Shift: Gravity Match", cat:"Puzzle", emoji:"💎", desc:"Master gravity in this cosmic match-3 puzzle. Swap gems to control cascades across 450 levels. Play this game for free online on desktop, Android, and iOS devices.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/preview/56a5753c852a41f983f4da69ff8d03d0_og.jpg"},
  
      {slug:"snow-rider-3d", name:"Snow Rider 3D", cat:"3D", emoji:"🛷", desc:"Navigate a snowy 3D world on a sleigh in this endless arcade game. Collect gifts and dodge obstacles on your mobile or desktop. Play this game online for free.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/snow-rider-3d/big_preview/df56fa5f6507424cbaa3969f7a4c9fd6_og.jpg"},
  
      {slug:"eggy-car", name:"Eggy Car", cat:"Racing", emoji:"🥚", desc:"Drive as far as possible without dropping your egg in this physics-based challenge. Play this driving game online for free on desktop, iOS, and Android devices.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/eggy-car/big-preview/a1c9ac37765a4699b4c4cd4e24222a03_og.jpg"},
  
      {slug:"drift-hunters", name:"Drift Hunters", cat:"Racing", emoji:"🏎️", desc:"Drift Hunters is a 3D drifting simulator: pick from 26 customizable cars, hit 10 tracks and hold long, stylish drifts to earn credits for tuning and upgrades.", license:"GameMonetize", source:"GameMonetize", thumb:"/assets/thumbs/drift-hunters.jpg"},
  
      {slug:"escape-road", name:"Escape Road", cat:"Racing", emoji:"🚓", desc:"Escape Road drops you into a high-speed police chase after a bank heist: weave through city traffic, dodge roadblocks and collect cash to unlock 90 cars.", license:"GameMonetize", source:"GameMonetize", thumb:"/assets/thumbs/escape-road.jpg"},
  
      {slug:"poly-track", name:"PolyTrack", cat:"Racing", emoji:"🏁", desc:"PolyTrack is a low-poly 3D time-trial racer: speed through looping tracks, beat your best lap time, and design your own custom tracks in the built-in editor.", license:"GameMonetize", source:"GameMonetize", thumb:"/assets/thumbs/poly-track.jpg"},
  
      {slug:"shell-shockers", name:"Shell Shockers", cat:"Shooting", emoji:"🥚", desc:"Shell Shockers is a fast-paced egg shooter: grab your weapon, crack rival eggs across the arena and come out on top.", license:"GameMonetize", source:"GameMonetize", thumb:"/assets/thumbs/shell-shockers.jpg"},
  
      {slug:"burger-restaurant-simulator-3d", name:"Burger Restaurant Simulator 3D", cat:"Simulation", emoji:"🍔", desc:"Manage your own restaurant, cook burgers, and expand your culinary empire in this 3D simulation game.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/burger-restaurant-simulator-3d/big_preview/b4cbcd2693594ae1a4e6aa672025365c_og.jpg"},
  
      {slug:"cake-shop-simulator-bake-sell", name:"Cake Shop Simulator: Bake & Sell", cat:"Simulation", emoji:"🍰", desc:"Manage your own bakery in this management game. Bake 3D cakes, chat with customers, and haggle for prices.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/cake-shop-simulator-bake-sell/big_preview/0f7d69eb526f4042b3ab890e177085ef_og.jpg"},
  
      {slug:"chicken-kingdom-egg-farm-tycoon", name:"Chicken Kingdom: Egg Farm Tycoon", cat:"Simulation", emoji:"🐔", desc:"Manage your farm in this 3D idle tycoon game. Collect eggs, cook food, and hire helpers to build your kingdom.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/preview/f37dd90bb9f14c2093065b1005a34f9a_og.jpg"},
  
      {slug:"car-escape", name:"Car Escape", cat:"Puzzle", emoji:"🚗", desc:"Navigate through congested streets in this driving puzzle game. Assess paths, plan vehicle movements, and escape traffic.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/car-escape/big-preview/bbf927460d774a35af13c52177e6b158_og.jpg"},
  
      {slug:"escape-from-grandmas-basement--hidden-object", name:"Escape From Grandma's Basement - Hidden Object", cat:"Puzzle", emoji:"🔍", desc:"Solve puzzles and find hidden objects to escape in this time-based challenge before the five-minute timer runs out.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/escape-from-grandmas-basement--hidden-object/big-preview/87d4e7bba716451594586d2658de96cf_og.jpg"},
  
      {slug:"dancing-road", name:"Dancing Road", cat:"Music", emoji:"🎵", desc:"Guide a ball along a neon track matching colors to the beat in this rhythm runner.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/dancing-road/big_preview/6c7688b907574ca99836b611f5c12719_og.jpg"},
  
      {slug:"fly-saber", name:"Fly Saber", cat:"Music", emoji:"⚔️", desc:"Wield dual energy swords to slice blocks in this rhythm-based arcade game.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/preview/d46a9328624d49a4822342a393a82649_og.jpg"},
  
      {slug:"car-parking-3d", name:"Car Parking 3D", cat:"Racing", emoji:"🅿️", desc:"Master precision driving in Car Parking 3D. Navigate realistic environments and tricky obstacles to park perfectly.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/car-parking-3d/big-preview/793f820aa5a04707a217413aa37c25de_og.jpg"},
  
      {slug:"4-pics-1-word", name:"4 Pics 1 Word", cat:"Puzzle", emoji:"🖼️", desc:"Analyze four images to find the common hidden word in this brain training guessing game.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/4-pics-1-word/big-preview/210c08de7bd646d08d2dca984a90c6d8_og.jpg"},
  
      {slug:"50-states-quiz", name:"50 States Quiz", cat:"Puzzle", emoji:"🇺🇸", desc:"Test your knowledge of the United States in this interactive trivia game about the 50 states.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/50-states-quiz/big-preview/49d15ba50bce4e49bba40497e4867efb_og.jpg"},
  
      {slug:"cozy-crossword", name:"Cozy Crossword", cat:"Puzzle", emoji:"✏️", desc:"Solve hundreds of crossword puzzles at your own pace in this relaxing word game.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/cozy-crossword/big_preview/ad5494e996294997a02504afa13524c3_og.jpg"},
  
      {slug:"animal-hospital", name:"Animal Hospital", cat:"Simulation", emoji:"🐾", desc:"Identify anomalies and treat patients in this horror mystery game. Can you survive the night shift?", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/animal-hospital/big_preview/164f3268bac3487dad00604580d17370_og.jpg"},
  
      {slug:"passenger-city-taxi-game", name:"Passenger City Taxi Game", cat:"Racing", emoji:"🚕", desc:"Navigate busy streets and transport passengers in this driving simulator.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/passenger-city-taxi-game/big-preview/70963bd4947a4af28731c76b4d122cc0_og.jpg"},
  
      {slug:"animals-vs-zombies", name:"Animals vs Zombies", cat:"Simulation", emoji:"🧟", desc:"Rescue kidnapped animals from aliens in this idle game. Evolve your creatures, build a team, and explore diverse worlds.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/animals-vs-zombies/big-preview/2b579b0cb2844a0496bff95a54d274f5_og.jpg"},
  
      {slug:"black-hole-eat-the-universe", name:"Black Hole: Eat the Universe", cat:"Simulation", emoji:"🕳️", desc:"Tap to feed a black hole, devour planets, and collapse the universe for power in this idle game.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/black-hole-eat-the-universe/big-preview/e5f7052f33db4e00a92a194ccd119185_og.jpg"},
  
      {slug:"cat-blasters", name:"Cat Blasters", cat:"Shooting", emoji:"🐱", desc:"Pilot your starship in this retro arcade space shooter. Battle enemies and bosses across multiple modes.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/cat-blasters/big_preview/5b3c5efc6e2947e2af9762a9430572c7_og.jpg"},
  
      {slug:"2-player-tank-combat", name:"2 Player Tank Combat", cat:"Action", emoji:"🛡️", desc:"Engage in head-to-head tank battles in this competitive two-player combat game. Outsmart your opponent to claim victory.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/2-player-tank-combat/big-preview/8c983e783c474edfade3e7c410a7dee6_og.jpg"},
  
      {slug:"army-commander", name:"Army Commander", cat:"Strategy", emoji:"🎖️", desc:"Manage your military camp in this idle strategy game. Recruit soldiers, upgrade your base, and launch operations.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/army-commander/big_preview/03e77310a2da47809a6879a3718ffef1_og.jpg"},
  
      {slug:"4-colors", name:"4 Colors", cat:"Board", emoji:"🃏", desc:"Challenge computer opponents in this card game. Match colors or numbers to empty your hand.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/4-colors/big-preview/f47945bab8724f42a0911e6909328a08_og.jpg"},
  
      {slug:"3d-mega-maze", name:"3D Mega Maze", cat:"Puzzle", emoji:"🌀", desc:"Navigate a ball through 25 complex 3D labyrinths in this puzzle game.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/preview/5b37af421a254e82a553875963af4202_og.jpg"},
  
      {slug:"cut-watermelon-8-slices", name:"Cut the Watermelon into 8 Equal Slices", cat:"Puzzle", emoji:"🍉", desc:"Drag 4 straight cuts across the watermelon and try to make 8 perfectly equal slices. One action, one minute — how even can you cut?", license:"Original", source:"AIFly Games", thumb:"/assets/thumbs/cut-watermelon-8-slices.jpg"},
  
      {slug:"mountain-taxi-challenge", name:"Mountain Taxi Challenge", cat:"Racing", emoji:"🚕", desc:"Navigate treacherous mountain roads and complete 30 unique driving missions in this arcade taxi simulator.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/mountain-taxi-challenge/big_preview/e176ee801a65483fb22008f4608f73d1_og.jpg"},
  
      {slug:"bus-parking-game", name:"Bus Parking Game", cat:"Racing", emoji:"🚌", desc:"Master precision driving in this bus parking challenge. Navigate city buses through obstacles and park perfectly.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/bus-parking-game/big_preview/d1e9ddbb21464f2aafd524b88a1adf5f_og.jpg"},
  
      {slug:"farm-care-tycoon", name:"Farm Care Tycoon", cat:"Simulation", emoji:"🚜", desc:"Build your agricultural empire in this farm tycoon game. Grow crops, raise animals, and manage your shop.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/farm-care-tycoon/big_preview/b0737788987b4de1bec3d8cbc1a3b5a3_og.jpg"},
  
      {slug:"bubble-word-jam", name:"Bubble Word Jam", cat:"Puzzle", emoji:"🫧", desc:"Pop bubbles and sort words into categories in this puzzle brain trainer. Merge related words to clear the board.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/bubble-word-jam/big_preview/89b7456bde8b4c00a02fea5a0d4fb98b_og.jpg"},
  
      {slug:"basket-sport-stars", name:"Basket Sport Stars", cat:"Sports", emoji:"🏀", desc:"Compete in fast-paced basketball matches on colorful courts. Challenge friends in local 2-player mode.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/basket-sport-stars/big_preview/911f428fd4a14cb0bff044898fe9a120_og.jpg"},
  
      {slug:"football-2026", name:"Football 2026", cat:"Sports", emoji:"⚽", desc:"Experience deep football gameplay with advanced tactics and career mode in this sports game.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/football-2026/big-preview/2237fc6b7b104ab5ba0ef43348407fac_og.jpg"},
  
      {slug:"chess-online-multiplayer", name:"Chess Online Multiplayer", cat:"Board", emoji:"♟️", desc:"Play chess online for free against the computer or real players in this classic board game.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/preview/dd9781afd09a46418fea5d992bb7edfa_og.jpg"},
  
      {slug:"screw-sort-3d", name:"Screw Sort 3D", cat:"Puzzle", emoji:"🔩", desc:"Sort screws, bolts, and nuts into boxes by color in this 3D logic puzzle.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/screw-sort-3d/big-preview/077844b3a0f24b178c7f3e8a53bcc2b9_og.jpg"},
  
      {slug:"find-match-3d", name:"Find Match 3D", cat:"Puzzle", emoji:"🔍", desc:"Clear the board by finding three identical items in a cluttered 3D scene in this matching puzzle adventure.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/find-match-3d/big-preview/b8951ea43f0c4e18af3401f015c1750c_og.jpg"},
  
      {slug:"cooking-utopia-restaurant-game", name:"Cooking Utopia", cat:"Simulation", emoji:"🍳", desc:"Master culinary skills and manage your restaurant empire in this cooking game. Prepare diverse meals for customers.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/cooking-utopia-restaurant-game/big_preview/4c75feb4d905496db429875d173e084f_og.jpg"},
  
      {slug:"supermarket-simulator-dream-store", name:"Supermarket Simulator: Dream Store", cat:"Simulation", emoji:"🛒", desc:"Build and manage your own retail empire in this supermarket simulation. Handle staff, inventory, and finances.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/supermarket-simulator-dream-store/big_preview/3beec6ad234b41eab107c53c6b32abc0_og.jpg"},
  
      {slug:"extreme-car-driving-simulator", name:"Extreme Car Driving Simulator", cat:"Racing", emoji:"🏎️", desc:"Drive and drift in an open world city with advanced physics in this sports car simulator.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/extreme-car-driving-simulator/big_preview/86f903c9f6234e62be4d6805a9429e7b_og.jpg"},
  
      {slug:"formula-car-circuit-racing", name:"Formula Car Circuit Racing", cat:"Racing", emoji:"🏁", desc:"Compete in high-speed motorsport on challenging tracks in this formula racing game.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/formula-car-circuit-racing/big_preview/7d76f2668ff148e4b37f5c07e2735be3_og.jpg"},
  
      {slug:"call-of-tanks", name:"Call of Tanks", cat:"Strategy", emoji:"🎖️", desc:"Deploy tanks and upgrade your defenses in this strategy game. Destroy enemy bases by choosing the right units.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/call-of-tanks/big_preview/5102b02c78e34bd0adf96f5a6d86d5eb_og.jpg"},
  
      {slug:"one-shot-sniper-arena", name:"One Shot: Sniper Arena", cat:"Shooting", emoji:"🎯", desc:"Experience fast-paced 3D multiplayer arena combat. Eliminate opponents with precision shots.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/one-shot-sniper-arena/big_preview/4c936c222aec4ab38fc4a88be70cb0f2_og.jpg"},
  
      {slug:"kingdom-defender-tower-defense", name:"Kingdom Defender - Tower Defense", cat:"Strategy", emoji:"🏰", desc:"Defend your kingdom from hordes of enemies using towers and special abilities in this tower defense game.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/kingdom-defender-tower-defense/big-preview/b4378ab74fc045d28e8a084bcf58890d_og.jpg"},
  
      {slug:"hero-defense-king", name:"Hero Defense King", cat:"Strategy", emoji:"🛡️", desc:"Defend your tower from waves of enemies by commanding heroes and using strategic upgrades.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/hero-defense-king/big-preview/376771b261254d23b4fc3cdd96153b09_og.jpg"},
  
      {slug:"traffic-rush-online", name:"Traffic Rush Online", cat:"Racing", emoji:"🚗", desc:"Navigate city streets in this 3D driving game. Change lanes, customize your car, and compete in three modes.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/traffic-rush-online/big_preview/8b5c9711e59d49f2a3bde681805443f4_og.jpg"},
  
      {slug:"bowling-stars", name:"Bowling Stars", cat:"Sports", emoji:"🎳", desc:"Compete in classic bowling matches to earn trophies and unlock superior balls.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/bowling-stars/big-preview/cbb5a9163f4b49e6beed884d7b01207c_og.jpg"},
  
      {slug:"doodle-draw-fish", name:"Doodle Draw Fish", cat:"Arcade", emoji:"🐟", desc:"Sketch unique fish in this idle clicker and RPG. Build your team, upgrade your aquarium, and battle in arenas.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/doodle-draw-fish/big_preview/454a9e48edf64a699184ab846c8c3282_og.jpg"},
  
      {slug:"tennis-masters", name:"Tennis Masters", cat:"Sports", emoji:"🎾", desc:"Compete in fast-paced 1-on-1 tennis matches against the computer or a friend. Collect power-ups and funny transformations mid-match.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/tennis-masters/big_preview/579ccf1f24084553b4aebe81ffd468b2_og.jpg"},
  
      {slug:"penalty-shooter", name:"Penalty Shooter", cat:"Sports", emoji:"⚽", desc:"Take turns as penalty taker and goalkeeper in this soccer shootout. Five shots each — score more than you concede to win.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/penalty-shooter/big_preview/8c95d6c82b0d42d3856005a382b61439_og.jpg"},
  
      {slug:"pool-8-ball-mania", name:"Pool: 8 Ball Mania", cat:"Sports", emoji:"🎱", desc:"Classic eight-ball pool with realistic physics. Play against the computer or a friend and clear your group before the black ball.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/pool-8-ball-mania/big_preview/d3ea37c2217446499940c3e93fa17b1b_og.jpg"},
  
      {slug:"mahjong-puzzle-tile-match", name:"Mahjong Puzzle: Tile Match", cat:"Puzzle", emoji:"🀄", desc:"Clear the board by linking identical mahjong tiles in this brain-teasing matching puzzle.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/mahjong-puzzle-tile-match/big-preview/c4e6143f9d2d42188591a56b9ac0aea9_og.jpg"},
  
      {slug:"hidden-object-my-hotel", name:"Hidden Object: My Hotel", cat:"Puzzle", emoji:"🔍", desc:"Restore a dream hotel by finding hidden items in cluttered rooms. Spot every silhouette to bring each room back to life.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/hidden-object-my-hotel/big-preview/94eab6bba922419d904b5872c8a1fb52_og.jpg"},
  
      {slug:"monster-king-3d", name:"Monster King 3D", cat:"Action", emoji:"👹", desc:"Mine and connect eggs to build an army of monsters, then lead them into battle in this 3D action-adventure.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/monster-king-3d/big_preview/484b89a4b0b744bd892a98506985c4be_og.jpg"},
  
      {slug:"craft-and-battle", name:"Craft and Battle", cat:"Strategy", emoji:"⚔️", desc:"Lead your army, build bases and extract resources in this military strategy game. Destroy the enemy base to win.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/craft-and-battle/big_preview/b152e7d24d064364816e5464f0188784_og.jpg"},
  
      {slug:"moto-x3m-spooky-land", name:"Moto X3M Spooky Land", cat:"Racing", emoji:"🏍️", desc:"Race through haunted tracks in this Halloween bike game. Perform stunts, beat the clock and survive 32 spooky levels.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/moto-x3m-spooky-land/big-preview/8013d6d81a584e96b7c818757853da8c_og.jpg"},
  
      {slug:"crowd-rush", name:"Crowd Rush", cat:"Arcade", emoji:"🏃", desc:"Lead your crowd through sky tracks, multiply your runners through gates and defeat bosses in this puzzle runner.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/preview/c9e866e6aca14c9ea97dd02fcce3e226_og.jpg"},
  
      {slug:"backflip-master-parkour-stunts", name:"Backflip Master: Parkour Stunts", cat:"Arcade", emoji:"🤸", desc:"Master physics-driven backflips on rooftops and cliffs. Crouch, tuck, spin and stick the landing.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/backflip-master-parkour-stunts/big_preview/60783fa9c41e413592e2bae8ada34e7b_og.jpg"},
  
      {slug:"arrow-puzzle", name:"Arrow Puzzle", cat:"Puzzle", emoji:"🏹", desc:"Clear the grid by removing arrows in the correct order in this logic puzzle. One blocked tap costs a life.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/arrow-puzzle/big-preview/6f9c8fc74f8a4dd39e6700bc24fce9ce_og.jpg"},
  
      {slug:"extreme-motorcycle-simulator", name:"Extreme Motorcycle Simulator", cat:"Racing", emoji:"🏍️", desc:"Ride with realistic motorcycle physics in an open world. Explore city and airport maps and unlock new bikes.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/extreme-motorcycle-simulator/big_preview/56c524ce34cd4ac790bdfd0379933ec9_og.jpg"},
  
      {slug:"cannon-blast", name:"Cannon Blast", cat:"Shooting", emoji:"💣", desc:"Master angles and power to trigger chain reactions in this arcade shooter. Smash jars, blocks and everything in the way.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/cannon-blast/big_preview/3e6de756e7e14e0fa1ba79aa118e89ad_og.jpg"},
  
      {slug:"boxing-stars", name:"Boxing Stars", cat:"Sports", emoji:"🥊", desc:"Rise from the underground to the championship in this boxing arena game. Mix attacks, blocks and movement to win.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/boxing-stars/big_preview/e924e27fd059432aaceb25596fa1695a_og.jpg"},
  
      {slug:"citadel-fortress-siege", name:"Citadel: Fortress Siege", cat:"Strategy", emoji:"🏰", desc:"Build and defend your stronghold in this medieval strategy game. Manage resources, command armies and conquer rival citadels.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/citadel-fortress-siege/big_preview/5b795673726e4c068551b19494098091_og.jpg"},
  
      {slug:"bridge-builder", name:"Bridge Builder", cat:"Simulation", emoji:"🌉", desc:"Test your engineering skills in this physics puzzle. Build structures strong enough to carry vehicles across the gap.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/bridge-builder/big-preview/4f12f6a379db4666a4b3141c7aa23441_og.jpg"},
  
      {slug:"hole-feast", name:"Hole Feast", cat:"Arcade", emoji:"🕳️", desc:"Glide your hole across the map, swallow objects and grow in this io-style munch-fest. Outgrow every rival hole.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/preview/a4236534bbfc4137b424b50f91f3ed5b_og.jpg"},
  
      {slug:"english-checkers-online-multiplayer", name:"English Checkers Online", cat:"Board", emoji:"⚫", desc:"Classic English checkers against the computer or real players. Capture every opponent checker — or block them completely.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/preview/ef1c9de1c5c14afb90bf333c8dd34a4a_og.jpg"},
  
      {slug:"ludo", name:"Ludo", cat:"Board", emoji:"🎲", desc:"Classic Ludo with 3D boards and unique tokens. Roll the dice and race all four tokens home before your opponents.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/ludo/big_preview/3c3e97fe886a47dba725826f4ed32012_og.jpg"},
  
      {slug:"galaxy-clicker", name:"Galaxy Clicker", cat:"Arcade", emoji:"🪐", desc:"Explore planets and stars in this idle clicker. Earn income, merge planets and upgrade your stats.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/galaxy-clicker/big-preview/c48f3e8602634539a0376552a1d76bb9_og.jpg"},
  
      {slug:"abyss-gate-mmorpg", name:"Abyss Gate: MMORPG", cat:"Action", emoji:"⚔️", desc:"Explore dungeons, fight bosses and compete in PvP in this multiplayer action RPG. Create a hero, master weapon skills and battle through the abyss.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/abyss-gate-mmorpg/big_preview/0c2988a319ad449b8692837c21baf6ed_og.jpg"},
  
      {slug:"beast-squad", name:"Beast Squad", cat:"Action", emoji:"🦁", desc:"A 3v3 arena shooter starring cartoon animals with toy weapons. Haul crystals, score knockouts and win rounds with your squad.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/preview/ece4f971d1744450b16750d4d3dd0fef_og.jpg"},
  
      {slug:"bottle-jump-3d", name:"Bottle Jump 3D", cat:"Arcade", emoji:"🍾", desc:"Master the bottle flip challenge in this 3D skill game. Flip your bottle through obstacle-filled rooms and land it upright.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/bottle-jump-3d/big_preview/845373a9035146028a44366f2e2bbdae_og.jpg"},
  
      {slug:"arrow-escape-puzzle", name:"Arrow Escape Puzzle", cat:"Puzzle", emoji:"🏹", desc:"Solve challenging puzzles by moving arrows in the correct direction to clear the board. One wrong move and the board stays stuck.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/arrow-escape-puzzle/big_preview/9af45250296d410a9a25a4f993c84db3_og.jpg"},
  
      {slug:"bike-hill-3d", name:"Bike Hill 3D", cat:"Racing", emoji:"🚲", desc:"Race down steep 3D hills, dodge obstacles and beat other riders to the finish in this downhill biking game.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/preview/3890ffc49c08404b832b8b12a1006390_og.jpg"},
  
      {slug:"beam-crash-polygon", name:"Beam Crash Polygon", cat:"Racing", emoji:"🚗", desc:"Test car durability with soft-body physics in this driving destruction sandbox. Crash, compare and destroy.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/beam-crash-polygon/big_preview/39d42d002abe4ca997d3c99a98d9b853_og.jpg"},
  
      {slug:"attack-of-zombies", name:"Attack of Zombies", cat:"Shooting", emoji:"🧟", desc:"Survive waves of undead in this shooting game. Unlock weapons, use tactical items and fight bosses.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/attack-of-zombies/big_preview/9b31d77b48bc483ba974f4dc8dbd8685_og.jpg"},
  
      {slug:"coastfall-drone-strike", name:"Coastfall: Drone Strike", cat:"Action", emoji:"🛩️", desc:"Pilot an armed drone through twelve tactical sorties. Use night-vision, dodge missiles and protect friendly troops.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/preview/72c6cb2a1d8a4f84811d45484372c2ca_og.jpg"},
  
      {slug:"baseball-league", name:"Baseball League", cat:"Sports", emoji:"⚾", desc:"Test your timing in this skill-based batting game. Read the pitch, swing for home runs and chase high scores.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/baseball-league/big-preview/748cefcf43d14f8bb363200ae4682a93_og.jpg"},
  
      {slug:"billiard-challenge", name:"Billiard Challenge", cat:"Sports", emoji:"🎱", desc:"Test your precision in this skill-based billiards game. Pot balls within limited attempts across varied tables.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/billiard-challenge/big_preview/64d9edc3c480476ab3902039aef973c0_og.jpg"},
  
      {slug:"booblyc-td-card-tower-defense", name:"Booblyc TD: Card Tower Defense", cat:"Strategy", emoji:"🃏", desc:"Defend your kingdom in this story-driven tower defense with a card twist. Collect cards to upgrade your units.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/preview/53eedca0c3724bc1a95bb5495195c846_og.jpg"},
  
      {slug:"army-evolution-merge--tactics", name:"Army Evolution: Merge & Tactics", cat:"Strategy", emoji:"🪖", desc:"Build an army across eras by merging units and using tactical placement. Evolve from spears to heavy artillery.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/army-evolution-merge--tactics/big_preview/ab869467136a42bea03b506a796b2674_og.jpg"},
  
      {slug:"bimka-the-master-of-destruction", name:"Bimka: The Master of Destruction", cat:"Simulation", emoji:"💥", desc:"Experience realistic car physics and body deformation in this destruction simulator. Crash, smash and test every car.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/bimka-the-master-of-destruction/big_preview/dfb688515bb247fcb9f3e9c73d3b1ee6_og.jpg"},
  
      {slug:"animal-hospital-3d", name:"Animal Hospital 3D", cat:"Simulation", emoji:"🏥", desc:"Explore a 3D physics sandbox with ragdoll characters, vehicles and building tools. No goal — just create and experiment.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/animal-hospital-3d/big_preview/f2ccef16c86141f297907262648af44a_og.jpg"},
  
      {slug:"age-arena", name:"Age Arena", cat:"Arcade", emoji:"🛡️", desc:"Compete in fast-paced 60-second arena battles where your weapons fight for you. Evolve from the Stone Age to the Robot Age.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/preview/c825f38fb6134d4fa681af06ed324111_og.jpg"},
  
      {slug:"chess-online-playing", name:"Chess Online", cat:"Board", emoji:"♟️", desc:"Classic chess against real players, AI or a friend. Challenge opponents online or train against the computer.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/chess-online-playing/big-preview/21a2ea2e959c4c59856c90f7e4897dd4_og.jpg"},
  
      {slug:"domino-online-multiplayer", name:"Domino Online Multiplayer", cat:"Board", emoji:"🎲", desc:"Challenge opponents in classic domino matches online. Match numbers, empty your hand first and win.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/preview/cb47eb3cea0d456f814856a5f6db7649_og.jpg"},
  
      {slug:"1-speed-click", name:"+1 Speed Click", cat:"Arcade", emoji:"⚡", desc:"Master speed-based obstacle courses in this clicker game. Tap to boost your character, win races and unlock new worlds.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/1-speed-click/big_preview/35dffbd6ff4846bcb9077c304f2b32dc_og.jpg"},
  
      {slug:"anima-saga--clicker-rpg", name:"Anima Saga: Clicker RPG", cat:"Arcade", emoji:"🐉", desc:"Embark on an idle fantasy adventure where every click helps you defeat monsters. Earn gold, recruit allies and grow stronger.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/anima-saga--clicker-rpg/big-preview/6acf30361dbd4efcaee2a5e2f00a81c7_og.jpg"},
  
      {slug:"animal-hair-salon", name:"Animal Hair Salon", cat:"Simulation", emoji:"✂️", desc:"Design, cut and colour unique hairstyles for adorable animals in this creative beauty salon game.", license:"Playgama", source:"Playgama", thumb:"https://static.playgama.com/p-img/pg/animal-hair-salon/big-preview/8ac649a2cf904f6091271cdecbab4055_og.jpg"}
];
