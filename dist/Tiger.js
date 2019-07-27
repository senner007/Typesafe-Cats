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
var CatClass_1 = require("./CatClass");
var Tiger = /** @class */ (function (_super) {
    __extends(Tiger, _super);
    function Tiger(name, size) {
        var _this = _super.call(this, name, size) || this;
        _this.sound = "roar";
        return _this;
    }
    Tiger.prototype.speak = function () {
        return _super.prototype.speak.call(this) + "!";
    };
    Tiger.prototype.sprint = function () {
        console.log(this.name + " sprints with speed " + this.speed * 10 + ".");
    };
    return Tiger;
}(CatClass_1.CatClass));
exports.Tiger = Tiger;
