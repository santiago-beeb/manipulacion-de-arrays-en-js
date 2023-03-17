/* El método includes() determina si una array incluye un determinado elemento, devuelve true o false según corresponda. */

const pets = ["cat", "dog", "bat"];

let conFor = false;
for (let index = 0; index < pets.length; index++) {
  const element = pets[index];
  if (element === "bat") {
    conFor = true;
    break;
  }
}
console.log("🚀 ~ file: 11-includes.js:6 ~ conFor:", conFor);

const include = pets.includes("bat");
console.log("🚀 ~ file: 11-includes.js:16 ~ include:", include);
