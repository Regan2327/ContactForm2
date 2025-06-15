document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from submitting
  
    // Clear old errors
    document.getElementById("successMessage").textContent = "";
    ["nameError", "emailError", "messageError"].forEach(id => {
      document.getElementById(id).textContent = "";
    });
  
    // Collect input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    let isValid = true;
  
    // Name validation
    if (name === "") {
      document.getElementById("nameError").textContent = "Name is required.";
      isValid = false;
    }
  
    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
      document.getElementById("emailError").textContent = "Email is required.";
      isValid = false;
    } else if (!emailPattern.test(email)) {
      document.getElementById("emailError").textContent = "Invalid email format.";
      isValid = false;
    }
  
    // Message validation
    if (message === "") {
      document.getElementById("messageError").textContent = "Message is required.";
      isValid = false;
    }
  
    // If valid, show success message
    if (isValid) {
      document.getElementById("successMessage").textContent = "Form submitted successfully!";
      document.getElementById("contactForm").reset();
    }
  });
  