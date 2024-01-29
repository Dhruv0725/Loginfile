import { getUsers, updateList } from "./data.js";
const users = getUsers();

document.addEventListener("DOMContentLoaded", function () {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (currentUser) {
    window.location.href = "/webpage.html";
  }

  const handleLogin = (user) => {
    localStorage.setItem("currentUser", JSON.stringify(user));
    window.location.href = "/webpage.html";
  };

  const loginForm = document.querySelector("form");
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    //console.log("clicked");
    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;

    const userf = users.find((u) => u.username === user && u.password === pass);

    if (userf) {
      handleLogin(userf);
    } else {
      alert("Invalid username or password");
    }
  });
});
