const Battle = require("./battle");
const Trainer = require("./trainer");

test.only("battle have two trainer", () => {
  const trainer1 = new Trainer("jack", "kick");
  const trainer2 = new Trainer("serin", "punch");
  const battle1 = new Battle(trainer1, trainer2);
});
