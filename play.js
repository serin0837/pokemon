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
          console.log("bye");
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
          `Hello!${trainer1.name}. Your competitor today is ${trainer2.name} :) Let's see what pokemon you can catch!`
        );
        game.catch(trainer1, trainer2);
      });
  },

  catch(trainer1, trainer2) {
    inquirer
      .prompt({
        type: "list",
        name: "catch",
        message: "Which pokemon do you want to catch?",
        choices: arrayPokemons,
      })
      .then((answers) => {
        const pokemon1 = pokemons[answers.catch];
        trainer1.catch(pokemon1);
        console.log(`You have ${pokemon1.name} in your pokeball`);
        const randomPoke =
          arrayPokemons[Math.floor(Math.random() * arrayPokemons.length)];
        const pokemon2 = pokemons[randomPoke];
        trainer2.catch(pokemon2);
        console.log(`${trainer2.name} have ${pokemon2.name} in pokeball`);
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
