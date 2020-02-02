"use strict";

const equipoMaria = [62, 34, 55];
const equipoPaula = [35, 60, 59];
const equipoRebeca = [40, 39, 63];

function mediaEquipoMaria() {
 const equipoMaria = [62, 34, 55];
 const sumaEquipoMaria = equipoMaria[0] + equipoMaria[1] + equipoMaria[2];
 const mediaEquipoMaria = Math.round(sumaEquipoMaria / equipoMaria.length);
 return mediaEquipoMaria;
}
console.log(`La media del equipo de Maria es ${mediaEquipoMaria()}`);

function mediaEquipoPaula() {
 const equipoPaula = [35, 60, 59];
 const sumaEquipoPaula = equipoPaula[0] + equipoPaula[1] + equipoPaula[2];
 const mediaEquipoPaula = Math.round(sumaEquipoPaula / equipoPaula.length);
 return mediaEquipoPaula;
}
console.log(`La media del equipo de Paula es ${mediaEquipoPaula()}`);

function mediaEquipoRebeca() {
 const equipoRebeca = [40, 39, 63];
 const sumaEquipoRebeca = equipoRebeca[0] + equipoRebeca[1] + equipoRebeca[2];
 const mediaEquipoRebeca = Math.round(sumaEquipoRebeca / equipoPaula.length);
 return mediaEquipoRebeca;
}
console.log(`La media del equipo de Rebeca es ${mediaEquipoRebeca()}`);

if (
 mediaEquipoMaria() > mediaEquipoRebeca() &&
 mediaEquipoMaria() > mediaEquipoPaula()
) {
 console.log(`El equpo de Maria es el que tiene la media más alta`);
} else if (
 mediaEquipoPaula() > mediaEquipoMaria() &&
 mediaEquipoPaula() > mediaEquipoRebeca()
) {
 console.log(`El equipo de Paula es el que tiene la media más alta`);
} else {
 console.log(`El equipo de Rebeca es el que tiene la media más alta`);
}
