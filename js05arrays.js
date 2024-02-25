const arr1 = [745 , 347783.3, 'hello', true, null];
console.log(arr1);

const fruits = ['apple', 'mango', "orange", 'banana', 'kiwi'];
// indexing   //also works with string
console.log(fruits[3]); // element positive
console.log(fruits.at(-2)); // element negative
console.log(fruits[1],fruits[4]);
console.log(fruits.indexOf('banana'));  //index
console.log(fruits.length); // lenght

// slicing , also works with string
console.log( fruits.slice(1,3));   //also works with string
console.log( fruits.slice(1,6));   //also works with string
console.log( fruits.slice(1));   //also works with string

price = "₹87579.87979"
console.log(price.slice(1));

// adding elements
fruits.push('keela'); //adds at the ends
console.log(fruits);
fruits.unshift('papaya') // adding element at first place
console.log(fruits);

// removing elements
fruits.pop(); // removes at the ends 
console.log(fruits);
fruits.shift(); // removes from first
console.log(fruits);