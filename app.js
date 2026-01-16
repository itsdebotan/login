const CONFIG = {
  password: "boe2024",
  landingPage: "home.html",
  sessionKey: "boe_auth_v1",
};

function handleLoginForm() {
  const pw = document.getElementById("pw");
  const btn = document.getElementById("btn");
  const err = document.getElementById("err");
  const ok = document.getElementById("ok");

  function go() {
    err.style.display = "none";
    ok.style.display = "none";
    if ((pw.value || "").trim() === CONFIG.password) {
      sessionStorage.setItem(CONFIG.sessionKey, "1");
      ok.style.display = "block";
      setTimeout(() => (window.location.href = CONFIG.landingPage), 300);
    } else {
      err.style.display = "block";
      pw.focus();
      pw.select();
    }
  }
  btn.addEventListener("click", go);
  pw.addEventListener("keydown", (e) => e.key === "Enter" && go());
}

function requireAuth() {
  if (sessionStorage.getItem(CONFIG.sessionKey) !== "1") {
    window.location.href = "index.html";
  }
}

function logout() {
  sessionStorage.removeItem(CONFIG.sessionKey);
  window.location.href = "index.html";
}
