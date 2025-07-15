
  function switchForm(form) {
    document.getElementById("loginForm").classList.remove("active");
    document.getElementById("signupForm").classList.remove("active");
    document.getElementById(form + "Form").classList.add("active");
  }

  function showError(message) {
    alert(message);
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

  // LOGIN validation
  document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = this.email.value.trim().toLowerCase();
  const password = this.password.value.trim();

  if (!email || !password) return showError("Please fill in all login fields.");
  if (!validateEmail(email)) return showError("Invalid email format.");
  if (password.length < 6) return showError("Password must be at least 6 characters.");

  // Fetch users from localStorage
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(u => u.email === email && u.password === password);

  if (!user) return showError("Invalid email or password.");

  // Save session
  localStorage.setItem("loggedInUser", JSON.stringify(user));

  alert("Login successful!");
  window.location.href = "dash.html";
});


  // SIGNUP validation
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

  // Save new user
  users.push({ fullname, email, password });
  localStorage.setItem("users", JSON.stringify(users));

  // Send welcome email with password
  sendWelcomeEmail(fullname, email, password);

  alert("Signup successful! You can now login.");
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

