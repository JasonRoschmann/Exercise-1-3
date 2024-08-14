   // Überwacht das Scrollen der Seite
   window.onscroll = function() {
    let navbar = document.getElementById("navbar");
    if (window.pageYOffset > 0) {
        navbar.classList.add("fixed");
    } else {
        navbar.classList.remove("fixed");
    }
};