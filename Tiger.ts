import {Cat} from "./Cat";
// const fetch = require('node-fetch');


class Tiger extends Cat {

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

