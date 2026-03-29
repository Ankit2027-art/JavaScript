/*
let score = "33"

console.log(typeof score);
console.log(typeof(score));
//"33" => 33

let valueInNumber = Number(score)
console.log(typeof valueInNumber);

let scoree = "33abc"
let value = Number(scoree)
console.log(typeof value);
console.log(value); //NaN(Not a number)
// "33abc" => NaN

let a= "Undefine"
let v = Number(a)
console.log(typeof v);
console.log(v); 

let b= true  // Don't True
let vb = Number(b)
console.log(typeof vb);
console.log(vb); 
// true => 1; false=> 0

*/


let isLoggedIn = ""
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 =>false
// " " => false
//"hitesh" => true

// ************ Oprations ************
 let value = 3
 let neqValue = -value
 console.log(neqValue);

let str1 = "Hello"
let str2 = "Ankit"

let str3 = str1 + str2
console.log(str3)


//onsole.log("1" + 2);
//console.log(1 + "2");
//console.log("1" + 2 +2);
//console.log(1 + 2 + "2");

console.log((3 + 4) * 5 % 3);  //2
console.log(+""); //0

let gamecounter = 100
//gamecounter++;
//postfix => 101

++gamecounter
//prefix => 101
console.log(gamecounter);




let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

