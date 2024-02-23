const user = { name: 'John', email: 'john@example.com', password: '123abc' };
console.log(user.name, user.email, user.password);

console.log(user['password']);

// key update
user.password = 'xyz789';
console.log(user);
console.log(user.password);

// add 
user.address = 'lucknow';
console.log(user);

// delete 
delete user.address;
console.log(user);

// print all keys in form of array 
console.log(Object.keys(user));
console.log(Object.values(user));


const smartphone = {
    brand: 'Samsung',
    model: 'Galaxy',
    price: 1587,
    color: ['black', 'white', 'red']
}
console.log(smartphone);
console.log(smartphone.color);
console.log(smartphone.color[1]);
console.log(smartphone.color.length);
console.log(smartphone.color[1].length);

// changing color red into blue 
smartphone.color[2] = 'blue';
console.log(smartphone.color);

// 2method 
smartphone.color.splice(-1, 1, 'gray')
console.log(smartphone.color);

// 3method 

smartphone.color.push('yellow');
console.log(smartphone.color);

// nested objects 

const myphone = {
    brand: 'Oneplus',
    model: '12',
    variant: {
        '8gb': '12000',
        '12gb': '13000'
    }
}

console.log(myphone.variant);
console.log(myphone.variant['12gb']);

// array into onbjects 

const phonelist = [
    { brand: 'Oneplus', model: 'galaxy ', price: '12000' },
    { brand: 'Apple', model: '12pro ', price: '14000' },
    { brand: 'vivo', model: '18pro ', price: '16000' },
    { brand: 'samsung', model: '19pro ', price: '18000' }
]

console.log(phonelist[1].price);

console.log(phonelist[3].model);
phonelist[3].model = '20pro';
phonelist[phonelist.length - 1].model = '20pro';   // if index is unknown
console.log(phonelist[3].model);

//find sum of all prices
// get models of all smartphone in an array
// [ '20pro', '18pro', '20pro]
