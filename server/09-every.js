//every valida que todos los elementos del array cumpla con una condicion
const numbers = [1, 30, 39, 29, 10, 13];

let rta = true;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element >= 40) {
    rta = false;
  }
}
console.log("🚀 ~ file: 09-every.js:4 ~ rta:", rta);

const rta1 = numbers.every((item) => item <= 40);
console.log("🚀 ~ file: 09-every.js:13 ~ rta1:", rta1);

const team = [
  {
    name: "Nicolas",
    age: 12,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 2,
  },
  {
    name: "Santiago",
    age: 14,
  },
];

const menores = team.every((i) => i.age < 15);
if (menores === false) {
  console.log("no se permiten mayores de 15");
}
