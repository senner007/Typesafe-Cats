import {Cat} from "./Cats";
import {Tiger} from "./Tiger";
import {CatDomestic} from "./Cats";
import {CatRobot} from "./Cats";
import {EnumCatSize} from "./Cats";


// var cat = Cat(5, "fluffy");
// var cat2 = Cat(EnumCatSize.Small, "fluffy");
// var catDomestic = CatDomestic(cat);

// console.log(cat)
// console.log(cat.purr())
// console.log(catDomestic)
// console.log(CatRobot(catDomestic, "Intel"));

var tiger = new Tiger("Khan", 3);
console.log(tiger)
// tiger.run(5);
// tiger.sprint();
// console.log(tiger.getSize);
// tiger.setSize = 10;
// console.log(tiger.getSize);
// console.log(tiger.speak());
// console.log(tiger)
tiger.getGiphy().then(res => console.log(tiger.giphyUrl))
tiger.addKill({animal : "antilope", date : new Date()});
console.log(tiger.getKills)
