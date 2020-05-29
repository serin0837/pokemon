class Pokemon{
  constructor(name, sound, move){
    this.name = name;
    this.hitpoint = 100;
    this.attackdamage = 0;
    this.sound = sound;
    this.move = move;
    this.type = "normal";
  } 
}



module.exports = Pokemon;
