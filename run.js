
const readline = require('readline');
const Game = require('./src/Game');
const runInteractiveConsole = require('./src/keyboard');


// Инициализация игры с настройками.
const game = new Game({
  trackLength: 30,
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.question('Представься, подаван?:', (name) => {
  runInteractiveConsole(game);
  console.log(`${name}, играть будем?`);

});
