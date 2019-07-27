"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Animal = /** @class */ (function () {
    function Animal(size) {
        this.size = size;
    }
    return Animal;
}());
var CatClass = /** @class */ (function (_super) {
    __extends(CatClass, _super);
    function CatClass(name, size) {
        var _this = _super.call(this, size) || this;
        _this.speed = 0;
        _this.sound = "miauw"; // also accesible within derived class
        _this.name = name;
        return _this;
    }
    Object.defineProperty(CatClass.prototype, "setSize", {
        set: function (newSize) {
            if (newSize > 0 && newSize < 11) {
                this.size = newSize;
            }
            else
                throw "invalid size";
        },
        enumerable: true,
        configurable: true
    });
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
}(Animal));
exports.CatClass = CatClass;
