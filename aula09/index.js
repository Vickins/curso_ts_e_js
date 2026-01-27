// String, Number, undefined, null, Boolean, Symbol

const nome = 'Luiz';  // String 
const nome1 = "Luiz"; // String
const nome2 = `Luiz`; // String
const num1 = 10; // Number
const num2 = 10.52; // Number
let nomeAluno; // Undefined = não aponta para local nenhum na memória
const sobrenomeAluno = null; // Nulo -> não aponta para local nenhum na memória
const aprovado = true; // Boolean = true ou false (lógico)

const a = [1, 2]; // Array = Vetor
const b = a;
console.log(b); // [1, 2]

b.push(3);
console.log(a, b); // [1, 2, 3] [1, 2, 3] - Array e Object são tipos referênciados

let c = 2;
const d = c;
console.log(c, d); // 2 2

c = 3;
console.log(c, d); // 3 2 - tipos primitivos são copiados