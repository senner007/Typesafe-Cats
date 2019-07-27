class CatClass {
  speed : number = 0;
  name : string;
  size : number;
  sound : string = "miauw";
  
  constructor(name : string, size : number) {
    this.name = name;
    this.size = size;
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