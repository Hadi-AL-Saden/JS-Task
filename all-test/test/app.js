

// let user={
//     thaName:"Hadi",
//     thaAge:22,
//     skills:["HTML","CSS","JS"],
//     available:true,

//     adress:{
//          "Middle East":"jordan1",

//          jordan:{
//              ad1:"aqaba",
//              ad2:"wady araba",
//              ad3:"wady mosa",
//          },
        
//     },

//     chekAV:function(){
//         if(user.available==true){
//             return"free for work";

//         }
//         else{
//             return"not free for work";
//         }

//     },

    


// }
// console.log(user.adress["Middle East"]);
// console.log(user.thaName );
// console.log(user.thaAge );
// console.log(user.skills.join(" | "));
// console.log(user.skills[2]);
// console.log(user.chekAV());
// console.log(user.adress.jordan.ad1);


//**************************************************************************************** */


// let user={
//     theName:"Hadi",

//     theAge:22,

//     skills:["HTML","CSS","JS"],

//     available:false,
//     adress:{

//         "middle East":"Jordan",

//         Jordan:{
//             ad1:"aqaba",
//             ad2:"wadi araba",
//             ad3:"wadi mosaa",

//         },

      
//     },
// checkAV:function(){
//     if(user.available==true){
// return "free for work";
//     }
//     else{
//         return"not free";
//     }

// }    
// }
// console.log(user.checkAV());
// console.log(user.theName);
// console.log(user.theAge);
// console.log(user.skills);
// console.log(user.skills.join("|"));
// console.log(user.skills.length);
// console.log(user.skills[2]);
// console.log(user.adress["middle East"]);

// console.log(user.adress.Jordan.ad2);




// let user={
//     theName:"anas",
//     theAge: 26,
//     skills:["HTML","CSS","JS","Github"],
//     available:false,
//     adress:{
//         "middel Esat":"Jordan"

//     }
// }


/**************************************************************************************** */

// let user={
//     fisrtName:"anas",
//     Age:27,
//     available:false,
//     skills:["HTML","JS","CSS"],
//     adress:{
//         "middelEast":"Jordan",
//         jordan:{
//             ad1:"Aqaba",
//             ad2:"amman",
//             ad3:"irbd",
//         }
        
//     }

    
// }

// console.log(user.fisrtName);
// console.log(user.Age);
// console.log(user.skills[1]);
// console.log(user.skills);
// console.log(user.skills.join(" | "));
// console.log(user.adress["middelEast"]);
// console.log(user.adress.jordan.ad3);



// document.createElement=("<h1> asda</h1>");
// console.log("<h1>");

// let x= document.createElement["div"];

// document.write("<h1>hadi</h1>");

// document.write(x);


















// function fun() {  
//     var btn = document.createElement("button");  
//     btn.innerHTML = "Click me";  
//     document.body.appendChild(btn);  
// }

// let hadi=document.createElement("div");

// document.body.appendChild(hadi);


// ***************************************************************************

// let v=document.getElementsByTagName("li");    //ByTagName
// console.log(v.length);
// // *****************************************************************************************
// let x=document.createElement("div");          //creat
// document.body.appendChild(x).innerHTML="bbbb";
// // ***************************************************************************



// // ***************************************************************************// ***************************************************************************
// let h=document.getElementsByTagName("li");
// console.log(h.length);


// ***************************************************************************

// let x=document.getElementsByTagName("li");      //ByTagName
// console.log(x.length);

// ***************************************************************************
// let y=document.createElement("div");            //creat
// document.body.appendChild(y).innerHTML="new div "; 
// ***************************************************************************


// let x=document.getElementsByTagName("li");
// console.log(x);

// // ***************************************************************************
// let y=document.createElement("div"); 
// document.body.appendChild(y).innerHTML="new div"


// // ***************************************************************************************************************
//class






// *************************************************************************************************************
// theName ="Hadi";
// theAge = 22;
// theAdress = "jordana";
// tall = true;
// price=500;
// descaont=20;

// if(theName==="Hadi"&&theAge===22 ){
//     if( theAdress==="jordan"){
//         price -=descaont;
        
//         document.write(price);
//         document.write(true);
        
//     }else if(theAdress!="jordan"){
//  document.write(price+100)
//     }
  

// }



// let st="hadi"

// if("34"==="34"){
// console.log("GOOD");
// }
// if(){

// }

// i=1
// for(i=1,text="Hadi";i<=100;i++){
//     document.write(i+text+"<br>")

// }


// let x=0
// while (x<=10) {
//     document.write(x+"<br>");
//     x++;
// }






// **************************************************************************************
//                                    $(localStorage)$


// Set

// window.localStorage.setItem("color","red"); // norml way


// window.localStorage.fontSize = "30px";  // withOut setItem

// window.localStorage["fontWeigth"]= "bold";//      []



// // Get

// console.log(window.localStorage.getItem ("color"));
// console.log(window.localStorage.color);
// console.log(window.localStorage ["color"]);
// backgrondColor
// *******************************************************************************************


// let arry=[1,2,3,];
// let narry=arry.map(function (e,i,){
//      return e+i ;
    
// });

// console.log(narry);


// let frind=["dyar","roa'a","tamara","hadi"];
// let frind=new Map()
// frind["hadi"]="hadi"
// frind["dyar"]="dyar"
// frind["roa"]="roa"
// frind["tamara"]="tamara"
// console.log(frind);


// frind.has("hadi")
// frind.delete("tamara")
// console.log(frind);


let arry2=["a","b","c"];

let DD=arry2.map(function(v){
    console.log(v+"a");
    document.write(v+"a"+"<br>")
    return v
})

