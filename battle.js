const {
  Pokemon,
  Ivysaur,
  Wartortle,
  Charmander,
  Chikorita,
  Mudkip,
  Charizard,
} = require("./pokemon");

const Trainer = require("./trainer");

class Battle {
  constructor(trainer1, trainer2, n, m) {
    this.trainer1 = trainer1;
    this.trainer2 = trainer2;
    this.fightpokemon1 = trainer1.storage[n || 0];
    this.fightpokemon2 = trainer2.storage[m || 0];
    this.whoesturn = 1;
    this.round = 1;
  }
  fight() {
    let attacker;
    let defender;
    if (this.whoesturn === 1) {
      attacker = this.fightpokemon1;
      defender = this.fightpokemon2;
      this.whoesturn++;
    } else if (this.whoesturn === 2) {
      attacker = this.fightpokemon2;
      defender = this.fightpokemon1;
      this.whoesturn--;
    }
    let multiplier;
    if (
      (attacker.type === "grass" && defender.type === "water") ||
      (attacker.type === "water" && defender.type === "fire") ||
      (attacker.type === "fire" && defender.type === "grass")
    ) {
      multiplier = 1.25;
    } else if (
      (attacker.type === "water" && defender.type === "grass") ||
      (attacker.type === "fire" && defender.type === "water") ||
      (attacker.type === "grass" && defender.type === "fire")
    ) {
      multiplier = 0.75;
    } else {
      multiplier = 1;
    }
    let attackerDamage = attacker.damage * multiplier;
    defender.health -= attackerDamage;

    let message;
    if (defender.health > 0) {
      message = `Round ${this.round} : 
      ${attacker.name} damaged to ${defender.name} with ${attackerDamage} points. 
      ${defender.name} has ${defender.health} health left. `;
    } else {
      message = `Round ${this.round} : ${attacker.name} made ${defender.name} faint with ${attacker.move}.
      The winner is ${attacker.name}!!!! "Game Over"`;
    }
    let result = message;
    console.log(result);
    this.round++;
  }
}
module.exports = Battle;
