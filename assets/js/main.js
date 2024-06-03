/*=============== SHOW MENU ===============*/
const   navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')


if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}


if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const   navLink = document.querySelectorAll('.nav__link')

const   linkAction = () =>{
    const   navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SHADOW HEADER ===============*/
const   shadowHeader = () =>{
    const   header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header') 
}
window.addEventListener('scroll', shadowHeader)
/*=============== SHOW SCROLL UP ===============*/ 
const   scrollUp = () =>{
    const   scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                    : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const   sections = document.querySelectorAll('section[id]')

const   scrollActive = () =>{
    const   scrollDOwn = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionID = current.getAttribute('id'),
            sectionsClass = document.querySelector('n.nav__menu a[href*=' + sectionID + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
        

    })
}
window.addEventListener('scroll', scrollActive)
/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
const   sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true, // Animation repeat
})

sr.reveal(`.home__data, .join__container`)
sr.reveal(`.home__img`, {origin: 'bottom'})
sr.reveal(`.enjoy__card, .popular__card`, {interval: 100})
sr.reveal(`.about__data`, {origin: 'right'})
sr.reveal(`.about__img`, {origin: 'left'})