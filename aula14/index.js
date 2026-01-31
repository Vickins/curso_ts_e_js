let num1 = 1; // number
let num2 = 2.5; // number

console.log(num1 + num2); // 3.5 - number
console.log(num1.toString() + 2); // 12 - string
console.log(typeof num1); // number | Nao foi alterada

num1 = num1.toString(); // '1' - string

num1 = 10.5789551255546 // number
console.log(num1); // 10.5789551255546 - number
console.log(num1.toFixed(2)); // 10.58 - string | Arrendondou o número e colocou 2 casas decimais
console.log(num1.toFixed(4)); // 10.5790 - string | Arrendondou o número e colocou 4 casas decimais

console.log(Number.isInteger(num1)); // false | Não é um número inteiro
console.log(Number.isInteger(num2)); // true | É um número inteiro

let temp = num1 * 'Olá'; // string
console.log(temp) // NaN | Não é um número
console.log(Number.isNaN(temp)); // true | É NaN

temp = num1 * '5'; // number
console.log(temp); // 52.894775627773
console.log(Number.isNaN(temp)); // false | Não é NaN

// IEEE 754-2008 Double-Precision Floating-Point Format (64 bits)

num1 = 0.7; // number
num2 = 0.1; // number
console.log(num1 + num2); // 0.7999999999999999 | Não é preciso

num1 += num2; // 0.8 | Valor preciso (Valor real: 0.7999999999999999)
num1 += num2; // 0.9 | Valor preciso (Valor real: 0.8999999999999999)
num1 += num2; // 1.0 | Valor preciso (Valor real: 0.9999999999999999)
console.log(num1) // 0.9999999999999999 | Náo é preciso

num1 = num1.toFixed(2); // 1.00 - string
console.log(num1); // 1.00 
console.log(Number.isInteger(num1)); // false
num1 = parseFloat(num1)
console.log(num1); // 1
console.log(Number.isInteger(num1)); // true

// Outra forma

num1 = 0.7; // number
num2 = 0.1; // number

num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.8
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.9
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 1

console.log(num1); // 1
console.log(Number.isInteger(num1)); // true