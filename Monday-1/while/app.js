"use strict";
// *********************************************************************************************************
//Task1
console.log("'Task-1'");
function subtract(n){
    let x= n;
    let i= 1;
    while(i!=n+1){
        x=x-(n-i);
        i++;
    }
    return x;
}

console.log(subtract(2));
console.log(subtract(5));
console.log(subtract(9));
document.write(`<h1>Task-1</h1>${subtract(2)}<br> ${subtract(5)}<br> ${subtract(9)}<hr>`);

// *********************************************************************************************************

//Task-2
console.log("'Task-2'");
function factorial(n){
   let i=1;
    let x =n;
    while(i<n){
        x= x* (n-i);
        i++; 
    }
    return x;
}

console.log(factorial(2));
console.log(factorial(4));
document.write(`<h1>Task-2</h1>${factorial(2)}<br> ${factorial(4)}<hr>`);
// // *********************************************************************************************************
//Task-3
console.log("'Task-3'");
function repeatStr(string,num){
    let dd= string;
    let i= 1;
    while(num-i !== 0){
    dd+= ' '+string;
    i++;
    }
    return dd;
}

console.log(repeatStr("to",2));
console.log(repeatStr("to",4));
document.write(`<h1>Task-3</h1>${repeatStr("to",2)}<br> ${repeatStr("to",4)}<hr>`);
// // *********************************************************************************************************
// //Task-4
console.log("'Task-4'");
function sum2(num1,num2){
    let sum= num1;
    let i= num1+1;
    while(i != num2+1){
        sum+= i;
        i++;
    }
    return sum;
}

console.log(sum2(4, 5));
console.log(sum2(3, 6));
document.write(`<h1>Task-4</h1>${sum2(4, 5)}<br> ${sum2(3, 6)}<hr>`);

// // *********************************************************************************************************
//Task-5
console.log("'Task-5'");
function repeatStr2(str1, str2){
    let con= str1;
    let i= 1;
    let num= str2.length;
    while(num-i !== 0){
    con+= ' '+str1;
    i++;
    }
    return con;
}

console.log(repeatStr2("hadi","cc"));
console.log(repeatStr2("hadi","fff"));
document.write(`<h1>Task-5</h1>${repeatStr2("hadi","cc")}<br> ${repeatStr2("hadi","fff")}<hr>`);
// // *********************************************************************************************************
// //Task-6
console.log("'Task-6'");
function multiOf(n1,n2,n3){
    return n1*(Math.pow(n2, n3));
}

console.log(multiOf(4,10,3));
console.log(multiOf(6,3,2));
console.log(multiOf(6,2,3));
document.write(`<h1>Task-6</h1>${multiOf(4,10,3)}<br>${multiOf(6,3,2)}<br> ${multiOf(6,2,3)}  <hr>`);
// // *********************************************************************************************************
// //Task-7
console.log("'Task-7'");
function muti2(x,y){
    let mult= x;
    let i= x+1;
    while(i != y+1){
        mult*= i;
        i++;
    }
    return mult;
}

console.log(muti2(4, 5));
console.log(muti2(3, 6));
document.write(`<h1>Task-7</h1>${muti2(4, 5)}<br>${muti2(3, 6)}<hr>`);
// // *********************************************************************************************************

//Task-8
console.log("'Task-8'");
function numberBetweenUs(a,b) {
    let i=0;
    for(i=a+1; i<b; ++i){
       
     console.log(i);
    }
                           
}
console.log(numberBetweenUs(2,8));
// console.log(numberBetweenUs(1,3));
document.write(`<h1>Task-8</h1>${numberBetweenUs(2,8)}<hr>`);

//Task-9
function contDown(n){
    let arr=[]    
    while (n>0){
        arr.push(n)
        n--
    }
    if(n==0){
        arr.push("done")
    }
    return `${arr.join(", ")}`
}
console.log(contDown(10));

// // *********************************************************************************************************

let l1= document.getElementById('ex10');
l1.innerHTML="EX : 10";

function multiplication2(num1,num2){
    return num1*num2;
}
console.log(multiplication2(5,4));
document.getElementById('sol10').innerHTML=multiplication2(5,4);

// // *********************************************************************************************************

let l11= document.getElementById('ex11');
l11.innerHTML="EX : 11";

function mod2(num1,num2){
    return num1%num2;
}

console.log(mod2(2,8));
document.getElementById('sol11').innerHTML=mod2(5,4);
// // *********************************************************************************************************

let l12= document.getElementById('ex12');
l12.innerHTML="EX : 12";

function repeatChar(str,char){
    let count=0;
    let i=0;
    while(i<str.length){
        if(char.toLowerCase()==str.charAt(i)){
            count++;
        }
        i++;
    }
    return count;}
console.log(repeatChar("schoool","O"));
document.getElementById('sol12').innerHTML=repeatChar("schoool","O");
