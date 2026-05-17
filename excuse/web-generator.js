// Fondos nocturnos de Nueva York (solo NYC, libres de derechos)
const nycBackgrounds = [
  "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80", // NYC skyline night
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80", // Brooklyn Bridge night
  "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80", // Times Square night
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80", // Empire State night
  "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80", // Central Park night
];
"use strict";

const who = [
  {
    name: "Leonardo",
    stickerNumber: "#101",
    maskColor: "#2563eb",
    weapon: "Katanas",
    styleClass: "turtle-leonardo",
    face: "../assets/svg/leonardo.svg", // cara Leonardo SVG local
  },
  {
    name: "Raphael",
    stickerNumber: "#102",
    maskColor: "#dc2626",
    weapon: "Sai",
    styleClass: "turtle-raphael",
    face: "../assets/svg/raphael.svg", // cara Raphael SVG local
  },
  {
    name: "Donatello",
    stickerNumber: "#103",
    maskColor: "#7e22ce",
    weapon: "Bo",
    styleClass: "turtle-donatello",
    face: "../assets/svg/donatello.svg", // cara Donatello SVG local
  },
  {
    name: "Michelangelo",
    stickerNumber: "#104",
    maskColor: "#ea580c",
    weapon: "Nunchakus",
    styleClass: "turtle-michelangelo",
    face: "../assets/svg/michelangelo.svg", // cara Michelangelo SVG local
  },
];

const action = [
  {
    text: "se deslizo por una alcantarilla y derribo",
    turtleAnimationClass: "anim-slide",
    targetAnimationClass: "target-fall",
    poseClass: "pose-slide",
    targetPositionClass: "target-near",
  },
  {
    text: "lanzo una patada voladora y rompio",
    turtleAnimationClass: "anim-kick",
    targetAnimationClass: "target-break",
    poseClass: "pose-kick",
    targetPositionClass: "target-high",
  },
  {
    text: "hizo un giro ninja y descontrolo",
    turtleAnimationClass: "anim-spin",
    targetAnimationClass: "target-chaos",
    poseClass: "pose-spin",
    targetPositionClass: "target-middle",
  },
  {
    text: "esquivo al Clan del Pie y aplasto",
    turtleAnimationClass: "anim-dodge",
    targetAnimationClass: "target-flat",
    poseClass: "pose-dodge",
    targetPositionClass: "target-low",
  },
  {
    text: "entreno con su arma y partio",
    turtleAnimationClass: "anim-train",
    targetAnimationClass: "target-split",
    poseClass: "pose-train",
    targetPositionClass: "target-middle",
  },
];

const what = [
  "la ultima caja de pizza de la guarida",
  "el laboratorio secreto de TCRI",
  "el scooter de Casey Jones",
  "la antena del edificio del Clan del Pie",
  "el plan maestro de Shredder",
  "la puerta secreta del escondite de Splinter",
  "el tablero de control del Technodrome",
  "la mesa de estrategia de April O'Neil",
  "el puente donde comenzo la persecucion nocturna",
];

const when = [
  "el 20 de julio de 1969, durante la llegada del Apolo 11 a la Luna",
  "el 9 de noviembre de 1989, cuando cayo el Muro de Berlin",
  "el 11 de febrero de 1990, durante la liberacion de Nelson Mandela",
  "el 1 de enero de 2002, con la entrada del euro en circulacion",
  "el 14 de julio de 2015, durante la firma del acuerdo nuclear con Iran",
];

const turtleAnimationClasses = action.map((item) => item.turtleAnimationClass);
const targetAnimationClasses = action.map((item) => item.targetAnimationClass);
const poseClasses = action.map((item) => item.poseClass);
const targetPositionClasses = ["target-near", "target-middle", "target-high", "target-low"];
const turtleStyleClasses = who.map((item) => item.styleClass);

function getRandomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function generateExcuse() {
  const randomWho = getRandomItem(who);
  const randomAction = getRandomItem(action);
  const randomWhat = getRandomItem(what);
  const randomWhen = getRandomItem(when);

  const randomBg = getRandomItem(nycBackgrounds);

  const excuse = `${randomWho.name} ${randomAction.text} ${randomWhat} ${randomWhen}.`;

  return {
    excuse,
    who: randomWho,
    action: randomAction,
    what: randomWhat,
    when: randomWhen,
    bg: randomBg,
  };
}

function playCartoonAnimation(result) {
  const cartoonSceneNode = document.getElementById("cartoon-scene");
  const turtleNode = document.getElementById("turtle");
  const turtleFaceNode = document.getElementById("turtle-face-img");
  const targetNode = document.getElementById("scene-target");
  const actionNode = document.getElementById("action-label");
  const targetLabelNode = document.getElementById("target-label");
  const timelineNode = document.getElementById("timeline-label");

  if (!cartoonSceneNode || !turtleNode) return;

  cartoonSceneNode.style.setProperty("--mask-color", result.who.maskColor);
  turtleNode.style.setProperty("--mask-color", result.who.maskColor);

  // Cambiar fondo de la escena por un lugar nocturno de NYC
  cartoonSceneNode.style.background = `url('${result.bg}') center/cover no-repeat`;

  if (turtleFaceNode) {
    turtleFaceNode.src = result.who.face;
    turtleFaceNode.alt = result.who.name;
    turtleFaceNode.style.display = "block";
  }


  if (actionNode) {
    actionNode.textContent = `Animacion: ${result.who.name} ${result.action.text}`;
  }

  if (targetLabelNode) {
    targetLabelNode.textContent = result.what;
  }

  if (timelineNode) {
    timelineNode.textContent = `Momento: ${result.when}`;
  }

  turtleNode.classList.remove(...turtleAnimationClasses);
  turtleNode.classList.remove(...poseClasses);
  turtleNode.classList.remove(...turtleStyleClasses);
  void turtleNode.offsetWidth;
  turtleNode.classList.add(result.action.turtleAnimationClass);
  turtleNode.classList.add(result.action.poseClass);
  turtleNode.classList.add(result.who.styleClass);

  if (targetNode) {
    targetNode.classList.remove(...targetAnimationClasses);
    targetNode.classList.remove(...targetPositionClasses);
    void targetNode.offsetWidth;
    targetNode.classList.add(result.action.targetAnimationClass);
    targetNode.classList.add(result.action.targetPositionClass);
  }
}

function renderExcuse() {
  const excuseNode = document.getElementById("excuse");
  const playerNameNode = document.getElementById("player-name");
  const stickerNumberNode = document.getElementById("sticker-number");

  if (!excuseNode) return;

  const result = generateExcuse();

  excuseNode.textContent = result.excuse;

  if (playerNameNode) {
    playerNameNode.textContent = result.who.name;
  }

  if (stickerNumberNode) {
    stickerNumberNode.textContent = result.who.stickerNumber;
  }

  playCartoonAnimation(result);
}

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("generate-btn");
  if (button) {
    button.addEventListener("click", renderExcuse);
  }

  renderExcuse();
});
