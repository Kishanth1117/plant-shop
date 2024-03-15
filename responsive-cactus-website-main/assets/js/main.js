const navMenu = document.getElementById("nav__menu");
const navToggle = document.getElementById("nav__toggle");
const navClose = document.getElementById("nav__close");


if(navToggle){
    navToggle.addEventListener("click", ()=>{
        navMenu.classList.add("show__menu")
    })
}

if(navClose){
    navClose.addEventListener("click", ()=>{
        navMenu.classList.remove("show__menu")
    })
}


const navLink = document.querySelectorAll(".nav__link");

const linkAction = () =>{
    const navMenu = document.getElementById("nav__menu");
    navMenu.classList.remove("show__menu");
};

navLink.forEach(n=>n.addEventListener("click", linkAction))



const blurHeader = () =>{
    const header = document.getElementById("header");
    this.scrollY >= 50 ? header.classList.add("blur-header") : header.classList.remove("blur-header")
}
window.addEventListener("scroll", blurHeader)




const scrollUp = () =>{
    const scrollUp = document.getElementById("scroll-up");
    this.scrollY >= 350 ? scrollUp.classList.add("show-scroll") : scrollUp.classList.remove("show-scroll")
}
window.addEventListener("scroll", scrollUp);




const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute("id"),
        sectionClass = document.querySelector(".nav__menu a[href*"+ sectionId +"]")

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionClass.classList.add("active-link")
        }else{
            sectionClass.classList.remove("active-link")
        }
    })
}
window.addEventListener("scroll", scrollActive);




const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2500,
    delay: 300,
   // reset: true, // Animation repeat
})
sr.reveal(`.home__img, .new__data, .care__img, .contact__content, .footer`)
sr.reveal(`.home__data, .care__list, .contact__img`, {delay: 500})
sr.reveal(`.new__card`, {delay: 500, interval: 100})
sr.reveal(`.shop__card`, {interval: 100})
