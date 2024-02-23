                                                            // Map


const nums = [ 1, 5, 2, 8, 6, 9 ];

// find square of all elements in abouve array  

const arr1 = nums.map ( (n) => { return n**2 } );
console.log(arr1);



// removing ₹ and decimal value from elements    of array


const prices = [ '₹6748.56', '₹6763.87', '₹323.89', '₹9234.87'];
console.log('₹6748.56'.slice(1));
console.log(parseInt('₹6748.56'.slice(1)));

const arr = prices.map ( (n) => { return parseInt(n.slice(1))});
console.log(arr);

const prices2  = [ 2300 , 34000 ,56000 , 87000, 78000];
const arr2 = prices2.filter ( (n) => { return n>23000 && n<78000 }); 
console.log(arr2);


//list out elements whose lenght is greater than or equal to 5

const names = [ 'raju', 'chaman', 'kaliya', 'chotu'];
const names_result = names.filter ( (n) => { return n.length >= 5});
console.log(names_result);


//
const nums2 = [ 32,6754,2345,876,123,872];
const num2_result = nums2.filter ( (n) => { return n%2 === 0    });
console.log(num2_result);


// get model from array whose price is above 14000

const phonelist = [
    { brand: 'Oneplus', model: 'galaxy ', price1: '12000' },
    { brand: 'samsung', model: '12pro ', price1: '14000' },
    { brand: 'vivo', model: '18pro ', price1: '16000' },
    { brand: 'samsung', model: '19pro ', price1: '18000' }
]

const findless = phonelist.filter( (n) => { return n.price1 > 14000 });
console.log(findless);

console.log(  phonelist.map( (n) => { return n.model}));

console.log(  phonelist.filter( (n) => { return n.brand  === ' samsung' }));
