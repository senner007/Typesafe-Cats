import {Cat} from "./Cats";
import {CatDomestic} from "./Cats";
import {CatRobot} from "./Cats";
import {EnumCatSize} from "./Cats";

var cat = Cat(5, "fluffy");
var cat2 = Cat(EnumCatSize.Small, "fluffy");
var catDomestic = CatDomestic(cat);

console.log(cat)
console.log(cat.speak())
console.log(catDomestic)
console.log(CatRobot(catDomestic, "Intel"));
