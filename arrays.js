// create array
let cars = ['bmw','venue','tesla'];
console.log(cars);

// access array elements 
let accessCars = cars.indexOf('bmw');
console.log(accessCars);

// length of array 
let len =  cars.length;
console.log(len);

// Access last element 
let lastElm = cars[cars.length-1];
console.log(lastElm);

// Loop over array items 
cars.forEach((i,t,arr)=>{
    console.log(i,t);
});

// convert array to str 

let carStr = cars.toString();
console.log(carStr);

// remove elements from array 

let lastElm1 = cars.pop();
console.log(lastElm1);

// Push method 
let addLastEm = cars.push("hundai");
console.log(cars);

// shift method 
let fstElem = cars.shift();
console.log(cars);

// unshift 
let fstElemAdd = cars.unshift("audi");
console.log(cars);

// concat arrays 
let bikes = ['yamaha','tvs'];
let vechiles = cars.concat(bikes);
console.log(vechiles);

// sort array 

console.log(cars.sort());

// reverse array element 
console.log(cars.reverse());
