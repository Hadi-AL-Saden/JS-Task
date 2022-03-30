let btn =document.getElementById("task5Submit");
 
   function checkPassword() {
       let p1 = document.getElementById("password1");
       let p2 = document.getElementById("password2");
       let msg1 = document.getElementById("pass1_check");
       let msg2 = document.getElementById("pass2_check");

       if(p1.value.length >= 6){
           msg1.innerHTML = "Correct Password length";
       }
       else{
           msg1.innerHTML="Password must be at least 6 characters long";
       }

       if (p1.value == p2.value) {
           msg2.innerHTML= "The two passwords match";
           btn.style.visibility="visible";
       }
       else if(p1.value != p2.value && p1.value.length <6){
           msg2.innerHTML="The two passwords must match";
       }

}