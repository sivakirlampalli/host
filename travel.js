document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".login-btn").addEventListener("click", function() {
        const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
        loginModal.show();
    });

    document.querySelector(".input-group-text.btn").addEventListener("click", function() {
        const searchQuery = document.querySelector(".form-control").value.trim();
        if (searchQuery) {
            alert(`Search for: ${searchQuery}`);
        } else {
            alert("Please enter a country or city to search.");
        }
    });

    document.querySelectorAll(".feature-box").forEach(box => {
        box.addEventListener("mouseover", function() {
            this.style.boxShadow = "10px 10px 20px rgba(0, 0, 0, 0.2)";
        });
        box.addEventListener("mouseout", function() {
            this.style.boxShadow = "10px 1px whitesmoke";
        });

        box.addEventListener("click", function() {
            const cityDetails = this.querySelector(".feature-details").innerHTML;
            document.getElementById("city-details-content").innerHTML = cityDetails;
            const cityDetailsModal = new bootstrap.Modal(document.getElementById('cityDetailsModal'));
            cityDetailsModal.show();
        });
    });

    document.getElementById("registration-form").addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("regName").value;
        const email = document.getElementById("regEmail").value;
        const phone = document.getElementById("regPhone").value;

        alert(`Registered!\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`);
        // Here you would typically send this data to a backend server

        const cityDetailsModal = bootstrap.Modal.getInstance(document.getElementById('cityDetailsModal'));
        cityDetailsModal.hide();
    });
});