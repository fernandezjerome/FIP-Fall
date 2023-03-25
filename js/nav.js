const btnHamburger = document.querySelector("#btnHamburger");
const sideNav = document.querySelector("#sidenav");

btnHamburger.addEventListener("click", function () {
    if (btnHamburger.classList.contains("open")) {
        btnHamburger.classList.remove("open");
        sideNav.classList.remove("nav-slide");
    } else {
        btnHamburger.classList.add("open");
        sideNav.classList.add("nav-slide");
    }
});

const panels = document.querySelectorAll(".case__panel");

panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        removeActiveClasses();
        panel.classList.add("active");
    });
});

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove("active");
    });
}
