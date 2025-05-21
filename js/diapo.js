//
// Script JS utilisé pour les fonctionnalités dynamiques du site Ana Ruiz.
// Voir chaque fonction pour explication.
//

document.addEventListener("DOMContentLoaded", 
// ===== Fonction =====
function() {
  const images = [
    "img/accueil.jpg",
    "img/andaloucia-1.jpg",
    "img/andaloucia-2.jpg",
    "img/andaloucia-3.jpg",
    "img/annapurna.jpg",
    "img/athenes.jpg",
    "img/au-bord-du-visible.jpg",
    "img/au-dessous-du-volcan.jpg",
    "img/chaleur-dafrique.jpg",
    "img/dragonnier-couverture.jpg",
    "img/eaux-rouges.jpg",
    "img/entre-lafrique-et-leurope.jpg",
    "img/fda-2009-couverture.jpg",
    "img/force-tranquille.jpg",
    "img/guizeh.jpg",
    "img/le-vieux-dragonnier.jpg",
    "img/le-vieux-volcan.jpg",
    "img/llanes.jpg",
    "img/maison-chrysalide.jpg",
    "img/maison-de-thyphee.jpg",
    "img/maison-floride.jpg",
    "img/maison-palais-prison.jpg",
    "img/maison-paradis-perdu.jpg",
    "img/maison-sacree.jpg",
    "img/maison-temple.jpg",
    "img/naples.jpg",
    "img/nudite-couverture.jpg",
    "img/sable-noir.jpg",
    "img/sur-la-terre.jpg"
  ];
  const audio = document.getElementById("audio-diapo");
  const imgTag = document.getElementById("diapo-img");
  const fullscreenBtn = document.getElementById("fullscreen-btn");
  const container = document.getElementById("diapo-container");
  let interval = null;
  let index = 0;

  function nextImage() {
    if (!imgTag) return;
    imgTag.src = images[index];
    index = (index + 1) % images.length;
  }

  function launchDiapo() {
    if (!imgTag || images.length === 0) return;
    if (interval) clearInterval(interval);
    const tpsParImage = 2; // 2 secondes par image
    index = 0;
    nextImage();
    interval = setInterval(nextImage, tpsParImage * 1000);
  }

  // Lance le diaporama dès le chargement (même sans audio)
  if (audio) {
    audio.onloadedmetadata = () => launchDiapo(audio.duration);
    audio.onplay = () => launchDiapo(audio.duration);
    launchDiapo();
  } else {
    launchDiapo();
  }

  // Affiche la première image au chargement
  if (imgTag) imgTag.src = images[0];

  // Affiche le message iOS si besoin
  function isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  }
  if (isIOS()) {
    const info = document.getElementById("ios-fullscreen-info");
    if (info) info.style.display = "block";
  }

  // Plein écran sur le conteneur
  function launchFullscreen() {
    const container = document.getElementById("diapo-container");
    if (!container) return;
    if (isIOS()) {
      // Pseudo plein écran pour iOS
      container.classList.add("diapo-fake-fullscreen");
      // Quitter le pseudo plein écran au tap
      container.addEventListener("click", function exitFakeFS(e) {
        container.classList.remove("diapo-fake-fullscreen");
        container.removeEventListener("click", exitFakeFS);
      });
    } else if (container.requestFullscreen) container.requestFullscreen();
    else if (container.webkitRequestFullscreen) container.webkitRequestFullscreen();
    else if (container.msRequestFullscreen) container.msRequestFullscreen();
    else if (container.mozRequestFullScreen) container.mozRequestFullScreen();
  }

  if (imgTag) {
    imgTag.addEventListener("click", launchFullscreen);
    imgTag.addEventListener("touchend", launchFullscreen);
  }
});





