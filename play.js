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
console.log(arrayPokemons);
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
        console.log(`You got ${pokemon1.name} in your pokeball`);
        const pokemon2 =
          arrayPokemons[Math.floor(Math.random() * pokemons.length)];
      });
  },
};

game.start();
