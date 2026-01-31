// Funcionamento de strings em JavaScript

// Declaração de strings
'Esta é uma string com aspas simples';
"Esta é uma string com aspas duplas";
`Esta é uma string com template literals`;

'Outra \'string\' com aspas simples e escape';
"Outra \"string\" com aspas duplas e escape";
`Outra \`string\` com template
literals e uso de 
múltiplas linhas`;


// Indices e propriedades das strings
//               01234567  | índices
let umaString = 'Um texto';

console.log(umaString[0]); // U - primeira letra
console.log(umaString[5]) // t - sexta letra
console.log(umaString.charAt(6)); // o - sétima letra
console.log(umaString.concat(' em um lindo dia')); // concatenação de strings com método concat
console.log(umaString + ' em um lindo dia'); // concatenação de strings com operador +
console.log(`${umaString} em um lindo dia`); // concatenação de strings com template literals
console.log(umaString.indexOf('texto')); // índice inicial da palavra 'texto' = 3
console.log(umaString.indexOf('z')); // índice de uma letra que não existe na string = -1
console.log(umaString.lastIndexOf('t')); // índice da última ocorrência da letra 't' = 6
console.log(umaString.match(/[a-z]/g)); // retorna um array com todas as letras minúsculas
console.log(umaString.search(/x/)); // índice da primeira ocorrência da letra 'x' = 5
console.log(umaString.replace('Um', 'Outro')); // substitui 'Um' por 'Outro'
console.log(umaString.length); // tamanho da string = 8 (Sempre uma unidade maior que o último índice)

let umaString2 = 'O rato roeu a roupa do rei de Roma.';
console.log(umaString2.replace(/r/g, '#')); // substitui todas as ocorrências de 'r' por '#'
console.log(umaString2.length); // tamanho da string = 36 (Sempre uma unidade maior que o último índice)
console.log(umaString2.slice(2, 6)); // fatia a string do índice 2 ao 5 (6-1) = 'rato'
console.log(umaString2.slice(-5, -1)); // fatia a string dos últimos 5 caracteres = 'Roma'
console.log(umaString2.substring(umaString.length - 5, umaString2.length - 1)); // fatia a string dos últimos 5 caracteres = 'Roma' (Mesma coisa que o slice nesse caso)
console.log(umaString2.split(' ')); // divide a string em um array de strings, usando o espaço como separador = ['O', 'rato', 'roeu', 'a', 'roupa', 'do', 'rei', 'de', 'Roma.']
console.log(umaString2.split('r', 2)) // divive a string em uma array com dois itens, usando R como separador = ['O ', 'ato ']
console.log(umaString2.toUpperCase()) // deixa todas as letras em maiusculas
console.log(umaString2.toLowerCase()) // deixa todas as letras em minusculas