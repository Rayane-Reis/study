// retorne a soma do dobro de todos os pares 
// -> filtrar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const par = numeros.filter(function(valor){
    if (valor % 2 === 0) return valor
});
console.log(par);

const dobro = par.map(function(valor){
    return valor * 2;
});
console.log(dobro);

const total = dobro.reduce(function(acumulador,valor){
   return acumulador + valor;
}, 0);
console.log(total);

// RESOLUÇÃO DO VIDEO -> PODEMOS ENCADEAR UMA FUNÇÃO NA OUTRA PARA NÃO CRIAR DIVERSAS VÁRIAVEIS

// mas parabéns rayyy sua lógica está certa, somente reduzimos o código para arrow function e encadeamos uma função na outra 

const pares = numeros.filter(valor => valor % 2 === 0)
.map(valor => valor * 2)
.reduce ((acumulador,valor) => acumulador + valor); // nesse caso precisamos manter os parenteses por que são dois parâmetros


console.log(pares);

