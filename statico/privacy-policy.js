document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById("popup");
    const closeButton = document.getElementById("close-btn");

    // Mostra il popup al caricamento della pagina
    popup.style.display = "flex";

    // Chiudi il popup quando l'utente clicca sulla 'X'
    closeButton.onclick = function() {
        popup.style.display = "none";
    }

    // Chiudi il popup se l'utente clicca al di fuori del contenuto del popup
    window.onclick = function(event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    }
});
