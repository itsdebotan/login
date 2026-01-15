// ==============================
// 🔧 KONFIGURATION
// ==============================
const CONFIG = {
  password: "boe2024",       // <- Passwort hier ändern
  landingPage: "home.html",  // Seite nach Login
  sessionKey: "boe_auth_v1", // Token-Key
};

// ==============================
// ✅ AUTH HELPERS
// ==============================
function isAuthed() {
  return sessionStorage.getItem(CONFIG.sessionKey) === "1";
}

function setAuthed() {
  sessionStorage.setItem(CONFIG.sessionKey, "1");
}

function logout() {
  sessionStorage.removeItem(CONFIG.sessionKey);
  window.location.href = "index.html";
}

// Auf geschützten Seiten aufrufen:
function requireAuth() {
  if (!isAuthed()) {
    window.location.href = "index.html";
  }
}

// Auf der Login-Seite aufrufen:
function handleLoginForm() {
  const pw = document.getElementById("pw");
  const btn = document.getElementById("btn");
  const err = document.getElementById("err");
  const ok = document.getElementById("ok");

  function go() {
    err.style.display = "none";
    ok.style.display = "none";

    if ((pw.value || "").trim() === CONFIG.password) {
      setAuthed();
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
