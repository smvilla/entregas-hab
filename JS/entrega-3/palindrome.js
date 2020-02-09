"use strict";

let input = prompt(`Inserta una frase para comprobar si es un palíndromo`);

function checkPalindrome() {
 input = input.toLowerCase().replace(/ /g, "");
 let inputClone = input;
 inputClone = inputClone
  .toLowerCase()
  .replace(/ /g, "")
  .split("")
  .reverse()
  .join("");

 if (input === inputClone) {
  return true;
 } else {
  return false;
 }
}

console.log(checkPalindrome(input));
