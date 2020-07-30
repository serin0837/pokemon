const Trainer = require("./trainer");
const { Pokemon } = require("./pokemon");
test("trainer got name,storing way ", () => {
  const trainer1 = new Trainer("serin", "punch");
  expect(trainer1.name).toBe("serin");
  expect(trainer1.store).toBe("punch");
});
test("trainer got catch method ", () => {
  const trainer1 = new Trainer("serin", "punch");
  const testpokemon = new Pokemon("turtle");
  trainer1.catch(testpokemon);
  expect(trainer1.storage).toEqual([testpokemon]);
});
