

let user={
    thaName:"Hadi",
    thaAge:22,
    "cuontryOf":"jodran",
    skills:["HTML","CSS","JS"],
    available:true,

    adress:{
         "Middle East":"jordan1",

         jordan:{
             ad1:"aqaba",
             ad2:"wady araba",
             ad3:"wady mosa",
         },
        
    },

    chekAV:function(){
        if(user.available==true){
            return"free for work";

        }
        else{
            return"not free for work";
        }

    },

    


}
console.log(user["cuontryof"]);
console.log(user.thaName );
console.log(user.thaAge );
console.log(user.skills[2]);
console.log(user.chekAV());
console.log(user.adress.jordan.ad1);



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


