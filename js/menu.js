//
// Script JS utilisé pour les fonctionnalités dynamiques du site Ana Ruiz.
// Voir chaque fonction pour explication.
//

document.addEventListener("DOMContentLoaded", 
// ===== Fonction =====
function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
  
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('open');
    });
  
    // Optionnel : referme le menu quand on clique sur un lien (pour UX mobile)
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  });
  