/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition 
       let first = Number(document.getElementById("op-one").value);
       let second = Number(document.getElementById("op-two").value);
       let sum = first + second;
       alert(sum);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        let first = Number(document.getElementById("op-one").value);
       let second = Number(document.getElementById("op-two").value);
       let sub = first - second;
       alert(sub);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        let first = Number(document.getElementById("op-one").value);
       let second = Number(document.getElementById("op-two").value);
       let mul = first * second;
       alert(mul);
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
       let first = Number(document.getElementById("op-one").value);
       let second = Number(document.getElementById("op-two").value);
       let div = first / second;
       alert(div);
    });
})();
