/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function numberOfFridaythe13thsIn() {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August","September", "october", "Novermber", "December" ]
    
    document.getElementById("run").addEventListener("click", () => {   
    let d = new Date();
    let inputYear = document.getElementById("year").value; 
    
    let result = [];

    for (let month = 0; month < 12; month++){
        let d = new Date(inputYear, month, 13); // pour chaque mois de l'annee on est en train de faire une nouvelle date avec seulment le mois qui a le 13  

        if (d.getDay() == 5){
            let elem = monthNames[d.getMonth()] + "" + d.getFullYear() + " has a Friday 13th ";
            result.push(elem);
        }
    }    
    alert(result);

    // your code here
});
})();