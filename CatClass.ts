
abstract class Animal {
  abstract size: number;
  set setSize(newSize : number) {
      this.size = newSize;
  }
}

class CatClass extends Animal{
  speed : number = 0;
  size : number;
  readonly name : string;
  protected sound : string = "miauw"; // also accesible within derived class
  
  constructor(name : string, size : number) {
    this.name = name;
    this.size = size;
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