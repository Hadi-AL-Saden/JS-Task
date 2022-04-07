let str = 'the car drove fast';


let arr = str.split(" ");

for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}

let str2 = arr.join(" ");
console.log(str2);
document.write(`<div><p><h1>navigator</h1></p> ${str2} </div><br>`);

//////////////////////////////////////////////

let Dd=[1,2,3,4,5];
for(let i =Dd.length-1; i>=0;i--){
    console.log(Dd[i]);
    document.write(  ` ${Dd[i]}`);
}

///////////////////////////////////////////////////////

let str1 = "BAB";
let str22= "door";
let str3 = "sas";


function ifpland(string) {

    for (let i = 0; i < string.length; i++) {

        if (string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log("str1: "+ifpland(str1));
console.log("str2: "+ifpland(str22));
console.log("str3: "+ifpland(str3));//trtytr



////////////////////////////////////////
'use strict';

function decending(array){
    for (let i = 0; i < array.length; i++) 
        for (let j = i + 1; j < array.length; j++) {  
            let x= 0; // to compare.
            if (array[i] < array[j]) {      //compare outer loop index with inner loop 
                x= array[i];               // if greater than swapping.
                array[i] = array[j];            // Swaping code here.
                array[j] = x;
            }
        }
        return array
    }
   

console.log(decending( [2,9,0,4]));
// document.write( decending)

document.write("<h1>go to console to see me when i was a driver")