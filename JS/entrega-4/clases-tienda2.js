"use strict";

/* Artículos tienda: clase Item que contenga nombre y precio
Un usuario privado añade artículos al carrito
Cuando los artículos entran en el carrito se convierten a un tipo de dato que guarda las
unidades que tiene el usuario en dicho carrito. Se llamará CartItem.
La tienda imprime el tique cuando lo pide el usuario */

const itemNames = ["Camisa", "Pantalon", "Calcetines"];
const itemPrices = [13, 27, 100];

class CartItem {
 constructor(item) {
  this.item = item;
 }
 units = 1;
 increaseItem() {
  this.unit++;
 }
}

class Item {
 constructor(name, price) {
  this.name = name;
  this.price = price;
 }
}

class Inventory {
 allItems = [];
 constructor(names, prices) {
  for (let i = 0; i < names.length; i++) {
   this.allItems.push(new Item(names[i], prices[i]));
  }
 }
}

const myInventory = new Inventory(itemNames, itemPrices);
console.log(myInventory);

class User {
 cart = [];
 constructor(name) {
  this.name = name;
 }
 pay() {}
 // Agregar items al carrito
 addToCart(limit, itemList) {
  for (let i = 0; i < limit; i++) {
   const shopping = Math.round(Math.random() * (itemList.length - 2));
   this.cart.push(new CartItem(itemList[i], shopping));
  }
  return this.cart;
 }
}
const myUser = new User("Manolo");
myUser.addToCart(2, itemNames);
console.log(myUser);
const myCart = myUser.cart;
console.log(myCart);

class Shop {
 invoice = [];
 pay;
 checkout(cart) {
  for (let i = 0; i < cart.length; i++) {
   this.invoice.push(cart[i].item.price * cart[i].shopping);
  }
  this.pay = this.invoice.reduce((currentValue, accumulator) => {
   return currentValue + accumulator;
  });
  return this.pay;
 }
}

const myShop = new Shop();

console.log(`Total compra: ${myShop.checkout(myCart)} euros`);
