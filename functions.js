// simple fn 
function hello(){
    return "hello";
}
console.log(hello());

// fns with parameters 
function add (a,b){
    return a + b;
}
console.log(3,4);

// passing array as parameter 

let arr = [1,2,3];
function arrAdd (arr){
   arr.forEach((x)=>{
       console.log(x);
   })
}

console.log(arrAdd(arr));

// passing objects as argument s

let obj = {
    name : "tom",
    age : 3
}

function objAdd(obj){
    return obj.name;
}
console.log(objAdd(obj));

// IIFE
const fn = function(){
    return "IIFE";
}
console.log(fn());

// Arrow functions 
const arrowFn = () =>{
    return "hello arrow fns";
}
console.log(arrowFn());

// annonymous fn 
let show =  (function(){
     console.log("hi");
 })

 console.log(show());

 let obj1 = {
     name :"ragi",
     age : 12, 
     fn : (x) =>{
         console.log("obj fn");
     }
 }
 console.log(obj1.fn());

//  generator fn 

function * generator(i){
    yield i;
    yield i +2;
    yield i +10;
}
let gen = generator(10);

console.log(gen.next().value);

console.log(gen.next().value);
console.log(gen.next().value);


// predifend fns 
let name1 = "test";
console.log(parseInt(name1));

let name2 = 222;


