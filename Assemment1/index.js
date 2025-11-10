const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const message = document.getElementById("message");

// Email validation regex
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener("submit", function(e) {
  e.preventDefault(); // prevent form from submitting

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!name || !email || !password) {
    message.style.color = "red";
    message.textContent = "All fields are required!";
    return;
  }

  if (!isValidEmail(email)) {
    message.style.color = "red";
    message.textContent = "Please enter a valid email!";
    return;
  }

  // If validation passes
  message.style.color = "green";
  message.textContent = "Registration Successfully!";
  form.reset();
});
