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




let isLoggedIn = ""
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 =>false
// " " => false
//"hitesh" => true


