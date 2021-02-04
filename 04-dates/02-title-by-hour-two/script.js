/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    let d = new Date();
    let n = d.getHours();
    let m = d.getMinutes();
    let str = document.getElementById("target").innerHTML;
    if (n && m < "17:30") {

        let res = str.replace("Change me !", "Hello");
        document.getElementById("target").innerHTML = res;
    }
    else{

        let res = str.replace("Change me !", "Good evening!");
        document.getElementById("target").innerHTML = res;
    }

    // your code here

})();
