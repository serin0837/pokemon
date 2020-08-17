const inquirer = require("inquirer");

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
const Battle = require("./battle");

const pokemons = {
  Ivysaur: new Ivysaur(),
  Wartortle: new Wartortle(),
  Charmander: new Charmander(),
  Chikorita: new Chikorita(),
  Mudkip: new Mudkip(),
  Charizard: new Charizard(),
};

const arrayPokemons = Object.keys(pokemons);
const trainers = [
  "Serin",
  "Jack",
  "James",
  "Joe",
  "Danny",
  "Anna",
  "Nash",
  "Kim-jeongeun",
  "Trump",
  "Putin",
];
const game = {
  start() {
    inquirer
      .prompt({
        type: "confirm",
        name: "start",
        message: "shall we play game?",
        default: true,
      })
      .then((answers) => {
        if (answers.start) {
          console.log("Let's start!");
          game.setUp();
        } else {
          console.log("Bye bye");
        }
      });
  },
  setUp() {
    inquirer
      .prompt({
        type: "input",
        name: "player",
        message: "What is your name?",
        default: () => {
          return "Best trainer?";
        },
      })
      .then((answers) => {
        const trainer1 = new Trainer(answers.player);
        const trainer2 = new Trainer(
          trainers[Math.floor(Math.random() * trainers.length)]
        );
        console.log(
          `
          Hello!${trainer1.name}.
          Your competitor today is ${trainer2.name} :) 
          Let's see what pokemon you can catch to play with ${trainer2.name}!
          `
        );
        game.catch(trainer1, trainer2);
      });
  },

  catch(trainer1, trainer2) {
    inquirer
      .prompt({
        type: "list",
        name: "catch",
        message: "Get ready your pokeball. Which pokemon do you want to catch?",
        choices: arrayPokemons,
      })
      .then((answers) => {
        const pokemon1 = pokemons[answers.catch];
        trainer1.catch(pokemon1);
        console.log(
          `
          Great!!! Can you hear your pokemon sound? '${pokemon1.sound}'
          You have ${pokemon1.name} in your pokeball
          `
        );
        const randomPoke =
          arrayPokemons[Math.floor(Math.random() * arrayPokemons.length)];
        const pokemon2 = pokemons[randomPoke];
        trainer2.catch(pokemon2);

        let evaluation;
        if (
          (pokemon1.type === "grass" && pokemon2.type === "water") ||
          (pokemon1.type === "water" && pokemon2.type === "fire") ||
          (pokemon1.type === "fire" && pokemon2.type === "grass")
        ) {
          evaluation = `${pokemon1.name} is stronger than ${pokemon2.name}`;
        } else if (
          (pokemon1.type === "water" && pokemon2.type === "grass") ||
          (pokemon1.type === "fire" && pokemon2.type === "water") ||
          (pokemon1.type === "grass" && pokemon2.type === "fire")
        ) {
          evaluation = `${pokemon2.name} is stronger than ${pokemon1.name}`;
        } else {
          evaluation = `The pokemons are of the same type`;
        }
        console.log(
          `
          ${trainer2.name} have ${pokemon2.name} in pokeball.

          ${pokemon1.name} has ${pokemon1.health} health, 
          can cause ${pokemon1.damage}points of damage,
          and type of ${pokemon1.type}. '${pokemon1.sound}', 

          ${pokemon2.name} has ${pokemon2.health} health, 
          can cause ${pokemon2.damage}points of damage,
          and type of ${pokemon2.type}. '${pokemon2.sound}', 
        `
        );
        game.battle(trainer1, trainer2);
      });
  },
  battle(trainer1, trainer2) {
    inquirer
      .prompt({
        type: "confirm",
        name: "battle",
        message: "Are you ready to battle?",
        default: true,
      })
      .then((answers) => {
        if (answers.battle) {
          const battle = new Battle(trainer1, trainer2);
          while (
            battle.fightpokemon1.health > 0 &&
            battle.fightpokemon2.health > 0
          ) {
            battle.fight();
          }
        }
      });
  },
};

game.start();
