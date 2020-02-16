"use strict";

let ammount = prompt(
 `Introduce un importe en euros para cambiar a dólares y los dólares a yenes`
);

async function change() {
 // Cálculo cambio euro dólar
 const changeEurUsd = await fetch(
  "https://api.exchangerate-api.com/v4/latest/EUR"
 )
  .then(response => {
   return response.json();
  })
  .then(data => {
   return data.rates.USD;
  });
 // Cálculo cambio dólar yen
 const changeUsdJpy = await fetch(
  "https://api.exchangerate-api.com/v4/latest/USD"
 )
  .then(response => {
   return response.json();
  })
  .then(data => {
   return data.rates.JPY;
  });

 // Saco por consola la información de los resultados
 console.log(`Tus ${ammount} euros son ${changeEurUsd * ammount} dólares`);
 console.log(
  `Tus ${changeEurUsd * ammount} dólares son ${changeEurUsd *
   ammount *
   changeUsdJpy} yenes`
 );
}

console.log(change());
