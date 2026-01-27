/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.80 de altura e seu IMC é de 25.925925925925924
Luiz Otávio nasceu em 1996
*/

const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;
let imc; // Índice de Massa Corporal = peso / (altura * altura)
let anoNascimento; 


imc = peso / (alturaEmM * alturaEmM);
anoNascimento = 2026 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg');
console.log('tem ' + alturaEmM + ' de altura e seu IMC é de ' + imc);
console.log(`${nome} nasceu em ${anoNascimento}`);