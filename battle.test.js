const Battle = require("./battle");
const Trainer = require("./trainer");
const { Pokemon, Ivysaur, Wartortle, Charmander } = require("./pokemon");
describe("check properties working", () => {
  test("battle have two trainers with two pokemon", () => {
    const jack = new Trainer("jack", "popo");
    const serin = new Trainer("serin", "hug");
    const wartortle = new Wartortle();
    const charmander = new Charmander();
    jack.catch(charmander);
    serin.catch(wartortle);
    const battle1 = new Battle(jack, serin);
    expect(battle1.trainer1).toEqual(jack);
    expect(battle1.trainer2).toEqual(serin);
  });
  test.only('"battle have two trainers with two fight pokemon', () => {
    const jack = new Trainer("jack", "popo");
    const serin = new Trainer("serin", "hug");
    const wartortle = new Wartortle();
    const charmander = new Charmander();
    jack.catch(charmander);
    serin.catch(wartortle);
    const battle1 = new Battle(jack, serin);
    expect(battle1.fightpokemon1).toEqual(jack.storage[0]);
    expect(battle1.fightpokemon2).toEqual(serin.storage[0]);
  });
});
describe.only("battle have fight method", () => {
  test("change attacker and defender", () => {
    const jack = new Trainer("jack", "popo");
    const serin = new Trainer("serin", "hug");
    const wartortle = new Wartortle();
    const charmander = new Charmander();
    jack.catch(charmander);
    serin.catch(wartortle);
    const battle1 = new Battle(jack, serin);
    expect(battle1.whoesturn).toBe(1);
    battle1.fight();
    expect(battle1.whoesturn).toBe(2);
    battle1.fight();
    // console.log(battle1, "<-battle1");
  });
  test("multiply depending on pokemons weakness and strength", () => {
    const jack = new Trainer("jack", "popo");
    const serin = new Trainer("serin", "hug");
    const wartortle = new Wartortle();
    const charmander = new Charmander();
    jack.catch(charmander);
    serin.catch(wartortle);
    const battle1 = new Battle(jack, serin);
    //charmandor is attacker/wartortle is defender and charmander is weaker than tortle
    battle1.fight();
    console.log(battle1);
    expect(wartortle.health).toEqual(81); //wartortlehealth-9(charmander damage(12) *0.75)
  });
});
//why???????????????  initialise 1 ? why whoes turn 2??
// wartortle is 78 health at the moment
