/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let arrText = [];
    let txt = document.getElementById("target");

    for (let i = 0; i < txt.textContent.length; i++) {

        arrText.push(txt.textContent.charAt(i));
        
    }
    txt.innerHTML = "";

    for(let j=0; j< arrText.length; j++) {

        setTimeout(() => {

            document.getElementById("target").innerHTML += arrText[j];

        },30*j);

    }
})();