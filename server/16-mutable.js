const products = [
  { title: "Pizza", price: 121, id: "🍕" },
  { title: "Burger", price: 121, id: "🍔" },
  { title: "Hot cakes", price: 121, id: "🥞" },
];
const myProducts = [];
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

const productIndex = products.findIndex((i) => i.id === "🍔");
if (productIndex !== -1) {
  myProducts.push(products[productIndex]);
  products.splice(productIndex, 1);
}
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

const products2 = [
  { title: "Pizza", price: 121, id: "🍕" },
  { title: "Burger", price: 121, id: "🍔" },
  { title: "Hot cakes", price: 121, id: "🥞" },
];

const update = {
  id: "🥞",
  changes: {
    price: 10,
    description: "muy hots",
  },
};
const productIndex2 = products2.findIndex((i) => i.id === update.id);
products2[productIndex2] = {
  ...products2[productIndex2],
  ...update.changes
}
console.log("products", products2);
console.log("-".repeat(10));