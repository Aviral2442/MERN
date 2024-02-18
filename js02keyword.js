if (68 % 2 == 0) {
    console.log('even');
}
else { console.log('odd'); }

// cheching that particular code has global or local variables

if (68 % 2 == 0) {
    console.log('even');

    num1 = 6842
}
else { console.log('odd'); }

console.log(num1);


// var let const var scope checking

if (68 % 2 == 0) {
    console.log('even');

    var num2 = 6846;
    let num3 = 6848;
    const pi = 3.46;
}
else { console.log('odd'); }

console.log(num2);  // global 
// console.log(num3);  // local
// console.log(pi);  // local

