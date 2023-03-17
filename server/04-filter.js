const words = ["spray", "elites", "limit", "apple", "exuberant"];
console.log("🚀 ~ file: 04-filter.js:2 ~ words:", words);

const newArray = [];
for (let index = 0; index < words.length; index++) {
  const item = words[index];
  if (item.length >= 6) {
    newArray.push(item);
  }
}
console.log("🚀 ~ file: 04-filter.js:8 ~ newArray:", newArray);

//filter genera un nuevo array con las condiciones dadas en el filtro
const rta = words.filter((item) => item.length >= 6);
console.log("🚀 ~ file: 04-filter.js:14 ~ rta:", rta);

const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];

const done = orders.filter((item) => item.delivered && item.total >= 100);
console.log("🚀 ~ file: 04-filter.js:42 ~ done:", done);


const searchName = (query) => {
  return orders.filter(item => {
    return item.customerName.toString()
          .toLowerCase()
          .includes(query.toLowerCase())
  })
}
console.log(searchName('a'));
