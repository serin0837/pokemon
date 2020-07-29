const {Pokemon} = require("./pokemon");

describe('every pokemon have eaxh property', () => {
  test("got name", () => {
  const pokemon1 = new Pokemon("pulin");
  expect(pokemon1.name).toBe("pulin");
  });
  test("got sound", () => {
  const pokemon1 = new Pokemon("pulin", "pupulin");
  expect(pokemon1.sound).toBe("pupulin");
  });
  test("got move", () => {
  const pokemon1 = new Pokemon("pulin", "pupulin", "singing");
  expect(pokemon1.move).toBe("singing");
  });
});

describe('every pokemon have default', () => {
  test("got hit point", () => {
  const pokemon1 = new Pokemon("pulin");
  expect(pokemon1.hitpoint).toBe(100);
  });
  test("got attackdamage", () => {
    const pokemon1 = new Pokemon("pulin");
    expect(pokemon1.attackdamage).toBe(0);
  });

  test("got type", () => {
    const pokemon1 = new Pokemon("pulin");
    expect(pokemon1.type).toBe("normal");
  });
});

  describe("talk()", () => {
    test("pokemon can talk with its name and sound", () => {
      const pokemon1 = new Pokemon("Pulin","Pupulin");
      const consoleLogSpy = jest.spyOn(console, "log");
      // consoleLogSpy will track the calls to console.log
        pokemon1.talk();
        expect(consoleLogSpy).toHaveBeenCalledWith(
        `My name is Pulin. Hello! Pupulin`
      );
    });
  });
   describe("useYourMoves", () => {
    test("retrurn favorite move", () => {
      const pokemon1 = new Pokemon("Pulin","Pupulin","singing");

      expect(pokemon1.useYourMoves()).toBe("singing");
    });
  });