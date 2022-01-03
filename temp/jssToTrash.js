const navToggle = document.querySelector("#navToggle");
const navClosedIcon = document.querySelector("#navClosed");
const navOpenIcon = document.querySelector("#navOpen");
const navIcon = document.querySelectorAll(".navIcon");
const nav = document.querySelector("nav");
const header = document.querySelector("header");
const aboutToggle1 = document.querySelector("#item1");
const aboutToggle2 = document.querySelector("#item2");
const aboutToggle3 = document.querySelector("#item3");
const aboutToggle4 = document.querySelector("#item4");
const aboutIcon1 = document.querySelectorAll(".aboutIcon1");
const aboutIcon2 = document.querySelectorAll(".aboutIcon1");
const aboutIcon3 = document.querySelectorAll(".aboutIcon1");
const aboutIcon4 = document.querySelectorAll(".aboutIcon1");

navToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    navIcon.forEach((icon) => {
    icon.classList.toggle("hidden");
    });
});


window.addEventListener(
    "resize", () => {
    if (document.body.clientWidth > 720) {
        nav.classList.remove("open");
        navIcon.forEach((icon) => {
        icon.classList.remove("hidden");
        });
        navOpenIcon.classList.add("hidden");
    }
    },
    { passive: false }
);

window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 0);
})

// aboutToggle1.addEventListener("click", () => {
//     aboutIcon1.forEach((icon1) => {
//     icon1.classList.toggle("hidden");
//     });
// });
// aboutToggle2.addEventListener("click", () => {
//     aboutIcon2.forEach((icon2) => {
//     icon2.classList.toggle("hidden");
//     });
// });
// aboutToggle3.addEventListener("click", () => {
//     aboutIcon3.forEach((icon3) => {
//     icon3.classList.toggle("hidden");
//     });
// });
// aboutToggle4.addEventListener("click", () => {
//     aboutIcon4.forEach((icon4) => {
//     icon4.classList.toggle("hidden");
//     });
// });