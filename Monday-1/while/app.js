//Task-1

// function subtract(x){
//     while(x>0){
//         console.log((x-1-x)*-1 );
      
        
//     }

// }
// subtract(9)

// function subtract(n){
//     console.log(n);
//     while(n>0){
// console.log(n-(n-1));
//     }

// }
// subtract(2)
//*************************************************************************************** */
// function subtract(n){
//     while(n>0){
//         let n_1=n-1;
//         n_1[0]=n_1;
//         if(n>0){


//          document.write(n-n_1);


//          }
//      }          
// }
// subtract(2)
//*************************************************************************************** */
//Task-1
function subtract(n){
    let x= n;
    i= 1;
    while(i!=n+1){
        x= x-(n-i);
        i++;
    }
    return x;
}

console.log(subtract(2));

//*************************************************************************************** */
///Task2

function factorial(n){
    i=1;
    let x =n;
    while(i<n){
        x= x* (n-i);
        i++;
    }
    return x;
}

console.log(factorial(2));

//*************************************************************************************** */
//Task3

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


//*************************************************************************************** */
///Task4

function sum2(num1,num2){
    let DD= num1;
    let i= num1+1;
    while(i != num2+1){
        DD+= i;
        i++;
    }
    return DD;
}

console.log(sum2(4, 5));
console.log(sum2(3, 6));



// function subtract(n){
//     while(n>0){
//         let n_1=n-1;
//         n_1[0]=n_1;
//         if(n>0){


//          document.write(n-n_1);
