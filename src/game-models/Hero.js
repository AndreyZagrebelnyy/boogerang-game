class Hero {
  constructor(args = {}) {
    this.skin = '👻'; 
    this.position = args.position || 0;
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }

  attack() {
    // Атакуем.
    this.boomerang.fly();
  }

  die() {
    this.skin = 'U+200D';
    console.log('КОНЕЦ!');
    process.exit();
  }
}

module.exports = Hero;
