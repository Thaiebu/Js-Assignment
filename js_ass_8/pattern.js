
// 1. Using for loops, write a Javascript program to output the following
// pattern -
// 1
// 2 3
// 4 5 6
// 7 8 9 10



let n = 5; 
let string = "";

for(let i = 1; i <= n; i++) {
  for(let j = 1; j <=i ; j++) {
    string += j;
  }
  string += "\n";
}
console.log(string)