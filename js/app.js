/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navBar=document.querySelector("#navbar__list");
const sections=document.querySelectorAll("section");

/**
 * End Global Variables
*/

/**
 * Begin Main Functions
 * 
*/

// build the nav
function navBuilder() {
    for (let section of sections) {
        const sectionName=section.getAttribute("data-nav");
        const sectionId=section.id;
        navBar.innerHTML +=`<li> <a class="menu__link" href="#${sectionId}">${sectionName}</a> </li>`
    };
};
//bulid nav
navBuilder();

// Add class 'active' to section when near top of viewport
function sectionActivation(){
    for (let section of sections){
        const inviewport=section.getBoundingClientRect().top;
        if (inviewport<200 && inviewport>=-200){
            section.classList.add("your-active-class");
        }else{
            section.classList.remove("your-active-class");
        }
    };
};

// Scroll to anchor ID using scrollTO event
const navs = document.querySelectorAll(".page__header ul a");
function scrollToClick(event){
    event.preventDefault();
    const href=this.getAttribute("href");
    document.querySelector(href).scrollIntoView({behavior:"smooth"});
};

/**
 * End Main Functions
 * Begain Events
 * 
*/
document.addEventListener("scroll",sectionActivation);

for (const nav of navs) {
    nav.addEventListener("click",scrollToClick);
};