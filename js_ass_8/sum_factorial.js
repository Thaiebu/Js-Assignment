
// 3. Write a program to find whether a given number is special number or

// not-
// If the sum of the factorial of digits of a number (N) is equal to the

// number itself, the number (N) is called a special number.
// eg- 145 is a special number
// Logic- 1! + 4! + 5!= 1+24+120 i.e 145

function split_num(num){
    let nums = []
    while (num > 0){
        let n = num % 10
        nums.push(n)
        
        num = Math.floor(num/10)

    }
    return nums
}
function sum_fact(x){
    sum = 1
    for (let i=1;i<=x;i++){
        sum *= i
    }
    return sum
}

let num = 141
let val = split_num(num)
let sum = 0



for (let i=0;i<val.length;i++){
    sum += sum_fact(val[i])
 

}
console.log(sum)
if (sum == num){
    console.log("special number")
}
else{
    console.log("not special number")
}