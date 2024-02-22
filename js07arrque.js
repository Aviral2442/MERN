// WAP to get sum of all  elements in array 

const nums = [34, 28, 100, 29, 35, 77, 38];

// method1
let sum = 0;
for (i of nums) {
    sum = sum + i;
}
console.log(sum);

// method2
let sum2 = 0;
nums.forEach((a) => { sum2 = sum2 + a; });
console.log(sum2);


// get some of all elements on even indexes

const nums1 = [34, 28, 100, 29, 35, 77, 38];

// method1
let sum1 = 0;
for (i of nums1) {
    if (i % 2 === 0) {
        sum1 = sum1 + i;
    }
}
console.log(sum1);

// method2
let sum3 = 0;
nums1.forEach((a, i) => {
    if (a % 2 === 0) {
        sum3 = sum3 + a;
        console.log(a, i);
    }
});
console.log(sum3);





// square of all number

for (let i of nums1) {
    console.log(i ** 2);
}

console.log("----------------------------");

// cube of all number

for (let i of nums1) {
    console.log(i ** 3);
}

console.log("----------------------------");
console.log("----------------------------");

// get some of all elements on even elements

const numss = [34, 28, 100, 29, 35, 77, 38];

let sums = 0;
for (let i of numss) {
    // console.log(i);
    if (i % 2 === 0) {
        sums += i;
    }
    
}

console.log("----------------------------");


numss.forEach((a) => { if (a % 2 === 0) { sums += a; } });
console.log(sums);


