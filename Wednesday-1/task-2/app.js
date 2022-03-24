"use strict";

let x=document.getElementById("dd");

x.style.width="200px";
x.style.height="200px";

        x.style. backgroundColor="blue";
        console.log(x);

       x.addEventListener("click",e =>{
    console.log("keep clickon me");
    x.style. backgroundColor="red";

    x.addEventListener("click",e =>{
    x.style. backgroundColor="green";
        



    });
});


     



