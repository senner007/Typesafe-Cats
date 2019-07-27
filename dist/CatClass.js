"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CatClass = /** @class */ (function () {
    function CatClass(name, size) {
        this.speed = 0;
        this.sound = "miauw";
        this.name = name;
        this.size = size;
    }
    CatClass.prototype.run = function (speed) {
        this.speed += speed;
        console.log(this.name + " runs with speed " + this.speed + ".");
    };
    CatClass.prototype.stop = function () {
        this.speed = 0;
        console.log(this.name + " stopped.");
    };
    CatClass.prototype.speak = function () {
        return this.name + " says " + this.sound;
    };
    return CatClass;
}());
exports.CatClass = CatClass;
