"use strict";

let valor1 = 3;
let valor2 = 7;
let operacion = "+";

if (operacion === "+") {
 console.log("El resultado es " + (valor1 + valor2));
} else if (operacion === "-") {
 console.log(`El resultado es ` + (valor1 - valor2));
} else if (operacion === "*") {
 console.log(`El resultado es ` + valor1 * valor2);
} else if (operacion === "/") {
 console.log(`El resultado es ` + valor1 / valor2);
} else {
 console.log("La operación introducida no es correcta");
}

switch (operacion) {
 case `+`:
  console.log(`El resultado es ` + (valor1 + valor2));
  break;
 case `-`:
  console.log(`El resultado es ` + (valor1 - valor2));
  break;
 case `*`:
  console.log(`El resultado es ` + valor1 * valor2);
  break;
 case `/`:
  console.log(`El resultado es ` + valor1 / valor2);
  break;
 case `e`:
  console.log(`El resultado es ` + valor1 ** valor2);
  break;
 default:
  console.log("La operación introducida no es correcta");
  break;
}
