/*concat consiste en crear un nuevo array a partir de la unión de otros valores o arrays especificados como argumentos. */
const elements = [1, 2, 1, 2];
const othersElements = [3, 3, 4, 4];

const newArray = [...elements];
for (let index = 0; index < othersElements.length; index++) {
  const element = othersElements[index];
  newArray.push(element);
}
console.log("🚀 ~ file: 13-concat.js:5 ~ ciclo for:", newArray);

//concat
console.log("metodo concat", elements.concat(othersElements));
