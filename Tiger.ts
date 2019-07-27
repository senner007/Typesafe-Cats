import {Cat} from "./Cat";
// const fetch = require('node-fetch');

interface ITigerKill {
  animal : string;
  date : Date;
}


class Tiger extends Cat {

  private kills : ITigerKill[] = [];

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

  addKill(kill : ITigerKill) {
    this.kills.push(kill);
  } 

  get getKills() : ITigerKill[] {
    return this.kills;
  } 

}

export {
    Tiger
}

