const loginBtn = document.getElementById("login-btn");
const registerBtn = document.getElementById("register-btn");
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");

function handleToggleClick(button) {
  const currActive = document.getElementsByClassName("active");
  if (currActive[0].id === button.id) {
    return;
  }
  if (button.id === "login-btn") {
    currActive[0].classList.toggle("active");
    loginBtn.classList.toggle("active");
  } else {
    currActive[0].classList.toggle("active");
    registerBtn.classList.toggle("active");
  }
  loginForm.classList.toggle("hidden");
  registerForm.classList.toggle("hidden");
}

loginBtn.addEventListener("click", (e) => handleToggleClick(e.target));
registerBtn.addEventListener("click", (e) => handleToggleClick(e.target));
