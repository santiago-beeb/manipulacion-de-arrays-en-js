//for each con un ciclo for
const letter = ['a','b','c'];

for (let index = 0; index < letter.length; index++) {
  const element = letter[index];
  console.log('ciclo for',element);
}

//for each con metodos de arrays
letter.forEach(item => console.log('forEach',item));

