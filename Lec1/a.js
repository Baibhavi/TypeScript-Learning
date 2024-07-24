"use strict";
//inference - when datatype is automatically understood/decided by the compiler
//let a = 10;
//a = 20; //can be changed within same datatype
//a = "sam"; 
//let b:number = 10; //better way to copup with inference
//b = 30;
//------------------------------------------------------------------------------------------------------------------------------------------------
//tuple - immutable arrays
// let tup :[string,string,number] = ["Payal", "Priya", 20]// here number of elements can't exceed 3 niether you can change the order of elements bcs it differ in types
// let arr:number[] = [1,2,3,2]
// let arr2 : string[] = ["sam", "vohra", "40"]
//-----------------------------------------------------------------------------------------------------------------------------------------------
//functions
// function sam(a:number, b:number){ //avoid 'any' , incase you don't know the type assign 'unknown'
//     console.log(a+b)
// }
// function sam(a:number, b:number) : number{ 
//     console.log(a+b)
//     //return 10;
// }
// sam(10,20)
// hof -----------------------------------------------------------------------------------------------------------------------------------
function sam(fn) {
    console.log("I am sam");
}
function b() {
    console.log("I am b");
}
sam(b);
// function sam(fn : ()=> string) : boolean{
//     console.log("I am sam");
//     return true
// }
// function b(){
//     console.log("I am b")
//     return "helloe"
// }
// sam(b)
