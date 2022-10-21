// 1. Input a String S, and check its length and if the length is greater than 4,
// truncate the input String and output the result -
// Input: Ice Output: Ice
// Input:Icecream Output:Icec...

let str = "icecream"

let length = str.length

if (length<=3){
    console.log(str)
}
else{
    let str1 = str.slice(0,4)
    console.log(str1+"...")
}

// 2. Input a String S with multiple words, and remove whitespaces and
// output the result -
// Input: “Hii Boy” Output: “HiiBoy”

let letter = "hii boy"
let letter2 = letter.replace(/ /g, "");
console.log(letter2)


// 3. Input a String S with two words, and replace first word with second word
// and display the result -
// Input: “Hii Boy” Output: “Boy Hii”

let str1 = "hii boy"
let str2 = str1.split(" ").reverse().join(" ")
console.log(str2)

// 4. Input a String S with a word, and replace character “a” with “x” and
// display the result -
// Input: “apple” Output: “xpple”

let fruit = "apple"
let fruit2 = fruit.replace("a","x")
console.log(fruit2)



//5. What string method can be used to convert string into array ?

console.log(fruit.split(""))

//6. What string method can be used to check the occurrence of a specified text in a string?

var result = fruit.includes("p");
console.log(result)

//7. How can you break a string to a newline in Javascript ?

const multiline = `
    I am Shahnewaz 
    I am Web Developer
    I am a Programmer
    I am a Engineer
`;
console.log(multiline)

//8. Write a Javascript function to test whether the first character of a string is lowercase.
var character = "aPple"
character = character.slice(0,1)


if (character == character.toLowerCase())
{
  console.log("The character is lowercase")
}
else
{
  console.log("The character is uppercase")
}


//9. Give a correct verdict to users input if he enters "yes", "YES","Yes" ,etc (any combination) using string methods.

var char = "YeS"

var convert = char.toLowerCase()
console.log(convert)

if (convert === "yes"){
    return 1
}
else return 0

