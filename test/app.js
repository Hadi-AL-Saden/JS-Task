

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