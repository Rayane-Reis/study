// map -> um array do mesmo tamanho que o original mas com valores alterados

// map altera o valor, criando um novo array, vai retornar só que com um valor diferente 

// funciona como o filter 

// dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const dobro = numeros.map(valor => valor * 2);
console.log(dobro);

const pessoas = [
    {nome: 'Rayane', idade: 19},
    {nome: 'Isa', idade: 18},
    {nome: 'jeh', idade: 39},
    {nome: 'ana', idade: 69},
    {nome: 'rosa', idade: 71},

];

// Para cada elemento retorne apenas uma string com o nome da pessoa

const nome = pessoas.map(valor => valor.nome );
console.log(nome);

// remova apenas a chave nome do objeto
const idades = pessoas.map(obj => ({idade: obj.idade})); // é necessário envolvê-lo em parenteses para mantê-lo como um objeto e arrow function
console.log(idades);

//Adicione uma chavee id em cada  objeto (id), utilizamos através do indice, mas nesse caso ele altera o valor original do objeto, pois pegamos o valor por referência
const id = pessoas.map(function(obj,indice){
    obj.id = indice;
    return obj;
});

console.log(id);

// se caso não quiser mexer no original é nessecessário criar uma constante para copiar o valor, e para isso usamos o rest operator 

const ids = pessoas.map(function(obj,indice){
    const newPerson ={ ...obj};
    newPerson.id = indice;
    return newPerson;
});

console.log(ids);
console.log(pessoas);


