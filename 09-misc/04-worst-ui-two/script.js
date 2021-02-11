/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// (function() {

//     let result = "0" + Number.parseInt(document.getElementById("target").textContent);
//     console.log(result);
//     let partOne = document.getElementById("part-one").textContent;
//     let partTwo = document.getElementById("part-two").textContent;
//     let partThree = document.getElementById("part-three").textContent;
//     let partFour = document.getElementById("part-four").textContent;

//     console.log("0"+partOne+partTwo+partThree+partFour);

//     let buttons = document.querySelectorAll("button");

//     buttons.forEach(buttonElem => {
//         buttonElem.addEventListener("click", function() {
            
//         });
//     });

// })();

(function() {

	function nextNumber(buttonElem) {
        let id = buttonElem.getAttribute("id");
        let oldValue = parseInt(buttonElem.innerHTML);
        let part1 = document.getElementById("part-one");
        let part2 = document.getElementById("part-two");
        let part3 = document.getElementById("part-three");
        let part4 = document.getElementById("part-four");

        buttonElem.innerHTML = (buttonElem != part1 && oldValue < 9 ? "0" : "") + (++oldValue);
        document.getElementById("target").innerHTML = "0" + part1.innerHTML + part2.innerHTML + part3.innerHTML + part4.innerHTML;

    }

    let buttons = document.querySelectorAll("button");

    buttons.forEach(buttonElem => {
        buttonElem.addEventListener("click", function() {
            nextNumber(this);
        });
    });

})();

