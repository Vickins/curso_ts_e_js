/*
Objetivo:
Criar uma tela que mostra as informacoes do número

Deve conter:
Seu número é {X}. (Com h1 tag)
Raiz quadrada é {X}
{X} é inteiro: {X}
É NaN: {X}
Arredondado para baixo: {X}
Arredondado para cima: {X}
Com duas casas decimais: {X}

------------
Todas as respostas devem ser em negrito e exiber atraves do innerHTML
*/

const numero = Number(prompt('Digite um número'));
const numeroTitulo = document.getElementById('numero-titulo').innerHTML = numero;

// --- COMECO ---
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Raiz quadrada é <strong>${numero ** (1/2)}</strong></p>`;
texto.innerHTML += `<p>${numero} é inteiro: <strong>${Number.isInteger(numero)}</strong></p>`;
texto.innerHTML += `<p>É NaN: <strong>${Number.isNaN(numero)}</strong></p>`;
texto.innerHTML += `<p>Arredondado para baixo: <strong>${Math.floor(numero)}</strong></p>`;
texto.innerHTML += `<p>Arredondado para cima: <strong>${Math.ceil(numero)}</strong></p>`;
texto.innerHTML += `<p>Com duas casas decimais: <strong>${numero.toFixed(2)}</strong></p>`;