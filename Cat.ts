
import fetch from 'node-fetch';

abstract class Animal{
  protected size: number;
  constructor (size : number) {
    if (size < 1) throw "invalid size"
    this.size = size;
  } 
}

class Cat extends Animal {
  speed : number = 0;
  giphyUrl : string;
  readonly name : string;
  protected sound : string = "miauw"; // also accesible within derived class
  
  constructor(name : string, size : number) {
    super(size)
    this.name = name;
  }

  get getSize () {
    return this.size;
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

  getGiphy (giphy : string = this.constructor.name) :  Promise<any> {
    return fetch(`http://api.giphy.com/v1/gifs/search?q=${giphy}&api_key=VnykWQzn8GSjtW3YhPG1N9jXvZ6oZpvC&limit=1`)
      .then(res => res.json())
      .then(res => this.giphyUrl = res.data[0].url)
      .catch(error => console.error(error));
  }
  
}

export {
  Cat
}