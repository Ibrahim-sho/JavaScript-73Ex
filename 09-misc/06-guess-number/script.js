/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let counter = 0;
    let number = Math.floor(Math.random()*100)+1;
    console.log(number);
    
    let user = null;
    
    while(user != number){
        counter += 1;
        user = prompt("I have a number between 1 and 100, can you guess it?")
        if (user < number) {
            alert("higher");

        }else if (user > number) {
            alert("lower")
        
        }
        else{
            alert("You got it! Congrats for nothing.")
            alert("You've tried " + counter +" times.");
        }   
}

})();
