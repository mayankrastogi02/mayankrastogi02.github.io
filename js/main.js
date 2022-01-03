const navToggle = document.querySelector("#navToggle");
const navMenu = document.querySelector("#navMenu");
const navClosedIcon = document.querySelector("#navClosed");
const navOpenIcon = document.querySelector("#navOpen");
const navIcon = document.querySelectorAll(".navIcon");
const nav = document.querySelector("nav");
const header = document.querySelector("header");

const acc = document.getElementsByClassName("accordion");

navToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    navIcon.forEach((icon) => {
        icon.classList.toggle("hidden");
    });
});
navMenu.addEventListener("click", () => {
    if (document.body.clientWidth < 720) {
        nav.classList.toggle("open");
    }
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
    }, {
        passive: false
    }
);

window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 0);
})

for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}