const matriz = [
  [1, 2, 3],
  [1, 2, 3, [1,[5,6[5,6,9]], 6, 5], [6, 5, 4]],
  [1, 2, 3],
];

const newArray = [];
for (let i = 0; i < matriz.length; i++) {
  const array = matriz[i];
  for (let j = 0; j < array.length; j++) {
    const element = matriz[i][j];
    newArray.push(element);
  }
}
console.log("🚀 ~ file: 14-flat.js:8 ~ con for:", newArray);

console.log("con flat", matriz.flat(2));
