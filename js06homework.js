// // WAP to check if a number is prime

// function isPrime(num) {
//     if (num <= 1) return false; 
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             return false; 
//         }
//     }
//     return true; 
// }

// const userInput = 11;
// console.log(`Is ${userInput} a prime number? `, isPrime(userInput));


// // Create a function to find area of a triangle.
   
// function triangleArea(base, height) {
//     return 0.5 * base * height;
//   }
   
//   let baseLength = 10;
//   let heightLength = 5;
//   let area = triangleArea(baseLength, heightLength);
// //   console.log(`The area of the triangle is: ${area}`);
// console.log(area);


// // Create a function to reverse a number.

// function reverseFunction(num) {
// 	let numStr = num.toString();
// 	let reversedStr = '';
// 	for (let i = numStr.length - 1; i >= 0; i--) {
// 		reversedStr += numStr[i];
// 	}
// 	return parseInt(reversedStr);
// }

// let num = 987654321;
// let reversedNum = reverseFunction(num);

// console.log(reversedNum);



// prime number check

let n = 13;
let prime = true;

for (let i = 2; i < n / 2; i++) {
    if (n % i === 0) {
        console.log('not prime');
        prime = false;
        break;
    }
}

if (prime) {
    console.log('prime');
}

const checkPrime = (n) => {

    for (let i = 2; i < n / 2; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

for(let i=100; i<=600; i++){
    if( checkPrime(i) ){
        console.log(i);
    }
}

let [a, b] = [0, 1];
let c = a+b;
console.log(a);
console.log(b);
while(c <= 100){
    console.log(c);
    [a, b] = [b, c];
    c = a+b;
}

// reverse a number

let num = 456767;
let reverse = 0;

while(num > 0){
    // console.log(num);
    // console.log(reverse);
    let d = num % 10;
    reverse = reverse * 10 + d;
    num = parseInt(num/10);
}

console.log(reverse);
