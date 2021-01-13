/* interactie hamburger menu */

var menuKnop = document.querySelector("header div:first-child");
var menu = document.querySelector("header nav");
var sluitMenu = document.querySelector("header nav div");

/* interactie melding bij klik in winkelwagen */
var winkelwagen = document.querySelector("button.winkelwagen");
var melding = document.querySelector("header div:last-child");


/* hamburger menu openen */
function openMenu() {
    menu.classList.add("open");
    sluitMenu.classList.add("open");
}

/* hamburger menu sluiten */
function sluitHetMenu() {
    menu.classList.remove("open");
    sluitMenu.classList.remove("open");
}


/* interactie klik in winkelwagen */
function nieuwemelding() {
    melding.classList.toggle("nieuwitem")
}


menuKnop.addEventListener("click", openMenu);
sluitMenu.addEventListener("click", sluitHetMenu);
winkelwagen.addEventListener("click", nieuwemelding);
