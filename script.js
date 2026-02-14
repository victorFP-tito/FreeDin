function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email && password) {
    window.location.href = "feed.html";
  } else {
    alert("Preencha todos os campos!");
  }
}
