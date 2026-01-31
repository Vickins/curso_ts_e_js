let num1 = 9.54578;
console.log(Math.floor(num1)); // 9 | Arredonda para baixo
console.log(Math.ceil(num1)); // 10 | Arredonda para cima
console.log(Math.round(num1)); // 10 | Arredonda para o número inteiro mais próximo

console.log(Math.max(1, 2, 3, 4, 5, -10, -50, 1500, 9, 8, 7, 6)); // 1500 | Retorna o maior valor
console.log(Math.min(1, 2, 3, 4, 5, -10, -50, 1500, 9, 8, 7, 6)); // -50 | Retorna o menor valor

console.log(Math.random()); // X(number) | Retorna um número aleatório maior que 0 e menor que 1

const aleatorio = Math.random() * (10 - 5) + 5; // Retorna um número aleatório maior que 5 e menor que 10
console.log(aleatorio); // x(number)
console.log(Math.round(aleatorio)); // x(number) | Arredonda o número aleário para o número inteiro mais próximo, agora podendo ser 5 e 10

console.log(Math.PI); // 3.141592653589793 | Constante PI

console.log(Math.pow(2, 10)); // 1024 | 2 elevado a potência 10
console.log(2 ** 10); // 1024 | Mesma coisa do que Math.pow

num1 = 9;
console.log(num1 ** (1/2)); // 3 | Raiz quadrada
console.log(num1 ** 0.5); // 3 | Raiz quadrada

console.log(100 / 0); // Infinity | Não da erro ao dividir por zero, retorna infinito
console.log(100 / -0); // -Infinity | Infinito também pode ser negativo
console.log(1e400); // Infinity | Números grandes se tornam infinitos (a letra 'e' indica quantos zeros ficam apos o número
console.log(100 / 0.e1+1) // Infinity | Números pequenos também se tornam infinitos