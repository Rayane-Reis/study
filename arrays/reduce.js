// reduzir um array em um unico elemento

// a diferença na sintaxe entre esse e o demais é que esse tem o acumulador 

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// USO ORIGINAL DO ARRAY

// somar numeros 
const total = numeros.reduce(function(acumulador, valor, indice,array){
    acumulador += valor;
    return acumulador;
}, 0); // valor inicial do acumulador, mas se você não mandar ele aqui logo o valor inicial vai ser o primeiro indice do array

console.log(total);

// somar só os impares 
const original = numeros.reduce(function(acumulador, valor){
    if (valor % 2 !== 0) acumulador += valor;
    return acumulador;
}, 0);
console.log(original);

// Retorne a pessoa mais velha 

const pessoas = [
    {nome: 'Rayane', idade: 19},
    {nome: 'Isa', idade: 18},
    {nome: 'jeh', idade: 39},
    {nome: 'ana', idade: 69},
    {nome: 'rosa', idade: 71},
];

const velho = pessoas.reduce(function(acumulador,valor,indice){
    if(acumulador.idade > valor.idade)  return acumulador
    return valor;
});
console.log(velho);

// o acumulador ->  é um valor acumulando total

// Retorne um array com os pares, você pode e deve fazer com (Filter), pois ele retorna todo o valor e isso é apenas uma demonstração

const par = numeros.reduce(function(acumulador,valor){
    if (valor % 2 === 0) acumulador.push(valor);
    return acumulador
}, []); // -> retornando um array
console.log(par);

// ESTUDAR MAIS SOBRE


