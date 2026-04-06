const score = 400
console.log(score)
console.log(typeof score)


const balence = new  Number(100)
console.log(balence)
console.log(typeof balence)

console.log(balence.toString().length);
console.log(balence.toFixed(2))

const otherNumber = 123.8966
//gives round off
console.log(otherNumber.toPrecision(3));
console.log(otherNumber.toPrecision(2));

const hundreds = 1000000
//add coma
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++++ Maths  ++++++++++++++++

console.log(Math);

console.log(Math.abs(-4));    //  (negative → positive)
console.log(Math.round(4.6)); //5 (nearest round)
console.log(Math.ceil(4.2));  //5  (upar round)
console.log(Math.floor(4.9)); //4  
console.log(Math.trunc(4.9)); //4 (decimal hata deta hai)

console.log(Math.sign(-10));  // -1 (negative), 1 (positive)

console.log(Math.pow(2,3));   // 8   (2^3)
console.log(Math.sqrt(16));   // 4   (square root)
console.log(Math.cbrt(27));   // 3   (cube root)
console.log(Math.hypot(3, 4));// 5   (√(3²+4²))

// +++++++ Min / Max / Random +++++++++
console.log(Math.max(10,50,87,65));
console.log(Math.min(10,80,10,50));
console.log(Math.random()); //0 se 1 ke beech random number

// ++++++++ Log & Exponential ++++++++
console.log(Math.exp(1));         // e^1 ≈ 2.718
console.log(Math.log(10);       // natural log
console.log(Math.log2(8));    // 3
console.log(Math.log10(100))    // 2

