/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    (function() {
        let passOne = document.getElementById("pass-one");
        passOne.addEventListener("input", ()=>{
    
            
            if (passOne.value.length >= 8 && passOne.value.match("(?=(.*?\\d){2})[a-zA-Z0-9]").length>=2) {
                document.getElementById("validity").innerHTML = "Ok";

            }else{
                document.getElementById("validity").innerHTML = "Not Ok";
            }
        })
    
    })();
    

})();
