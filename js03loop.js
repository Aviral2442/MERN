for ( let i = 0; i <= 10 ; i++ ){
    console.log(i);
}

// print array elements 

let num = [ 24, 56, 83, 87, 54, 65 , 34];

for ( let i of num ){
    console.log(i);
}

console.log("----------------------------------------------------------------");

for (let n of num){
    if (n%2 != 0 ){
        console.log(n);
    }
}
