// Náo pode criar variáveis com palavras reservadas
// Exemplo de palavras reservadas: let, if, console, log, function

// Variáveis precisam ter nomes significativos
let nomeCliente = "João";
console.log(nomeCliente);

// Não pode começar o nome de uma variável com número
// let 1nome = "Maria"; // Errado!
let no1me = "Maria"; // Certo!
console.log(no1me);

// Não pode conter espaços ou traços
// let nome-usuario = "Ana"; // Errado!
let nome_usuario = "Ana"; // Certo!
console.log(nome_usuario);

// Utilizamos camelCase para nomear variáveis
let nomeCompletoDoCliente = "Carlos Silva";
console.log(nomeCompletoDoCliente);

// case-sensitive: nomeCliente e nomecliente são variáveis diferentes
let nomecliente = "Pedro";
console.log(nomeCliente); // Exibe "João" declarado anteriormente
console.log(nomecliente); // Exibe "Pedro" declarado aqui

// Não podemos redeclarar variáveis com let
// let nomeCliente = "Lucas"; // Errado!  
nomeCliente = "Lucas"; // Certo!
console.log(nomeCliente);

// Não utilize var, utilize let ou const
var idade = 30; // Evite usar var
console.log(idade);
const pi = 3.14; // Use const para valores que não mudam
console.log(pi);