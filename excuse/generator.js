#!/usr/bin/env node

"use strict";

const who = [
  "Leonardo",
  "Raphael",
  "Donatello",
  "Michelangelo",
];

const action = [
  "se torcio el tobillo y golpeo",
  "se rompio un ligamento y dano",
  "se disloco la rodilla y arruino",
  "se desgarro y estropeo",
  "recibio una patada y destruyo",
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

function getRandomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function generateExcuse() {
  const randomWho = who[Math.floor(Math.random() * who.length)];
  const randomAction = action[Math.floor(Math.random() * action.length)];
  const randomWhat = what[Math.floor(Math.random() * what.length)];
  const randomWhen = when[Math.floor(Math.random() * when.length)];
  // Eliminar las frases 'como messi', 'como pelé', 'como ronaldinho', 'como maradona' de la variable 'when'
  const whenSinNombre = randomWhen.replace(/,\s*como (messi|pel[ée]|ronaldinho|maradona)/i, '');
  const excuse = `${randomWho} ${randomAction} ${randomWhat} ${whenSinNombre}.`;

  return excuse;
}

if (require.main === module) {
  const excuse = generateExcuse();
  console.log(excuse);
}

module.exports = {
  generateExcuse,
};
