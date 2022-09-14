// Script JS pour vérifier
// la fonctionnalité d'un bouton
const btn = document.getElementById("btntest");
if ( btn != undefined && btn != null ) {
    btn.addEventListener("click", () => {
        console.log("Bouton appuyé");
    })
}

const hamburgerBtn = document.getElementById("hamburger-btn");
const navPhone = document.getElementById("navigation-mobile")
if (
    hamburgerBtn != undefined &&
    hamburgerBtn != null &&
    navPhone != undefined &&
    navPhone != null
) {
    hamburgerBtn.addEventListener("click", () => {
        hamburgerBtn.classList.toggle("active");
        navPhone.classList.toggle("active");
        document.body.classList.toggle("nav-mobile-display")
    });
}