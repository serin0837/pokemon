class Pokemon{
  constructor(name, sound, move){
    this.name = name;
    this.sound = sound;
    this.move = move;
    this.type = "normal";
    this.hitpoint = 100;
    this.attackdamage = 0;
  } 
  talk(){
    console.log(`My name is ${this.name}. Hello! ${this.sound}`)
  }
  useYourMoves(){
    return this.move
  }
}

class Grass extends Pokemon{
  constructor(name, sound, move){
  super(name, sound, move,"Grass")
  }
}
class Water extends Pokemon{
  constructor(name, sound, move){
  super(name, sound, move,"Water")
  }
}
class Fire extends Pokemon{
  constructor(name, sound, move){
  super(name, sound, move,"Water")
}
}
module.exports = {Pokemon,Grass,Water,Fire};
