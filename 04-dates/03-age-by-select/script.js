/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {
	    let whichDay = document.getElementById("dob-day").value;
	    let whichMonth = document.getElementById("dob-month").value;
	    let whichYear = document.getElementById("dob-year").value;

	    let today = new Date();
	    let birthDate = new Date(whichYear, whichMonth-1, whichDay);
	    let age = 0;

	    let currentYear = today.getFullYear();
	    let userYear = birthDate.getFullYear();
	    let diffMonths = today.getMonth() - birthDate.getMonth();

	    // if (currentYear > userYear) {
	    	age = currentYear - userYear;

	    	if (diffMonths < 0 || (diffMonths === 0 && today.getDate() < birthDate.getDate())) {
		        age--;
		    }
	    // }

    	alert("You are " + age + " years old.");
    });

})();
