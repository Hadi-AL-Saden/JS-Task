//Task-1
// function tellFortune(JobTitle,location,married,Numberofkids){
//     console.log("You will be a",(JobTitle),"in",(location),"and you will married to",(married),"and you will git a",(Numberofkids),"kids" );


// }
// tellFortune("FullStakDiv","jordan","Hadi",0);

// ******************************************************************************************



//Task-2
// function calculateDogAge(x){
//    console.log("Your doggie is ",(x*7),"years old in dog years!");

// }
// calculateDogAge(2);



// ******************************************************************************************



//Task-3
// function calculateSupply(age,AmountPerDay){

//         if(age>100){
//         console.log("Sorry but you are already dead");

//     }
//     else{


//         console.log("You will need to",(36500-age*365)*(AmountPerDay),"cups of tealast you until the ripe old age of 100");
//     }
// }
// calculateSupply(20,5);




// ******************************************************************************************
//Task-4

// function GreetThat(name){

// return name;

// }
// let dd=   GreetThat("ahmed");
// console.log("hello"+ dd)




// ******************************************************************************************


//Task-5
// function cube(x){
//     console.log(x*x*x);
// }
// cube(4);




// ******************************************************************************************
//Task-6

// function multiply(x,y){
//     console.log(x*y);

// }
// multiply(3,4);

// ******************************************************************************************



//Task-7
// function canIGetADrivingLicense(x){
//     if( x>=20){
//         console.log("yes you can");

//     }
//     else{
//         console.log("please come back after",(20-x),"years to get one");
//     }

// }
// canIGetADrivingLicense(20);




// ******************************************************************************************


//Task-8
// function sameLength(x,y){
// if(x.length==y.length){
//     console.log(true);

// }
// else{
//     console.log(false);
// }
// }
// sameLength("Hadi","Fadi");


// ******************************************************************************************
//Task-9
// function largerNubmer(x,y){
//     if(x>y){

//         console.log(x);

//     }
//     else{
//         console.log(y);
//     }


// }
// largerNubmer(3,10)

// ******************************************************************************************

//Task-10
// function smallerNubmer(x,y,z){

//         if(x<y && x<z ){
//             console.log(x);           
//         }
//         if(y<x && y<z){
//                 console.log(y);              
//             }     
//       if(z<x && z<y){
//                     console.log(z);
//                 }

//     }
//     smallerNubmer(40,70,5);


//*********************************************************************************************** */
//Task-11
// function shorterString(a,b,c,d,e){
//     if(a.length<b.length&& a.length<c.length&&a.length<d.length&&a.length<e.length){
//         console.log(a);

//     }
//     if(b.length<a.length&& b.length<c.length&&b.length<d.length&&b.length<e.length){
//         console.log(b);

//     }
//     if(c.length<b.length && c.length<a.length&&c.length<d.length&&c.length<a.length){
//         console.log(c);

//     }
//     if(d.length<b.length&& d.length<c.length&&d.length<a.length&&d.length<e.length){
//         console.log(d);

//     }
//     if(e.length<b.length&&e.length<c.length&&e.length<d.length&&e.length<a.length){
//         console.log(e);

//     }

// }
// shorterString("sha","si","yaa","s","fadi")

//*********************************************************************************************** */



// //Task-12
// function longerString(a,b,c,d,e){
//     if(a.length>b.length&& a.length>c.length&&a.length>d.length&&a.length>e.length){
//         console.log(a);

//     }
//     if(b.length>a.length&& b.length>c.length&&b.length>d.length&&b.length>e.length){
//         console.log(b);

//     }
//     if(c.length>b.length && c.length>a.length&&c.length>d.length&&c.length>a.length){
//         console.log(c);

//     }
//     if(d.length>b.length&& d.length>c.length&&d.length>a.length&&d.length>e.length){
//         console.log(d);

//     }
//     if(e.length>b.length&&e.length>c.length&&e.length>d.length&&e.length>a.length){
//         console.log(e);

//     }

// }
// longerString("sha","si","ysda","s","fadi");



//*********************************************************************************************** */

//Task-13
// function Even(x){
//     if(x%2==0){
//     console.log("true");        

//     }
//     else{
//         console.log("false");
//     }
// };
// Even(6);




//*********************************************************************************************** */


//Task-14

//  function Odd(x){
//         if(x%2==0){
//         console.log("false");        

//         }
//         else{
//             console.log("true");
//         }
//     };
//     Odd(7);


//*********************************************************************************************** */

//Task-15
// function positive(x){
//     if(x<0){
//         console.log(-1*x);


//     }
//     else{
//         console.log(x);
//     }

// }
// positive(-105);




// ******************************************************************************************
//Task-16
// function fullName(firstName,lastName){
// return firstName+" "+lastName;
// }
// let dd= fullName("hadi","hadi");
// console.log(dd);

// ******************************************************************************************
//Task-17
// function average(x,y,z,f,d){
// console.log((x+z+y+f+d)/5);
// }
// average(5,7,9,3,5);



// ******************************************************************************************


//Task-18
// function randomNumber(){
//     console.log(Math.random());

// }
// randomNumber()



// ******************************************************************************************


// //Task-19
// function randomBetweenNumbers(x,y){


//         console.log(x+ Math.random()+Math.random(y));

// }
// randomBetweenNumbers(5,6);




// ******************************************************************************************



//Task-20 
// function scoreInUniversty(x) {


//     if (x >= 95 && x <= 100) {
//         console.log("A");
//     };
//     if (x >= 85 && x <= 94) {
//         console.log("B");
//     };

//     if (x >= 70 && x <= 84) {
//         console.log("C");
//     };
//     if (x >= 50 && x <= 69) {
//         console.log("D");
//     };
//     if (x >= 0 && x <= 49) {
//         console.log("F");}

//     }
//         scoreInUniversty(49);



// ******************************************************************************************


//Task-21

// function counter(x){
//     for( let x=0;x<=100 ;x++)   {
//         console.log(x);
//     }

    
// };
// counter()