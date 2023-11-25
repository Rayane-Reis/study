// Filter -> filtrar Array -> sempre retorna um array com a mesma ou menos quantidade de elementos do array original, ex: numeros maiores que 10 ELE NÃO MEXE EM NADA SOMENTE RETORNA

// Map -> modificar  Array
// reduce -> reduzir Array

// Retorne os numeros maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// função de callback 

// quando temos uma condição avaliando true ou false basta só retornar a própria função

const numerosFiltrados = numeros.filter(valor => valor > 10
);
console.log(numerosFiltrados);

const pessoas = [
    {nome: 'Rayane', idade: 19},
    {nome: 'Isa', idade: 18},
    {nome: 'jeh', idade: 39},
    {nome: 'ana', idade: 69},
    {nome: 'rosa', idade: 71},

];

// retorne as pessoas que tem o nome com 5 letras ou  mais 
const pessoas2 = pessoas.filter(valor =>  valor.nome.length >= 5
);
// console.log(pessoas2);

// retorne as pessoas com mais de 50 anos 
const idoso = pessoas.filter(valor => valor.idade >= 50);
// console.log(idoso);

// retorne as pessoas cujo nome termina com a 
const name = pessoas.filter(valor => valor.nome.toLowerCase().endsWith ('a'));
console.log(name);


