let menuIcon = document.querySelector('#nav-right-icon');

let menu = document.querySelector('#menu');



menuIcon.addEventListener("click", () => {
    if (menu.className === "hidden") {
        menu.classList.remove("hidden");
    } else {
        menu.classList.add("hidden");
    }
});