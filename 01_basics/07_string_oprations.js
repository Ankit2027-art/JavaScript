let str = "  Hello Ankit 123 !! hello ANKIT ";

//Char at any spacific position.
console.log(str.charAt(2));

//Find lenght of String.
console.log(str.length);

//Searching

    //First position of word
console.log(str.indexOf("Ankit"));

    //find last index of any character
console.log(str.lastIndexOf("o"));

    //Present  word/char in a string
console.log(str.includes("Ankit"));

    //Startwith() /endwith()
console.log(str.startsWith("  Hello"));
console.log(str.endsWith("Ankit "));


//Extract Methods

      //extract spac part
console.log(str.slice(0 ,8));

      //substring()(its like slice)
console.log(str.substring(0, 8));


//REPLACE METHODS

    //Replace()
console.log(str.replace("Ankit","Aryan"));

    //Relace all same word present in string
let strr = "hello hello";
console.log(strr.replaceAll("hello", "hi"));

//CASE Conversion
  
   //toUppercase()/to LowerCase()
   console.log(str.toUpperCase()); 
   console.log(str.toLowerCase());

//TRIM METHODS
  
    //Extra space remove
    console.log(str.trim());

    //At start& end
    console.log(str.trimStart());
    console.log(str.trimEnd());

//SPLIT & JOIN TYPE

    //convert string to array
    console.log(str.split(" "));
    
//REPEAT & PADDING
   
    //repeate string on n time.
    console.log(str.repeat(3));

    //add new string in  exist string
    let num = "5"
    console.log(num.padStart(4, "0"));
    console.log(num.padEnd(4,"0"));

//MATCH & SEARCH
    let st = "hello123";
    //gives starting number if given range
    console.log(str.match(/[0-9]/));

    //search() [gives index of starting string]
    console.log(st.search("123"))

//COMPARE
    //local compare()
    //console.log("a".localeCompare("b"));
    //-o/t=> "a"<"b"=>-1,"a">"b"=>1,"a"="b"=>0
    console.log("apple".localeCompare("banana")); 
    console.log("cat".localeCompare("bat")); 
    console.log("hi".localeCompare("hi"));


//Concat
    //String add
    let a = "Hello";
    let b = "Ankit";
    console.log(a.concat(" ", b));


//ITERATOR
    
let s = "hi";

for (let ch of s) {
  console.log(ch);
}