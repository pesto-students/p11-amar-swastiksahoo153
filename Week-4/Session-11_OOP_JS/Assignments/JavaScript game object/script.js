// Your solution goes here
// script.js

const game = {
  lives: 3,
  coins: 0,

  get points() {
    return this.coins * 10;
  },

  playerDies() {
    if (this.lives > 0) {
      this.lives -= 1;
    }
  },

  newGame() {
    this.lives = 3;
    this.coins = 0;
  },
};

game.coins = 5;
console.log(game.points); // Output: 50 (5 coins * 10 = 50 points)

game.playerDies();
console.log(game.lives); // Output: 2

game.newGame();
console.log(game.lives); // Output: 3
console.log(game.coins); // Output: 0
console.log(game.points); // Output: 0 (0 coins * 10 = 0 points)

console.log("lives = " + game.lives); // should be 3
console.log("coins = " + game.coins); // should be 0
console.log("points = " + game.points); // should be 0
game.coins = 2;
console.log("points = " + game.points); // should be 20
game.playerDies();
console.log("lives = " + game.lives); // should be 2
game.playerDies();
game.playerDies();
game.playerDies();
console.log("lives = " + game.lives); // should be 0
game.newGame();
console.log("lives = " + game.lives); // should be 3
console.log("coins = " + game.coins); // should be 0
