const { Pokemon } = require("./pokemon");

describe("every pokemon have each property", () => {
  test("got name", () => {
    const pokemon1 = new Pokemon("pulin");
    expect(pokemon1.name).toBe("pulin");
  });
  test("got sound", () => {
    const pokemon1 = new Pokemon(
      "pulin",
      100,
      0,
      "pupulin",
      "singing",
      "normal"
    );
    expect(pokemon1.sound).toBe("pupulin");
  });
  test("got move", () => {
    const pokemon1 = new Pokemon(
      "pulin",
      100,
      0,
      "pupulin",
      "singing",
      "normal"
    );
    expect(pokemon1.move).toBe("singing");
  });
});

describe("every pokemon have default", () => {
  test("got hit point", () => {
    const pokemon1 = new Pokemon("pulin");
    expect(pokemon1.health).toBe(100);
  });
  test("got attackdamage", () => {
    const pokemon1 = new Pokemon("pulin");
    expect(pokemon1.damage).toBe(10);
  });

  test("got type", () => {
    const pokemon1 = new Pokemon("pulin");
    expect(pokemon1.type).toBe("normal");
  });
});

describe("talk()", () => {
  test("pokemon can talk with its name and sound", () => {
    const pokemon1 = new Pokemon(
      "pulin",
      100,
      0,
      "pupulin",
      "singing",
      "normal"
    );
    const consoleLogSpy = jest.spyOn(console, "log");
    // consoleLogSpy will track the calls to console.log
    pokemon1.talk();
    expect(consoleLogSpy).toHaveBeenCalledWith(
      `My name is pulin. Hello! pupulin`
    );
  });
});
describe("useYourMoves", () => {
  test("retrurn favorite move", () => {
    const pokemon1 = new Pokemon(
      "pulin",
      100,
      0,
      "pupulin",
      "singing",
      "normal"
    );

    expect(pokemon1.useYourMoves()).toBe("singing");
  });
});
