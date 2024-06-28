// Враг.

class Enemy {
  constructor() {
    this.generateSkin();
    this.position = 8;
  }

  generateSkin() {
    const skins = [
      "👾",
      "💀",
      "👹",
      "👻",
      "👽",
      "👿",
      "💩",
      "🤡",
      "🤺",
      "🧛",
      "🧟",
      "🎃",
    ];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  die() {
    this.position = "?";
    console.log("Enemy is dead!");
  }
  moveRandomly() {
    const position = Math.random() < 0.5 ? -1 : 1;
    this.moveLeft(position);
  }
}

module.exports = Enemy;
