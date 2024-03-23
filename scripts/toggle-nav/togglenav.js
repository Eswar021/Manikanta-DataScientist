document.addEventListener("DOMContentLoaded", function() {
    var navLinks = document.querySelectorAll(".main-nav-list a");
    var menuToggle = document.getElementById("menu-toggle");
    var overlay = document.querySelector(".toggle-overlay");
    var activeElements = document.querySelectorAll(".active-element");

    navLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            var targetId = this.getAttribute("href");
            var targetElement = document.querySelector(targetId);
            if (targetElement) {
                var offsetTop = targetElement.offsetTop;
                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth" // Smooth scrolling
                });
                closeMenu();
            }
        });
    });

    menuToggle.addEventListener("click", function() {
        for (var activated = 0; activated < activeElements.length; activated++) {
            activeElements[activated].classList.toggle("active");
        }
        overlay.classList.toggle("active");
    });

    function closeMenu() {
        for (var activated = 0; activated < activeElements.length; activated++) {
            activeElements[activated].classList.remove("active");
        }
        overlay.classList.remove("active");
    }
});
