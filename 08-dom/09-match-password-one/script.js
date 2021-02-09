/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let passOne = document.getElementById("pass-one");
    let passTwo = document.getElementById("pass-two");

    document.getElementById("run").addEventListener("click", () =>{
        if (passOne.value === passTwo.value) {
            passOne.setAttribute("style", "");
            passTwo.setAttribute("style", "");
            
        }else{
            passOne.setAttribute("style", "border : solid red 1px");
            passTwo.setAttribute("style", "border : solid red 1px");
            
        }
    })

})();
