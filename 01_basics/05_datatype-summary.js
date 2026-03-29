//Primitive(call by value)

// 7 types : String,Number.boolean,null,undefined,Symobol,BigInt


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

console.log(id === anotherId);

// Reference (Non Premitive)

// Array, object ,function




const score = 100 //number
const scoreValue = 100.3     // number

const isLoggedIn = false    //boolean
const outsideTemp = null    //object
let userEmail;              //undefine

const heros = ["Shaktiman","Naagraj","dogo"]  //object
let myObj = {
    name: "Ankit",
    age :19
}                           //object

const myFunction = function(){
    console.log("Hello Ankit");
}

console.log(typeof myObj);

