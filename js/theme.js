//
// Script JS utilisé pour les fonctionnalités dynamiques du site Ana Ruiz.
// Voir chaque fonction pour explication.
//

// js/theme.js
const themeBtn = document.getElementById("theme-toggle");
if (themeBtn) {
  
// ===== Fonction =====
function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }
  // Appliquer le thème sauvegardé au chargement
  const currentTheme = localStorage.getItem("theme") || "light";
  setTheme(currentTheme);

  themeBtn.addEventListener("click", () => {
    const theme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    setTheme(theme);
  });
}
// Mettre ceci dans js/theme.js ou à la fin de chaque page galerie
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.galerie-img').forEach(function(img) {
      img.style.cursor = "zoom-in";
      img.addEventListener('click', function() {
        if (img.requestFullscreen) img.requestFullscreen();
        else if (img.webkitRequestFullscreen) img.webkitRequestFullscreen();
        else if (img.msRequestFullscreen) img.msRequestFullscreen();
      });
    });
  });

