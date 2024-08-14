
    // JavaScript für das Öffnen und Schließen des Modals
    let modal = document.getElementById("myModal");
    let btn = document.getElementById("openModalBtn");
    let span = document.getElementsByClassName("close")[0];

    // Wenn der Benutzer auf den Button klickt, öffnet sich das Modal
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // Wenn der Benutzer auf <span> (x) klickt, schließt sich das Modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Wenn der Benutzer irgendwo außerhalb des Modals klickt, schließt sich das Modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }