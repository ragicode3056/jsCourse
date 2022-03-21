let arr = [1,2,3,4];
// for loops
for(let i =0;i<arr.length;i ++){
    console.log(arr[i]);
}

// while loop 
console.log("while loop");
let i =0;
while(i <arr.length){
    console.log(arr[i]);
    i ++;
}

//dowhile loop 
console.log("do while");
let j = 0;
do{
    console.log(arr[j]);
    j++;
}while(j<arr.length)

// for each 
console.log("for each");
console.log(arr.forEach((x)=>{
    console.log(x);
}

));

// for in 
console.log("for in");
for(x in arr ){
    console.log(x);
}

// break the loop 
// once reaches 5 break the code 

let jsarr = [1,2,3,4,5,6,7];
for( let i =0;i<jsarr.length;i ++){
    if(jsarr[i] == 5 ){
        break;
    }
    console.log(jsarr[i]);
}
// continue - skips the 5th value alone 
for( let i =0;i<jsarr.length;i ++){
    if(jsarr[i] == 5 ){
        continue;
    }
    console.log(jsarr[i]);
}