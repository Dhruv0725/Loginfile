document.addEventListener("DOMContentLoaded", function () {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  console.log(currentUser);
  if (!currentUser) {
    window.location.href = "/index.html";
  }

  document.querySelector("#logoutbutton").addEventListener("click", () => {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = "/index.html";
  });
});
