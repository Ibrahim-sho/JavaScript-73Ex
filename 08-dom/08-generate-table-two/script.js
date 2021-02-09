/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let column;
    let row;
    let array = document.createElement("table");

    array.setAttribute("id","table");
    document.getElementById("target").insertBefore(array,null);
    for (let i=1; i<=10; i++){
        row= document.createElement("TR");
        row.setAttribute("id","tr-"+i);
        document.querySelector("#table").appendChild(row);
        for (let j = 1; j <= 10; j++) {
           column=document.createElement("TD");
           column.setAttribute("id", "td-" + i + "-" + j);
            column.innerHTML = i * j;
            document.querySelector("#tr-"+i).appendChild(column); 
            
        }
        

    };

})();
