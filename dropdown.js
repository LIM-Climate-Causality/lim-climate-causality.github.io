<script>
document.addEventListener("DOMContentLoaded", function() {
    // Get all dropdown toggles
    const dropdowns = document.querySelectorAll(".navbar-nav .dropdown > a.dropdown-toggle");

    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener("click", function(event) {
            // Stop default navigation if it's a dropdown title click
            if (dropdown.textContent.trim() === "Research") {
                event.preventDefault();
                document.getElementById("research").scrollIntoView({ behavior: "smooth" });
            }
            if (dropdown.textContent.trim() === "Contact Us") {
                event.preventDefault();
                document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});

</script>