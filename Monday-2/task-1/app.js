"use strict";

// let arry2=["a","b","c"];

// let DD=arry2.map(function(v){
//     console.log(v+"a");
//     document.write(v+"a"+"<br>")
//     return v
// })




//Task-1
// let array=[2,5,100];
// let doubleNumbers=array.map(function(v){
   
//     return v*2
// })
// console.log(array);
// console.log(doubleNumbers);

// ****************************************************************************************


// let array2=[1,2,3,4,5];
// let stringItUp=array2.map( function(v) {
//     return  v.toString()
// })  


// console.log(stringItUp);

// ****************************************************************************************
//Task-2
// let array3=["john", "JACOB", "jinGleHeimer", "schmidt","hadi","tamara","dyar","roa'a"];

// let capitalizeNames=array3.map(function(a,index){
//     return a[0].toUpperCase()+a.slice(1);
// })
//   console.log(capitalizeNames);


//   ****************************************************************************************

 //Task-4


//  let namesOnly=([
//     {
//       name: "Angelina Jolie",
//       age: 80,},

//     {
//       name: "Eric Jones",
//       age: 2,},

//     {
//       name: "Paris Hilton",
//       age: 5,},

//     {
//       name: "Kayne West",
//       age: 16,},

//     {
//       name: "Bob Ziroll",
//       age: 100,},
//   ])


// function namesOnly(arr){ //====> solution1
//     return arr.map(i => i.name);
// }
// console.log(namesOnly);


//     let fName=namesOnly.map(function(v,index){ =====> solution 2
//         return v.name;
//     })
// console.log(fName);
// ****************************************************************************************
// Task-5
// function makeStrings(arr){
//     let str = arr.map(function(s) {  //====> solution1
//         if(s.age >= 17) {
//          return s.name + 'can go to The Matrix';
//         } else if(s.age) {
//           return s.name + 'is under age!';
//       } 
//    })
//    return str;

// }
// console.log(makeStrings(namesOnly));




// let agee=namesOnly.map(function(v){        //====> solution2
//     if(v.age>20){
//         return v.name +"can go to The Matrix";
//     }
//     else{
//        return v.name + " is under age!";
//     }
    
// });
// console.log(agee);


// ****************************************************************************************
//Task-6

// let Hh=namesOnly.map(function(v){
//     return     `<h1>${v.name}</h1> `+`<h2>${v.age}</h2>`;

// });
// console.log(Hh);

// ****************************************************************************************
//Task-7

// let doubleValues=[1,2,3,4,5,6,-1,-2,-3,-4];

// let Dd=doubleValues.map(function(v){
//  return v+v;
// });
// console.log(Dd);


// ****************************************************************************************
//Task-8
// let valTimesIndex=[1,-2,-3];

// let Vv=valTimesIndex.map(function(v,index){
  
// return  v*index
// // v.index[0]*0,v.index[1],v.index[2]*2;

// });
// console.log(Vv);


// ****************************************************************************************
//Task-9
// let extractKey=([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]);

// let Ee=extractKey.map(function(v){
// return v.name;
// })
// console.log(Ee);


// ****************************************************************************************
//Task-10
let extractFullName=([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]);

function extractkey(v,key){
console.log(kry);

}