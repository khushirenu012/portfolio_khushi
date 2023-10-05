// JavaScript to toggle the dropdown on menu icon click
var menuIcon = document.getElementById("menu-icon");
var dropdown = document.getElementById("dropdown");

menuIcon.addEventListener("click", function() {
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
});


// script.js
const certificates = document.querySelectorAll(".certificate");
const prevButton = document.getElementById("prevBtn");
const nextButton = document.getElementById("nextBtn");

let currentCertificateIndex = 0;

function showCertificate(index) {
    certificates.forEach((certificate, i) => {
        if (i === index) {
            certificate.style.display = "block";
        } else {
            certificate.style.display = "none";
        }
    });
}

prevButton.addEventListener("click", () => {
    currentCertificateIndex--;
    if (currentCertificateIndex < 0) {
        currentCertificateIndex = certificates.length - 1;
    }
    showCertificate(currentCertificateIndex);
});

nextButton.addEventListener("click", () => {
    currentCertificateIndex++;
    if (currentCertificateIndex >= certificates.length) {
        currentCertificateIndex = 0;
    }
    showCertificate(currentCertificateIndex);
});

showCertificate(currentCertificateIndex);

php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    $to = "khushiren012@gmail.com";
    $subject = "Contact Form Submission from $name";
    $headers = "From: $email";
    
    mail($to, $subject, $message, $headers);
    
    // Redirect to a thank-you page or display a success message
    header("Location: thank_you.html");
    exit();
}
