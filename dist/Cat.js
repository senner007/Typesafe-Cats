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
var node_fetch_1 = require("node-fetch");
var Animal = /** @class */ (function () {
    function Animal(size) {
        if (size < 1)
            throw "invalid size";
        this.size = size;
    }
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name, size) {
        var _this = _super.call(this, size) || this;
        _this.speed = 0;
        _this.sound = "miauw"; // also accesible within derived class
        _this.name = name;
        return _this;
    }
    Object.defineProperty(Cat.prototype, "getSize", {
        get: function () {
            return this.size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cat.prototype, "setSize", {
        set: function (newSize) {
            if (newSize < 1 || newSize > 10) {
                throw "invalid size";
            }
            this.size = newSize;
        },
        enumerable: true,
        configurable: true
    });
    Cat.prototype.run = function (speed) {
        this.speed += speed;
        console.log(this.name + " runs with speed " + this.speed + ".");
    };
    Cat.prototype.stop = function () {
        this.speed = 0;
        console.log(this.name + " stopped.");
    };
    Cat.prototype.speak = function () {
        return this.name + " says " + this.sound;
    };
    Cat.prototype.getGiphy = function (giphy) {
        if (giphy === void 0) { giphy = this.constructor.name; }
        return node_fetch_1.default("http://api.giphy.com/v1/gifs/search?q=" + giphy + "&api_key=VnykWQzn8GSjtW3YhPG1N9jXvZ6oZpvC&limit=1");
    };
    return Cat;
}(Animal));
exports.Cat = Cat;
