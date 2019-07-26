interface ICat {
    readonly size : EnumCatSize;
    description : string;
    domestic? : boolean; // optional
    doubleSize: ()  => number;
}

enum EnumCatSize {
    Small = 3,
    Medium = 4,
    Large = 5
}

interface ICatRobot extends ICat {
    cpu: string;
}

function Cat(size : EnumCatSize, description : string) : ICat {
    if (!(size in EnumCatSize)) throw "not valid size!"
    return {
        size,
        description,
        doubleSize() {
            return size * 2;
        }
    }
}

function CatDomestic(cat: ICat) : ICat {
    return Object.assign({domestic :true}, cat);
}

function CatRobot(cat : ICat, cpu : string) : ICatRobot {
    cat.description = "mechanic";
    return Object.assign({ cpu }, cat);
}

export {
    Cat,
    CatDomestic,
    CatRobot,
    EnumCatSize
}