class Trainer {
  constructor(name, store) {
    this.name = name;
    this.store = store;
    this.storage = [];
  }
  catch(pokemon) {
    this.storage.push(pokemon);
  }
}

module.exports = Trainer;
