let arr = [1,2,3,4,5];

console.log(arr.map((x) => { return x +2}));

// filter - display only even nos 

console.log(arr.filter((x) =>{ return x %2 == 0}));

// reduce to sum of an array 

console.log(arr.reduce((acc,curr) =>{
    acc = acc +curr;
    return acc;
},0));

// multiplies array 

let jsarr = [1,2,3,4,5];
console.log(jsarr.map((x) =>{
    return x * 2;
}));

// value > 4 

console.log(jsarr.filter((x)=>{
    return x > 4;
}));
