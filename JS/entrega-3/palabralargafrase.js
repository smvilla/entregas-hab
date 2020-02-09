"use strict";

let input = prompt(
 `Inserta una frase y te muestro la palabra más larga que contiene`
);

function longWord() {
 input = input.toLowerCase().split(" ");

 const inputOrdered = input.sort((a, b) => b.length - a.length);
 return inputOrdered[0];
}

console.log(longWord(input));
