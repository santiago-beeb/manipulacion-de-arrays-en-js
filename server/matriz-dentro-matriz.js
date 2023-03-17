const matriz = [
  0,
  [1, 2, 3],
  [4, 5, [6, 7, 8, [9, 10]]],
  [[11, 12, [13, 14], 15], 16],
];

function aplanarMatriz(matriz) {
  let array = [];
  for (element of matriz) {
    if (Array.isArray(element)) {
      array = array.concat(aplanarMatriz(element));
    } else {
      array.push(element);
    }
  }
  return array;
}
console.log(aplanarMatriz(matriz));
