class Pokemon {
  constructor(name, health, damage, sound, move, type) {
    this.name = name;
    this.health = health || 100;
    this.damage = damage || 10;
    this.sound = sound;
    this.move = move;
    this.type = type || "normal";
  }
  talk() {
    console.log(`My name is ${this.name}. Hello! ${this.sound}`);
  }
  useYourMoves() {
    return this.move;
  }
}

class Ivysaur extends Pokemon {
  constructor() {
    super("Ivysaur", 80, 15, "Saurrr", "Whip Whip", "grass");
  }
}
class Chikorita extends Pokemon {
  constructor() {
    super("Chikorita", 70, 11, "Chiko Chiko", "Leaf Guard ", "grass");
  }
}
class Wartortle extends Pokemon {
  constructor() {
    super("Wartortle", 90, 20, "Wartotletotle", "Water gun", "water");
  }
}

class Mudkip extends Pokemon {
  constructor() {
    super("Mudkip", 60, 10, "Kip Kip", "Damp", "water");
  }
}

class Charmander extends Pokemon {
  constructor() {
    super("Charmander", 70, 12, "Char----mandle!", "Fire Fang", "fire");
  }
}

class Charizard extends Pokemon {
  constructor() {
    super("Charizard", 200, 50, "Char----ized", "Solar power", "fire");
  }
}

module.exports = {
  Pokemon,
  Ivysaur,
  Wartortle,
  Charmander,
  Mudkip,
  Charizard,
  Chikorita,
};
