let varA = 'A';
let varB = 'B';
let varC = 'C';

/* 
Objetivo, trocas os valores das variáveis

varA  =>  B
varB  =>  C
varC  =>  A
*/

// Minha solução

varA = 'A';
varB = 'B';
varC = 'C';

let temp = varA;
varA = varB;
varB = varC;
varC = temp;

console.log(varA, varB, varC);

// Solução da aula

varA = 'A';
varB = 'B';
varC = 'C';

const varATemp = varA;
varA = varB;
varB = varC;
varC = varATemp;

console.log(varA, varB, varC);

// Solução mais moderna (Destructuring Assignment)

varA = 'A';
varB = 'B';
varC = 'C';

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);