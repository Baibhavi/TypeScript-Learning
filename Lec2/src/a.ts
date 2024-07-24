//kya comment file nazar aati hai?
// let arr = (a:number, b:number)=>{
//     return a+b;
// }
// arr(5,6);

//------------------------------------------objects -------------------------------------------------------

// let user = {
//     name: "Rahul",
//     age:10,
//     password : 123456,
//     email : "rahul@gmail.com",
//     //isMale : true
// }

// function isAdult(user:{
//     name: string,
//     age: number,
//     password : number,
//     email : string,
//     isMale ?: boolean // ? to make it optional property
// }){
//     if(user.age >= 18){
//         return true
//     }
//     else{
//         return false
//     }
// }

//console.log( isAdult(user))

// what is interface?
// interface User{
//     name: string,
//     age: number,
//     password : number,
//     email : string,
//     isMale ?: boolean // ? to make it optional property
// }
// function isAdult(user: User){
//     if(user.age >= 18){
//         return true
//     }
//     else{
//         return false
//     }
// }


// Interface for class

// interface X{
//     name : string
//     age : number
// }
// interface Y extends X{
//     greet(phrase:string) :void
// }
// //class Person extends Sam{} //same entity k liye extends and diff entity k liye implements
// class Sam implements Y{
//     name : string
//     age : number
//     constructor(na: string, ag : number){
//         this.name = na,
//         this.age = ag
//     }
//     greet(phrase : string){
//         console.log(`${phrase} from ${this.name}`)
//     }
// }
// let p1 = new Sam('sam', 1)
// let p2 = new Sam('mav', 2)
// console.log(p1, p2)
// p1.greet("hello")

//-----------------------------------Interface and Types----------------------------------------

//type syntax follows union(or) , intersection(and)
// interface syntax allows intersection using extends but do not follow unioon
// in case of objects we can use any one of type and interface

// type DSA = {
//     name: string,
//     age: number,
//     password : number,
//     email : string,
//     isMale ?: boolean
// }
// interface User{
//     name : string, //mininum itna likhna padega, object bnana hi padega
// }
// type Sam = string; // type me single line bhi chal jayga

// intersection/union in Type

// type DSA = {
//     teach : string,
//     questions: number
// }

// type WEB = {
//     project : number
// }

// type Final = DSA & WEB; // intersection (and)
// type Final2 = DSA | WEB; // union(or)

//----------------mixmatch interface and type---------------------------------------------------------------

// // if type comes first then syntax of type is used in mixing and vice versa
// interface DSA {
//     teach : string,
//     questions: number
// }

// type WEB = DSA &{
//     project : number
// }

// type DSA = {
//     teach : string,
//     questions: number
// }

// interface WEB extends DSA {
//     project : number
// }

//----------------------------------------------- classes using types -------------------------------------------------------------------
//class me types k through intersection and implements hi perform ho skta hai, union(|) class me nahi chalta isliye classes me interface hi use hota h

type X = {
        name : string
        age : number
}
type Y = X &{
        greet(phrase:string) :void
}
class Sam implements Y{
    name : string
    age : number
    constructor(na: string, ag : number){
        this.name = na,
        this.age = ag
    }
    greet(phrase : string){
        console.log(`${phrase} from ${this.name}`)
    }
}