const navMenu = document.querySelector("#nav");
const open = document.querySelector("#open");
const close = document.querySelector("#close");

open.addEventListener("click", () => {
    navMenu.classList.add("visible");
})

close.addEventListener("click", () => {
    navMenu.classList.remove("visible");
});

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav-link');
const linkAction = () =>{
    const navMenu = document.getElementById('nav');
    //Cuando se da click en cada nav__link, se remueve show-menu
    navMenu.classList.remove('visible')
}
navLink.forEach(n => n.addEventListener('click', linkAction)); /*for each:Es un ciclo, n:recore cada uno de los valores*/
