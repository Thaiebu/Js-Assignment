// 4. Write a program to find the factorial of all prime numbers between a
// given range . Range will be passed as 2 values in the function
// parameters. eg- if it is needed to find the values for numbers 1-100, then
// function declaration can look like - function prime(1,100).

function fact(n){
    sum = 1

    for(let i=1;i<=n;i++){
        sum = sum *i
    }
    console.log(sum)

}

function findPrime(to) {
	let factor;
 	for (let n = 0; n < to; n++) {
    	factor = 0
    	for (let p = 0; p < to; p++)
        	if (n % p == 0) factor++;
      	if (factor == 2) fact(n);
  	}
}

findPrime(30)


