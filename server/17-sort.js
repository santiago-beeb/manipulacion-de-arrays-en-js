//sort es mutable y consiste en ordenar un array a partir de los valores en asci
const months = ["March", "Jan", "Feb", "Dec"];
//ordena los meses por orden alfabetico
months.sort();
console.log("🚀 ~ file: 17-sort.js:2 ~ months:", months);

const numbers = [1, 30, 4, 21, 100000];
//ordena los numeros de menor a mayor
//de mayor a menor => numbers.sort((a,b) => b - a)
numbers.sort((a, b) => a - b);
console.log("🚀 ~ file: 17-sort.js:8 ~ numbers:", numbers);

const words = [
  "réservé",
  "premier",
  "communiqué",
  "café",
  "adieu",
  "éclair",
  "banana",
];
//orden alfabetico
words.sort();
console.log("🚀 ~ file: 17-sort.js:23 ~ words:", words);

const orders = [
  {
    customerName: "Nicolas",
    total: 600,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 1840,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];
orders.sort((a, b) => b.total - a.total);
console.log("🚀 ~ file: 17-sort.js:49 ~ orders:", orders);

const array = ['a', 'bb', 'ccc']; 
const rta = array.map(item => item.length);
console.log("🚀 ~ file: 17-sort.js:52 ~ array:", rta)