//reduce retorna un solo valor
const totals = [1, 2, 3, 4];

let sum = 0;
for (let index = 0; index < totals.length; index++) {
  const element = totals[index];
  sum = sum + element;
}
console.log("🚀 ~ file: 05-reduce.js:5 ~ sum:", sum); //10

//enviar dos parametros, arrow function y el estado inicial, el 0
const total = totals.reduce((sum, element) => sum + element, 0);
console.log("🚀 ~ file: 05-reduce.js:12 ~ total:", total); //10
