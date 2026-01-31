/**
 * Aritmeticos
 * + Adiçao / Concatenaçao
 * - Subtraçao
 * * Multiplicaçao
 * / Divisao
 * ** Potenciaçao
 * % Resto da Divisao
 * ++ Incremento
 * -- Decremento
 * 
 * Ordem de Precedencia
 * 1º ()
 * 2º **
 * 3º * / %
 * 4º + -
 */

const num1 = 5;
const num2 = 10;
console.log(num1 + num2); // Adiçao = 15
console.log(num1 - num2); // Subtraçao = -5
console.log(num1 * num2); // Multiplicaçao = 50
console.log(num1 / num2); // Divisao = 0.5
console.log(num1 ** num2); // Potenciaçao = 9765625
console.log(num2 % num1); // Resto da Divisao = 0
console.log(++num1); // Incremento = 6
console.log(--num2); // Decremento = 9

const passo = 2;
let contador = 0;

contador = contador + passo; // contador = 0 + 2 = 2
contador = contador + passo; // contador = 2 + 2 = 4

contador += passo; // contador = 4 + 2 = 6
contador += passo; // contador = 6 + 2 = 8

contador -= passo; // contador = 8 - 2 = 6
contador -= passo; // contador = 6 - 2 = 4

contador *= passo; // contador = 4 * 2 = 8
contador /= passo; // contador = 8 / 2 = 4

contador **= passo; // contador = 4 ** 2 = 16
contador %= passo; // contador = 16 % 2 = 0

// NaN - Not a Number é um valor que indica que nao é um numero
console.log(10 / 'a'); // NaN
console.log(10 * 'a');; // NaN
console.log(10 - 'a');; // NaN
console.log(10 + 'a');; // 10a (concatenaçao)

const n1 = 10;
const n2 = '5';

console.log(n1 + n2); // 105 (concatenaçao)
console.log(n1 - n2); // 5
console.log(n1 * n2); // 50
console.log(n1 / n2); // 2

