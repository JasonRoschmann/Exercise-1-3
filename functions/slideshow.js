let slideIndex = 0;
let slides = document.querySelectorAll(".slides");
const speed = 2000; // Feste Geschwindigkeit in Millisekunden (2 Sekunden)

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Verstecke alle Folien
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1; // Gehe zur ersten Folie zurück
    }
    slides[slideIndex - 1].style.display = "block"; // Zeige die aktuelle Folie
    setTimeout(showSlides, speed); // Setze das Intervall erneut
}

// Initiale Anzeige und Start der Slideshow
showSlides();