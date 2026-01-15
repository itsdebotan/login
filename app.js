// ==============================
// 🔧 KONFIGURATION
// ==============================
const CONFIG = {
  password: "boe2024",
  landingPage: "home.html"
};

// ==============================
// ✅ LOGIN
// ==============================
function handleLoginForm() {
  const pw = document.getElementById("pw");
  const btn = document.getElementById("btn");
  const err = document.getElementById("err");
  const ok = document.getElementById("ok");

  function go() {
    err.style.display = "none";
    ok.style.display = "none";

    if ((pw.value || "").trim() === CONFIG.password) {
      ok.style.display = "block";
      setTimeout(() => window.location.href = CONFIG.landingPage, 300);
    } else {
      err.style.display = "block";
      pw.focus();
      pw.select();
    }
  }

  btn.addEventListener("click", go);
  pw.addEventListener("keydown", (e) => {
    if (e.key === "Enter") go();
  });
}

// ==============================
// 🔒 SCHUTZ FÜR SEITEN
// ==============================
function requireAuth() {
  // Wenn nicht über die Login-Seite gekommen → zurück zum Login
  if (!document.referrer.includes("index.html")) {
    window.location.href = "index.html";
  }
}

// ==============================
// 🚪 LOGOUT
// ==============================
function logout() {
  window.location.href = "index.html";
}
