
  function switchForm(form) {
    document.getElementById("loginForm").classList.remove("active");
    document.getElementById("signupForm").classList.remove("active");
    document.getElementById(form + "Form").classList.add("active");
  }

  function showError(message) {
    showCustomAlert(message);
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function togglePassword(inputId, icon) {
    const input = document.getElementById(inputId);
    if (input.type === "password") {
      input.type = "text";
      icon.textContent = "🙈";
    } else {
      input.type = "password";
      icon.textContent = "👁";
    }
  }


  document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = this.email.value.trim().toLowerCase();
  const password = this.password.value.trim();

  if (!email || !password) return showError("Please fill in all login fields.");
  if (!validateEmail(email)) return showError("Invalid email format.");
  if (password.length < 6) return showError("Password must be at least 6 characters.");


  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(u => u.email === email && u.password === password);

  if (!user) return showError("Invalid email or password.");

 
  localStorage.setItem("loggedInUser", JSON.stringify(user));

  showCustomAlert("Login successful!");
  window.location.href = "dashboard.html";
});


  document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const fullname = this.fullname.value.trim();
  const email = this.email.value.trim().toLowerCase();
  const password = this.password.value.trim();

  if (!fullname || !email || !password) return showError("Please fill in all signup fields.");
  if (!validateEmail(email)) return showError("Invalid email format.");
  if (password.length < 6) return showError("Password must be at least 6 characters.");

  let users = JSON.parse(localStorage.getItem("users")) || [];

  if (users.some(user => user.email === email)) {
    return showError("User with this email already exists.");
  }

  
  users.push({ fullname, email, password });
  localStorage.setItem("users", JSON.stringify(users));

  
  sendWelcomeEmail(fullname, email, password);

  showCustomAlert("Signup successful! You can now login.");
  switchForm("login");
});

function sendWelcomeEmail(fullname, email, password) {
  emailjs.send("service_ko7uygk", "template_7l34g2d", {
    fullname: fullname,
    email: email,
    password: password
  })
  .then(function(response) {
    console.log("Email sent successfully:", response);
  }, function(error) {
    console.error("Email sending failed:", error);
  });
}

function showCustomAlert(message, icon = "✅", duration = 3000) {
  const alertBox = document.getElementById("customAlert");
  const alertMessage = document.getElementById("alertMessage");
  const iconDiv = alertBox.querySelector(".alert-icon");

  alertMessage.textContent = message;
  iconDiv.textContent = icon;

  alertBox.classList.remove("hidden");

  setTimeout(() => {
    alertBox.classList.add("hidden");
  }, duration);
}
