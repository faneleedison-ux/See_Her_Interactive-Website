window.onload = function() {
    // your JavaScript code here

    wordpile = document.querySelector(".wordpile");
    nav = document.querySelector("nav");
    wordpile.onclick = function() {
        nav.classList.toggle("active");
    }
  };
  