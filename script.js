function toggleMenu() {
    const navUl = document.querySelector("nav ul");
    const menuToggle = document.querySelector(".menu-toggle i");
    navUl.classList.toggle("show");
    if (navUl.classList.contains("show")) {
        menuToggle.classList.remove("fa-bars");
        menuToggle.classList.add("fa-times");
    } else {
        menuToggle.classList.remove("fa-times");
        menuToggle.classList.add("fa-bars");
    }
}

document.getElementById("theme-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    this.innerHTML = document.body.classList.contains("dark-mode") ? 
        '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function () {
        document.querySelector("nav ul").classList.remove("show");
        const menuToggle = document.querySelector(".menu-toggle i");
        menuToggle.classList.remove("fa-times");
        menuToggle.classList.add("fa-bars");
    });
});