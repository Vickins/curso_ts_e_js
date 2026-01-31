window.alert('Mensagem de alerta!'); // retorna undefined
window.confirm('Mensagem de confirmação') ; // retorna true ou false
window.prompt('Mensagem de prompt'); // retorna o valor digitado ou null\

const confirma = window.confirm('Deseja realmente apagar?');
console.log(confirma);

let num1 = window.prompt('Digite o primeiro número:');
let num2 = window.prompt('Digite o segundo número:');
console.log(num1 + num2); // concatena os valores como string

num1 = parseFloat(num1);
num2 = parseFloat(num2);
console.log(num1 + num2); // soma os valores como números