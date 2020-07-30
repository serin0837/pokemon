const { Pokemon, Ivysaur, Wartortle, Charmander } = require("./pokemon");

const Trainer = require("./trainer");

class Battle {
  constructor(trainer1, trainer2) {
    this.trainer1 = trainer1;
    this.trainer2 = trainer2;
  }
}
module.exports = Battle;
