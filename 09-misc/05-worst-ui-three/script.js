/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    let i = 460;
    let casino1 = setInterval(machine1, 100);
        
    function machine1(){
        document.getElementById("part-one").value = i;
        i++
        if (i > 499) {
            i = 460
        }
    }

    document.getElementById("fix-part-one").addEventListener("click", function(){
        clearInterval(casino1);
        document.getElementById("target").innerHTML = "0" + (i-1) + "000000";        
    })

    //_______________________________________________________________________________________
    
    let j = 0;
    let casino2 = setInterval(machine2, 100);
        
    function machine2(){
        document.getElementById("part-two").value = (j < 10 ? "0" : "")+j;
        j++
        if (j > 99) {
            j = 0
        }
    }

    document.getElementById("fix-part-two").addEventListener("click", function(){
        clearInterval(casino2);
        document.getElementById("target").innerHTML = "0" + (i-1) + (j < 10 ? "0" : "") + (j-1) + "0000";

    })

    //_______________________________________________________________________________________
    
    let k = 0;
    let casino3 = setInterval(machine3, 100);
        
    function machine3(){
        document.getElementById("part-three").value = (k < 10 ? "0" : "")+k;
        k++
        if (k > 99) {
            k = 0
        }
    }

    document.getElementById("fix-part-three").addEventListener("click", function(){
        clearInterval(casino3);
        document.getElementById("target").innerHTML = "0" + (i-1) + (j < 10 ? "0" : "") + (j-1) + (k < 10 ? "0" : "") + (k-1) + "00";
    })

   //_______________________________________________________________________________________

   let l = 0;
   let casino4 = setInterval(machine4, 100);
       
   function machine4(){
       document.getElementById("part-four").value = (l < 10 ? "0" : "")+l;
       l++
       if (l > 99) {
           l = 0
       }
   }

   document.getElementById("fix-part-four").addEventListener("click", function(){
       clearInterval(casino4);
       document.getElementById("target").innerHTML = "0" + (i-1) + (j < 10 ? "0" : "") + (j-1) + (k < 10 ? "0" : "") + (k-1) + (l < 10 ? "0" : "") + (l-1);
   })
})();
