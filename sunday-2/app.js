"use strict";

let formOrder = document.getElementById("mobForm");
let tabel = document.getElementById("order");



function mopStore(useName,typeNameD,price) {
    this.useName =useName ;
    this.typeNameD = typeNameD;
    this.price=mobprice(50,500);

    if(price<100){
        let x="uesd"
        console.log("uesd");

    }
    else{
        x="new"
        console.log("new");
    }
  }
  function mobprice(min,max){
      
      return Math.floor(Math.random()*(max-min)+min);
      
  }
formOrder .addEventListener("submit",handleSubmit);
function handleSubmit(event){

    event.preventDefult();
    let useName=event.target.useName.value;
    console.log(useName);
    let typeNameD=event.target.useName.value;
    console.log(typeNameD);


}

  