// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", function () {
    console.log("Page loaded successfully!");

    // Smooth scrolling for navigation links
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Hover effect for social media icons
    document.querySelectorAll(".profile .social-icons a").forEach(icon => {
        icon.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.2)";
        });
        icon.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });
    });
});
