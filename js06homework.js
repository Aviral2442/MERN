// WAP to check if a number is prime

function isPrime(num) {
    if (num <= 1) return false; 
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false; 
        }
    }
    return true; 
}

const userInput = 11;
console.log(`Is ${userInput} a prime number? `, isPrime(userInput));


// Create a function to find area of a triangle.
   
function triangleArea(base, height) {
    return 0.5 * base * height;
  }
   
  let baseLength = 10;
  let heightLength = 5;
  let area = triangleArea(baseLength, heightLength);
//   console.log(`The area of the triangle is: ${area}`);
console.log(area);


// Create a function to reverse a number.

function reverseFunction(num) {
	let numStr = num.toString();
	let reversedStr = '';
	for (let i = numStr.length - 1; i >= 0; i--) {
		reversedStr += numStr[i];
	}
	return parseInt(reversedStr);
}

let num = 987654321;
let reversedNum = reverseFunction(num);

console.log(reversedNum);

