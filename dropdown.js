<script>
document.addEventListener("DOMContentLoaded", function() {
    // Get all dropdowns in the navbar
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

        // Smooth scrolling or redirect to homepage
        link.addEventListener("click", function(event) {
            const sectionId = link.textContent.trim().toLowerCase(); // Convert "Research" -> "research"
            const targetSection = document.getElementById(sectionId);

            if (targetSection) {
                // If on the same page, scroll smoothly
                event.preventDefault();
                targetSection.scrollIntoView({ behavior: "smooth" });
            } else {
                // If on another page, navigate to homepage and scroll
                window.location.href = `/index.html#${sectionId}`;
            }
        });
    });
});
</script>
