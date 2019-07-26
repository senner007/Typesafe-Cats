"use strict";
// /**
//  * 
//  * @param numbers
//  */
// function addNumbers (...numbers: number[]) : number {
//     if (numbers.length < 1) throw "Missing number params!";
//     return numbers.reduce((a,b) => a + b, 0);
// }
Object.defineProperty(exports, "__esModule", { value: true });
var Cats_1 = require("./Cats");
var Cats_2 = require("./Cats");
var cat = Cats_1.Cat(5, "cute");
var catDomestic = Cats_2.CatDomestic(cat);
console.log(cat);
// console.log(cat.doubleSize())
console.log(catDomestic);
// console.log(CatRobot("intel"));
