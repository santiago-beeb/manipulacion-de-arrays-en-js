/* join une los elementos del array, mediante una separación, y retorna un string.  */
const elements = ["fire", "air", "water"];

let rta = "";
const separator = "----";
for (let index = 0; index < elements.length; index++) {
  const element = elements[index];
  rta = rta + element + separator;
}
console.log("🚀 ~ file: 12-join.js:4 ~ ciclo for:", rta);

//join
console.log("metodo join", elements.join("----"));

/* split es lo contrario que el método join, consiste en separar un string en substrings, indicando un valor a separar. Este método retornará un array de los elementos separados. */
//split
const title = "titulo del libro escrito por J.K";
//split separa las palabras que tengan espacio, join las vuelve a unir ahora con un guion
console.log("metodo split", title.split(" ").join("-").toLocaleLowerCase());
