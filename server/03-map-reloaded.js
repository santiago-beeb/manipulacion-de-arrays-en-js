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
console.log(orders);
const rta = orders.map((item) => {
  return item.total;
});
console.log(rta, "totales");

const rta3 = orders.map((item) => {
  return {
    ...item,
    tax: 0.2,
  };
});
console.log("🚀 ~ file: 03-map-reloaded.js:42 ~ rta3 ~ rta3:", rta3)
console.log("🚀 ~ file: 03-map-reloaded.js:25 ~ orders:", orders);
