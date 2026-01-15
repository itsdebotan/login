// ==============================
// 🔧 KONFIGURATION
// ==============================
const CONFIG = {
  password: "boe2024",       // <- Passwort hier ändern
  landingPage: "home.html"   // Seite nach Login
};

// ==============================
// ✅ LOGIN-FUNKTION
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
      setTimeout(() => window.location.href = CONFIG.landingPage, 350);
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
// 🚪 LOGOUT (einfach zurück zum Login)
// ==============================
function logout() {
  window.location.href = "index.html";
}

// ==============================
// 🔒 SCHUTZ FÜR SEITEN (optional)
// ==============================
// Wenn jemand direkt auf home.html geht → zurück zum Login
function requireAuth() {
  // KEIN Speichern → also immer zurück zum Login, wenn nicht über Login gekommen
  if (!document.referrer.includes("index.html")) {
    window.location.href = "index.html";
  }
}
