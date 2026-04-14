const myArr = [0 ,3, 5, 9, 7 ,2]

//add nre elements in array
// myArr.push(6)
// console.log(myArr)

//Remove last element of array

// myArr.pop()
console.log(myArr)

//Unshift-insert value at first:
// myArr.unshift(9)
// console.log(myArr)

// myArr.shift()
// console.log(myArr)

console.log(myArr.includes(9));//-rue/false
console.log(myArr.indexOf(9)); 

// const newArray = [1,2,3,4,5]
const newArr = myArr.join()
console.log(myArr)
console.log(typeof newArr)
console.log(newArr)

//Slice,splice
console.log("A ",myArr)
const myn1 = myArr.slice(1,3)
console.log(myn1)
console.log("B",myArr)


const myn2 = myArr.splice(1,3)
console.log("c ",myArr)
console.log(myn2)