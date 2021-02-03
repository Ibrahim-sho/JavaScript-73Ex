/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
    
    
(() => {
    // to get the value of an input: document.getElementById("element-id").value
    
    const performOperation = operation => {

        let first = Number(document.getElementById("op-one").value);
        let second = Number(document.getElementById("op-two").value);
    
    switch (operation) {
        case "addition":
            alert(first + second);
            break;
        case "substraction":
            alert(first - second);
            break;
        case "multiplication":
            alert(first * second);
            break;
        case "division":
            alert(first / second);
    }
    console.log(operation)
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
