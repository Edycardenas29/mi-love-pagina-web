const carta = document.getElementById("carta");
const texto = carta.dataset.text;
const playlist = document.getElementById("playlistSection");

let index = 0;

function escribirCarta() {
  if (index < texto.length) {
    carta.innerHTML += texto.charAt(index);
    index++;
    setTimeout(escribirCarta, 35);
  } else {
    playlist.style.display = "flex";
  }
}

window.onload = escribirCarta;

/* LIBRITO DE FRASES */
const frases = [
  "Eres mi lugar seguro 💖",
  "Contigo todo es mejor ✨",
  "Mi persona favorita eres tú 💕",
  "Te elijo hoy y siempre 💫"
];

let fraseIndex = 0;

function cambiarFrase() {
  document.getElementById("frase").textContent = frases[fraseIndex];
  fraseIndex = (fraseIndex + 1) % frases.length;
}
/* =========================
   CORAZONES FLOTANDO
========================= */
function crearCorazon() {
  const corazon = document.createElement("div");
  corazon.classList.add("heart");
  corazon.textContent = "💖";

  corazon.style.left = Math.random() * 100 + "vw";
  corazon.style.animationDuration = Math.random() * 3 + 4 + "s";
  corazon.style.fontSize = Math.random() * 10 + 15 + "px";

  document.body.appendChild(corazon);

  setTimeout(() => {
    corazon.remove();
  }, 7000);
}

// Crear corazones cada cierto tiempo
setInterval(crearCorazon, 500);
/* =========================
   CONFETI FINAL
========================= */
function crearConfeti() {
  const confeti = document.createElement("div");
  confeti.classList.add("confetti");

  const colores = ["#ff5d8f", "#ffc2d1", "#ffd6e0", "#cdb4db", "#a2d2ff"];
  confeti.style.backgroundColor =
    colores[Math.floor(Math.random() * colores.length)];

  confeti.style.left = Math.random() * 100 + "vw";
  confeti.style.animationDuration = Math.random() * 3 + 3 + "s";

  document.getElementById("confetti-container").appendChild(confeti);

  setTimeout(() => {
    confeti.remove();
  }, 6000);
}

// Generar confeti constantemente
setInterval(crearConfeti, 300);
