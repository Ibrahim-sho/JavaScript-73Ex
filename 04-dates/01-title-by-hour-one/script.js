/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
        
        let d = new Date();
        let n = d.getHours();
        let str = document.getElementById("target").innerHTML;
        if (n < 18) {

            let res = str.replace("Change me !", "Hello");
            document.getElementById("target").innerHTML = res;
        }
        else{

            let res = str.replace("Change me !", "Good evening!");
            document.getElementById("target").innerHTML = res;
        }
    
})();