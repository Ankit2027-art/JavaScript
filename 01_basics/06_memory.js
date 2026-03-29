//****************** Types of memory **************** */

// 1- stack (primative)
// 2- hrap (reference)


let myYoutubechannel = "Ankit's Tech world"

let anothername = myYoutubechannel
anothername = "Code with Ankit"

console.log(myYoutubechannel);
console.log(anothername)

let userOne = {
    email: "user558@mail.com",
    upi :"265@ybl"
}

let userTwo = userOne

userTwo.email ="newemail@example.com"

console.log(userOne.email);
console.log(userTwo.email);