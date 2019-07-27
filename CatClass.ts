
abstract class Animal implements IAnimal{
  size: number;
  constructor (size : number) {
    this.size = size;
  } 
}

interface IAnimal {
  size: number;
}

class CatClass extends Animal {
  speed : number = 0;
  readonly name : string;
  protected sound : string = "miauw"; // also accesible within derived class
  
  constructor(name : string, size : number) {
    super(size)
    this.name = name;
  }

  set setSize(newSize : number) {
      if (newSize > 0 && newSize < 11) {
        this.size = newSize;
      }
      else throw "invalid size"
  }

  run(speed : number) {
    this.speed += speed;
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }

  stop()  {
    this.speed = 0;
    console.log(`${this.name} stopped.`);
  }

  speak() : string {
    return `${this.name} says ${this.sound}`;
  }
}

export {
  CatClass
}