// Não podemos criar constantes com palavras reservadas
// Exemplo de palavras reservadas: let, if, console, log, function

// Constantes precisam ter nomes significativos
const nomeDoCliente = "João Silva";

// Náo podemos começar o nome de uma constante com um número
// const 1cliente = "Maria"; // Incorreto
const cliente1 = "Maria"; // Correto

// Näo podem conter espaços ou traços
// const nome do cliente = "Pedro"; // Incorreto
// const nome-do-cliente = "Ana"; // Incorreto
const nome_do_cliente = "Pedro"; // Correto

// Utilizamos camelCase para nomear constantes compostas
const nomeCompletoDoCliente = "Carlos Eduardo";

// case-sensitive: nomeDoCliente e nomedocliente são diferentes
const nomedocliente = "Fernanda"; // Diferente de nomeDoCliente

// Não pode modificar o valor de uma constante
const idadeCliente = 30;
// idadeCliente = 31; // Isso causaria um erro

// Não utiliza var, sempre use const ou let
const nome = 'João'

// --- 

// String = texto     number = número

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
console.log(resultado); // 50
const resultadoDuplicado = resultado * 2;
console.log(resultadoDuplicado); // 100

let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log(resultadoTriplicado); // 155

console.log(typeof primeiroNumero); // number

const primeiroNumeroString = "5";
console.log(typeof primeiroNumeroString); // string

console.log(primeiroNumero + segundoNumero); // 15
console.log(primeiroNumeroString + segundoNumero); // 510

console.log(typeof primeiroNumeroString + segundoNumero); // string10
console.log(typeof (primeiroNumeroString + segundoNumero)); // string
console.log(typeof (primeiroNumero + segundoNumero)); // number



// + - * /