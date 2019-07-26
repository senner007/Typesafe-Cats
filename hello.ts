
/**
 * 
 * @param numbers
 */
function addNumbers (...numbers: number[]) : number {
    if (numbers.length < 1) throw "Missing number params!";
    return numbers.reduce((a,b) => a + b, 0);
}

/**
 *  https://code.visualstudio.com/updates/v1_10#_auto-jsdoc-comments
 * @param size 
 * @param description 
 * @param domestic (optional)
 */
function Cat(size : number, description : string, domestic : boolean = true) : {
    size : number;
    description : string;
    domestic : boolean;
} {
    return {
        size : size,
        description : description,
        domestic : domestic
    }
}

var cat = Cat(5, "cute");

console.log(addNumbers(1))
