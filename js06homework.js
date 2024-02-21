// WAP to check if a number is prime

function isPrime(num) {
    if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false; // If num is divisible by any number other than 1 and itself
        }
    }
    return true; // If no divisors were found, num is a prime number
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
  console.log(`The area of the triangle is: ${area}`);


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

