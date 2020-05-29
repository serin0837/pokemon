const Pokemon = require("./pokemon");
test("got name", () => {
  const pokemon1 = new Pokemon("pulin");
  expect(pokemon1.name).toBe("pulin");
});
test("got hit point", () => {
  const pokemon1 = new Pokemon("pulin");
  expect(pokemon1.hitpoint).toBe(100);
});
test("got attackdamage", () => {
  const pokemon1 = new Pokemon("pulin");
  expect(pokemon1.attackdamage).toBe(0);
});
test("got sound", () => {
  const pokemon1 = new Pokemon("pulin", "pupulin");
  expect(pokemon1.sound).toBe("pupulin");
});
test("got move", () => {
  const pokemon1 = new Pokemon("pulin", "pupulin", "singing");
  expect(pokemon1.move).toBe("singing");
});
test("got type", () => {
  const pokemon1 = new Pokemon("pulin");
  expect(pokemon1.type).toBe("normal");
});
