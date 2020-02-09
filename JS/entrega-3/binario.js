'use strict';


let numBinario = prompt(`Insertar número binario`);

function binario() {
  numBinario = numBinario.split('').reverse();

  for (let i = 0; i <= numBinario.length; i++) {
    let calculo = numBinario.map((dato, index) => 2 ** index * dato);
    return calculo;
  }
}
function calculo() {
  const resultado = binario(numBinario);

  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return resultado.reduce(reducer);
}

console.log(calculo(numBinario);
