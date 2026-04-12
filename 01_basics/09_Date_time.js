//+++++++++ DATE +++++++++

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());

console.log(typeof myDate)

//Note-in java 1 start with 0:
// let mycreatedDate = new Date(2006, 0 ,24)
// console.log(mycreatedDate.toDateString());

// let mycreated = new Date(2006, 0, 10, 5, 3)
// console.log(mycreated.toDateString());

let mycreatedDate = new Date("01-14-2023")
// console.log(mycreatedDate.toLocaleString())

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());

newDate.toLocaleDateString('defualt',{weekday: "long",})