function scoreInUniversty(x) {


    if (x >= 95 && x <= 100) {
        console.log("A");
    };
    if (x >= 85 && x <= 94) {
        console.log("B");
    };

    if (x >= 70 && x <= 84) {
        console.log("C");
    };
    if (x >= 50 && x <= 69) {
        console.log("D");
    };
    if (x >= 0 && x <= 49) {
        console.log("F");}

  document.getElementById("result").innerText=[x] ;
 
 
    }

        scoreInUniversty(96);
      
    
        