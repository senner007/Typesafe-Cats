"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EnumCatSize;
(function (EnumCatSize) {
    EnumCatSize[EnumCatSize["Small"] = 3] = "Small";
    EnumCatSize[EnumCatSize["Medium"] = 4] = "Medium";
    EnumCatSize[EnumCatSize["Large"] = 5] = "Large";
})(EnumCatSize || (EnumCatSize = {}));
exports.EnumCatSize = EnumCatSize;
function Cat(size, description) {
    if (!(size in EnumCatSize))
        throw "not valid size!";
    return {
        size: size,
        description: description,
        doubleSize: function () {
            return size * 2;
        }
    };
}
exports.Cat = Cat;
function CatDomestic(cat) {
    return Object.assign({ domestic: true }, cat);
}
exports.CatDomestic = CatDomestic;
function CatRobot(cat, cpu) {
    cat.description = "mechanic";
    return Object.assign({ cpu: cpu }, cat);
}
exports.CatRobot = CatRobot;
