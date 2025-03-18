<script>
document.addEventListener("DOMContentLoaded", function() {
    // Get all dropdown toggles
    const dropdowns = document.querySelectorAll(".navbar-nav .dropdown");

    dropdowns.forEach(function(dropdown) {
        const link = dropdown.querySelector("a.dropdown-toggle");

        // Show dropdown on hover
        dropdown.addEventListener("mouseenter", function() {
            dropdown.classList.add("show");
            const menu = dropdown.querySelector(".dropdown-menu");
            if (menu) menu.classList.add("show");
        });

        // Hide dropdown when mouse leaves
        dropdown.addEventListener("mouseleave", function() {
            dropdown.classList.remove("show");
            const menu = dropdown.querySelector(".dropdown-menu");
            if (menu) menu.classList.remove("show");
        });

        // Keep smooth scrolling on click
        link.addEventListener("click", function(event) {
            if (link.textContent.trim() === "Research") {
                event.preventDefault();
                document.getElementById("research").scrollIntoView({ behavior: "smooth" });
            }
            if (link.textContent.trim() === "Contact Us") {
                event.preventDefault();
                document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
</script>