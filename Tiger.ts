import {CatClass} from "./CatClass";

class Tiger extends CatClass {

  constructor (name : string, size : number) {
    super(name, size);
    this.sound = "roar";
  }

  speak() : string {
    return super.speak() + "!";
  }

  sprint () {
    console.log(`${this.name} sprints with speed ${this.speed * 10}.`);
  }
}

export {
    Tiger
}

