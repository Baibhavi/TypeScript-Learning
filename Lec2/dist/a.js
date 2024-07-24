"use strict";
//kya comment file nazar aati hai?
// let arr = (a:number, b:number)=>{
//     return a+b;
// }
// arr(5,6);
class Sam {
    constructor(na, ag) {
        this.name = na,
            this.age = ag;
    }
    greet(phrase) {
        console.log(`${phrase} from ${this.name}`);
    }
}
