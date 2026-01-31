/*
  Exercício Aula 11
  
  Obtenha dois valores do usuário através de prompts.
  Obtenha o resultado da soma desses dois valores na variavel "resultado".
  Exiba o resultado através de um alert.

*/

const num1 = parseFloat(window.prompt('Digite o primeiro número:'));
const num2 = parseFloat(window.prompt('Digite o segundo número:'));
const resultado = num1 + num2;
window.alert('O resultado da soma é: ' + resultado);