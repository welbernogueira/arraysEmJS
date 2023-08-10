const arr = [
  "Frodo",
  "Sam",
  "Merry",
  "Pippin",
  "Gandalf",
  "Aragorn",
  "Legolas",
  "Gimli",
];
console.log(arr);

// Adicionar elementos
// Push

let tamanho = arr.push("Boromir");
console.log(arr);
console.log(tamanho);

// unshift

tamanho = arr.unshift("Teste");
console.log(arr);
console.log(tamanho);

// remover elementos do final do array
//pop

let ultimoElemento = arr.pop();
console.log(arr);
console.log(ultimoElemento);

// remover elementos no começo do array
//shift

ultimoElemento = arr.shift();
console.log(arr);
console.log(ultimoElemento);

//pesquisar por um elemento no array
//includes

const inclui = arr.includes("Gandalf");
console.log(inclui);

//indexOf - indica em qual índice o array está posicionado

const indice = arr.indexOf("Gandalf");
console.log(indice);

//cortar e concatenar arrays
//slice

const hobbits = arr.slice(0, 4);
const outros = arr.slice(-4);
console.log(arr);
console.log(hobbits);
console.log(outros);

//concatenar arrays
//concat

const sociedade = hobbits.concat(outros, "Boromir");
console.log(sociedade);

//substituir de elementos dos arrays
//splice

const elementosRemovidos = sociedade.splice(indice, 1, "Banana");
console.log(sociedade);
console.log(elementosRemovidos);

// Iterar sobre os elementos
for (let indice = 0; indice < sociedade.length; indice++) {
  const elemento = sociedade[indice];
  console.log(elemento + " se encontra na posição " + indice);
}
