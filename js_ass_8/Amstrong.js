//The Armstrong number is a number that is equal to the sum of cubes of

let num = 1537

let onum = num
let sum = 0

while (num > 0){
    let n = num % 10
    sum +=n*n*n
    num = Math.floor(num/10)

}
console.log(onum)
console.log(sum)
if (onum==sum){
    console.log("Amstrong Number")
}
else{    
    console.log("Not Amstrong Number")
}