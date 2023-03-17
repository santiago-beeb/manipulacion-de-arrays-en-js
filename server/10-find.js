/* Los métodos find y findIndex consisten en encontrar el primer elemento de un array que cumpla con la condición especificada en la función (callback). */
const numbers = [1, 30, 49, 29, 10, 13];

let rta = undefined;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element === 30) {
    rta = element;
    break;
  }
}
console.log("🚀 ~ file: 10-find.js:4 ~ rta:", rta);

const rta2 = numbers.find((item) => item === 30);
console.log("🚀 ~ file: 10-find.js:14 ~ rta2:", rta2);

const products = [
  {
    name: "Pizza",
    price: 12,
    id: '🍕'
  },
  {
    name: "Burger",
    price: 23,
    id: '🍔'
  },
  {
    name: "Hot dog",
    price: 34,
    id: '🌭'
  },
  {
    name: "Hot cakes",
    price: 355,
    id: '🥞'
  },
];

const rta3 = products.find(i => i.id === '🍔')
console.log("🚀 ~ file: 10-find.js:41 ~ rta3:", rta3)
//findIndex = en que posicion del array esta el elemento solicidato
const rta4 = products.findIndex(i => i.id === '🍔')
console.log("🚀 ~ file: 10-find.js:43 ~ rta4:", rta4)
