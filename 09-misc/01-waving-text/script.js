(function () {
  
  let span;
  let j = 0;
  let reverse = false;
  let arrayletters = [];
  let letters = document.getElementById("target");
  for (let i = 0; i < letters.textContent.length; i++) {
    arrayletters.push(letters.textContent.charAt(i));
  }
  console.log(letters);
  letters.textContent="";

  console.log(letters);


  arrayletters.forEach(element => {
      span = document.createElement("span");
      span.setAttribute("id", "span" + j);
      document.getElementById("target").insertBefore(span, null);
      document.getElementById("span" + j).innerHTML = element;
      j++;
  });
  console.log(letters);
  j = 9;
  for (let s = 0; s < arrayletters.length; s++) {
      document.getElementById("span" + s).setAttribute("style", "font-size:" +j + "px;");
      if ( j > 20) {
        reverse = true;
      }if (j < 9) {
        reverse = false;
        
      }if (!reverse) {
        j += 1;
      }else{
        j -= 1;
      }

    
  }

console.log(letters);

})();



