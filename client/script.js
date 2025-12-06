const API = "http://localhost:5000/auth";async function register() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const res = await fetch(`${API}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password })
  });

  const data = await res.json();
  document.getElementById("msg").innerText = data.message;
}async function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const res = await fetch(`${API}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();
  document.getElementById("msg").innerText = data.message;

  if (data.token) {
    localStorage.setItem("token", data.token);
    window.location.href = "dashboard.html";
  }
}function logout() {
  localStorage.removeItem("token");
  window.location.href = "login.html";
}