
const nomes = ['ray','jeh','maria']; // criando array literal
nomes[2] = 'reis'; //manipulando array

delete nomes[2]; // deletando um nome do array sem deixar buraco ou alterar indices
console.log(nomes);

// podemos cria-lo de outra forma chamado construtor, veja a baixo:
new Array('ray','jeh','maria','scott','cookie');

// o array é valor por referência ex:
const novo = nomes; // logo se terão o mesmo valor dado por referência, se alterar um altera todos 

// Mas por sua vez se utilizarmos o brad que é a mesma coisa do rest, porém ele só copia os valores e ai quando tiver alteração em um não afetará o ondurationchange, veja o exemplo:

const novos = [...nomes];

console.log(nomes.length); // pegar o tamanho do array
// indice começa de 0 e o tamanho de 1

// podemos remover o elemento no final do array ela nos retorna o valor removido e se quiser podemos jogá-lo em uma variavel ex:
nomes.pop();

const removido = nomes.pop();
console.log(nomes,removido)

// Da mesma forma funciona com o shift, só que  shift remove o primeiro elemento desloca os indices para direita

// adicionar coisas no array
nomes.push('Programadora','Linda');
console.log(nomes);

//podemos adicionar no inicio do nosso array, porém mexe no indice
nomes.unshift('joão');
console.log(nomes);

// Adicionar do começo -> unshift -> mexe no indice
// Remover do começo -> shift -> mexe no indice
// Remover do final -> pop 
// Adicionar no final -> push

// fatiar o array

// dividir o arra, o primeiro numero é de onde você quer começar e o ultimo numero onde quer parar, mas temos que colocar um indice a mais para pegar certinho
const fatiar = nomes.slice(1,3);
console.log(novo);

// remover um 
const Fatiar = nomes.slice(1, -1);

// converter a string em um array, onde separamos os elemntos por virgula ou espaços
const name = 'Rayane Gonçalves Reis';

const names = name.split(' ');
console.log(names); 


// fazer o array se tornar uma string

const dogs = ['maltês','scott','neném da mamãe'];
const dog = dogs.join(' '); // o separador será um espaço
console.log(dog); 












