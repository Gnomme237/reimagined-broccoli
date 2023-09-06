// JS CODE

//Creating button click show hide nav
var togglebtn = document.querySelector(".togglebtn");
var nav = document.querySelector(".navlinks");
var links = document.querySelector(".navlinks li");

togglebtn.addEventListener("click", function() {
    this.classlist.toggle("click");
    nav.classList.toggle("open")
})

var typed = new Typed(".input" {
    strings: ["Fullstack Developper", "UX", "BackEnd", "Web Developper"],
    typedSpeed: 70,
    backSpeed: 55,
    loop: true
})