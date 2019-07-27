
abstract class Animal{
  protected size: number;
  constructor (size : number) {
    if (size < 1) throw "invalid size"
    this.size = size;
  } 
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
    if (newSize < 1 || newSize > 10) {
      throw "invalid size";
    }

    this.size = newSize; 
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