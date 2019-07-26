/**
 *
 * @param numbers
 */
function addNumbers() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    if (numbers.length < 1)
        throw "Missing number params!";
    return numbers.reduce(function (a, b) { return a + b; }, 0);
}
/**
 *  https://code.visualstudio.com/updates/v1_10#_auto-jsdoc-comments
 * @param size
 * @param description
 * @param domestic (optional)
 */
function Cat(size, description, domestic) {
    if (domestic === void 0) { domestic = true; }
    return {
        size: size,
        description: description,
        domestic: domestic
    };
}
var cat = Cat(5, "cute");
console.log(addNumbers(1));
