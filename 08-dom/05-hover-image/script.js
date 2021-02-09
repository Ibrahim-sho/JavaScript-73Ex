/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let img = document.querySelector("img");
    let src = img.getAttribute("src");
    img.addEventListener("mouseenter", ()=> {
        img.setAttribute("src", img.dataset.hover);

    })
    img.addEventListener("mouseleave", () =>{
        img.setAttribute("src", src);
    })

})();
