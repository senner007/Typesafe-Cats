"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tiger_1 = require("./Tiger");
// var cat = Cat(5, "fluffy");
// var cat2 = Cat(EnumCatSize.Small, "fluffy");
// var catDomestic = CatDomestic(cat);
// console.log(cat)
// console.log(cat.purr())
// console.log(catDomestic)
// console.log(CatRobot(catDomestic, "Intel"));
var tiger = new Tiger_1.Tiger("Khan", 3);
console.log(tiger);
tiger.run(5);
tiger.sprint();
console.log(tiger.getSize);
tiger.setSize = 10;
console.log(tiger.getSize);
console.log(tiger.speak());
console.log(tiger);
