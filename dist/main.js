"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cats_1 = require("./Cats");
var Cats_2 = require("./Cats");
var Cats_3 = require("./Cats");
var Cats_4 = require("./Cats");
var cat = Cats_1.Cat(5, "fluffy");
var cat2 = Cats_1.Cat(Cats_4.EnumCatSize.Small, "fluffy");
var catDomestic = Cats_2.CatDomestic(cat);
console.log(cat);
console.log(cat.doubleSize());
console.log(catDomestic);
console.log(Cats_3.CatRobot(catDomestic, "Intel"));