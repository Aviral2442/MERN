function add(a, b) {
    c = a + b;
    console.log(c);
}

add(23, 1);


function add(a, b, c, d) {
    c = a + b + c + d;
    console.log(c);
}

add(23, 1, 2, 3);


const getAvg = function (m1, m2, m3) {
    const avg = (m1 + m2 + m3) / 3;
    // console.log(avg);
    return avg;

}
getAvg(34, 56, 78);
const result = getAvg(34, 56, 78);
console.log(result);

// by es5


const getFact = (n) => {
    let f = 1;
    for (let k = 1; k <= n; k++) {
        f = f * k;
    }
    // console.log(f);
    return f;
}
getFact(5)

const getFacs = getFact(10)/getFact(5);
console.log(getFacs);

