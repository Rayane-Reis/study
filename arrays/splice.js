// a função splice faaz tudo que o pop,push shift e unshift faz, ela mexe no array original assim como pop e push

const nomes = ['Ray','Reis','anne','caramelo','azul'];

// EXPLICAÇÃO IMPORTANTISSIMA A BAIXO
// nomes.splice(indiceAtual, qtdDeletar, adiconarElemento1,adiconarElemento2, adiconarElemento3 )

// para remover o ultimo indice do elemento
const removidos = nomes.splice(3,2); // remover do indice 4, 1 elemento

console.log(nomes, removidos);

// a diferença do negativo e positivo, é que os negativos começam do final é o tamanho da string menos o numero do elemento que você colocou


// para remover até o final
const removido = nomes.splice(3, Number.MAX_VALUE);

// para adicionar a partir de um indice 

const removids = nomes.splice(3,0,'Luiz');
console.log(nomes,removids);

// simular o pop
const remove = nomes.splice(-1,1);

// simular o push 

nomes.splice(nomes.length, 2, 'ray','linda');
console.log(nomes);

// simular shift
const remov = nomes.splice(0,1);


// simular unshift
nomes.splice(0, 0, 'ray','linda');
console.log(nomes);



