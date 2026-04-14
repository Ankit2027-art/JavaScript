const myArr = [0 ,3, 5, 9, 7 ,2]

console.log(myArr[1])

//shallo copy--(Jo bhi changes kare ge oo orignal array me changes hoga.)
let a = { x: 10};
let b = a;
b.x = 20;
console.log(a.x);

//Deep copy--(Jo bhi changes kare ge oo orignal array me changes nahi hoga.)
let aa = { xx: 10 };
let bb = { ...a};// use when protect the orignal data.
bb.xx =20
console.log(aa.xx);

const myArr2 = new Array(1,2,3,4,5)
console.log(myArr2[0]);
