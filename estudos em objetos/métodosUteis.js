// objetos e arrays são valores passado por referência 

const product = {
    nome: 'rayane',
    altura: 1.7
};

product.nome = 'programadora'
const copiandoPorReferencia = product; // nesse caso alterando o valor do objeto original também altera a constante que recebe esse objeto, pois ambas variaveis apontam para o mesmo local na memória  

console.log(product);
console.log(copiandoPorReferencia);

// para copiar o valor e ele não apontar para o mesmo local na memória que a constante original basta usar o rest operator 

const copiandoFixo = {
    ...product, // aqui eu estou copiando o objeto
    peso: 55, //adcionando chave a mais 
    CuravaturaDocabelo: 'cacheado'
};
copiandoFixo.nome = 'linda';
console.log(copiandoFixo);

// utilizando o método assing para copiar um objeto

// nesse caso usamos a chave vazia e logo em seguida o nome do objeto que queremos copiar

copiandoFixo2 = Object.assign({}, copiandoFixo, {
    hobbie: 'study', // ainda posso criar novos objetos dentro dele 
    FavoritSong: 'i hate you i love you',
}); 
console.log(copiandoFixo2);

// se você precisar pegar só uma propriedade do objeto pode criar manualmente ex:

const Reis = {nome: product.nome,
sobrenome: 'reis'};
console.log(Reis);


// já vimos 
// Object.defineProperty -> define uma propriedade 
// Object.defineProperties -> define várias propriedades

// Object.keys -> retorna as chaves 
console.log(Object.keys(product));

//Object.values -> iremos ver somente os valores
console.log(Object.values(product));

//Object.entries -> iremos vizualizar um array com a chave e o valor 
console.log(Object.entries(product));
console.log('ver o de cimaa');

// Object.freeze -> congela o objeto
Object.freeze(Reis); 
Reis.sobrenome = 'silva'; // como está congelado não podemos alterar




//getOWNPropertyDescriptor -> vizualiza a descrição que é a propriedade que foram definidas em Object.defineProperty, retorna as propriedades

Object.defineProperty(product, 'nome',{
    value: 'Ray',
    writable: false,
    configurable: false
})

product.nome = 'gatinha', // aqui não alterou pois utilizei writable
console.log(Object.getOwnPropertyDescriptor(product , 'nome' ));



