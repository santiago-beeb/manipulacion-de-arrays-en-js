const letters = ["a", "b", "c"];

/* const newArray = [];
for (let index = 0; index < letters.length; index++) {
  const element = letters[index];
  newArray.push(element + "++");
} */

//vs

const newArray = letters.map(i => i + '++')

console.log('original', letters);
console.log('nuevo', newArray);
