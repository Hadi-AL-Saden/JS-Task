"use strict"

// let user={
//     theName:"Hadi",
//     theLastName:"AL-Saden",
//     theAge:22,
//     dob:"14/2/2001",
//     "Favorite Food":["minsaf","maqloba","malukhia"],
//     "favorite movie":["300","The100","Avengers End game","spider man no way home","fast and furious"],

// }
// console.log(user.theName);
// console.log(user.theLastName);
// console.log(user.theAge);
// console.log(user.dob);
// console.log(user["Favorite Food"].join(" | "));

// console.log(user["favorite movie"].join(" | "));
//****************************************************************************************************** */

 let    persons=[
    { name: { first: 'John', last: 'Hob' }, age: 35 },
    { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
    { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
    { name: { first: 'Zues', last: 'Odin' }, age: 55 },
    { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
   

  ];
  console.log(typeof persons);
//Task-2
function firstName(array){
  let firstnameArray=[]; 
  for(let i=0; i<array.lenght ;i++  ){
    firstNameArray[i]=array[i].name.first;  
  }
  return firstnameArray;
}
console.log(firstName(persons));

//Task-2





  function firstName(H){
    let x=[];
    for(let i=0; i< x.length; ++i){
         x[i]=H[i].name.first;
    }
    return x;
}
console.log(firstName(persons));


   