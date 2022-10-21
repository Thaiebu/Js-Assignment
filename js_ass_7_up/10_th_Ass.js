// 10. Given a String S, achieve following tasks
// a) Convert the String into upper case.
var char = "mohamed"
var upper = char.toLocaleUpperCase()
console.log(upper)

// b) Convert only the first character to uppercase.
var spl=char.charAt(0).toUpperCase()
console.log(spl+char.slice(1))
// c) Convert the String into lower case.
console.log(upper.toLocaleLowerCase())
// d) Break the string into two halves and swap them.
var str1 = "hi hello"
var spl1 = str1.split(" ").reverse().join(" ")
console.log(spl1)

// e) Count the repeating characters.
const repeatedCharacter = (str) => {
    let count = 1;
    for (let i = 0; i < str.length - 1; i++) {
      for (let j = i + 1; j < str.length; j++) {
        if (str[i] === str[j]) {
          count = count+1
          
        }
      }
      return count
    }
    return -1
  };

console.log(repeatedCharacter("mohammed"))

// f) Reverse the string

console.log(str1.split(" ").reverse().join(" "))

