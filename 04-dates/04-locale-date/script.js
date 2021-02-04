/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    const now = new Date;
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', time: 'numeric' };
    let str = (now.toLocaleDateString('en-EN', options));
    let res = str.replace("Change me !", str);
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    console.log(now);
    // your code here
    document.getElementById("target").innerHTML = res;
})();
