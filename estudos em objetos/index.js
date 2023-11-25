// objetos 

// posso alterar o valor da array mas não posso REATRIBUIR o valor utilizando novamente o sinal de igual e o nome da constante novamente 

/* ISSO PODE, POIS ESTOU ALTERANDO OS VALORES DENTRO DO ARRAY COMO ARRAY[0] = ... VEJA O EXEMPLO A SEGUIR 

 array.push(4);
 array[0] = 'Luiz';
 console.log(array);

 O QUE EU NÃO POSSO É FAZER É  array = 'outra'; - MAS SE FOSSE LET PODERIA, PORÉM COMO É UMA CONSTANTE NÃO PODE 
*/ 

// QUANDO CRIO UM OBJETO É UTILIZADO CHAVES - {}

const pessoa01 = {
   //atributos como nome ...
   nome: 'Ray',
   sobrenome: 'Reis',
   idade: 18,

   // quando eu quero que a pessoa 01 execute uma fala 
   fala(){
    
    // THIS SIGNIFICA = ESSE 
    console.log(`A minha idade atual é ${this.idade}`)
   },

   incrementarIdade(){
    this.idade ++ // somando mais um 
   }
   
};

// verificando a função
pessoa01.fala();
pessoa01.incrementarIdade(); // aumenta mais um ano na idade 
pessoa01.fala();
pessoa01.incrementarIdade(); // aumenta mais um ano na idade 
pessoa01.fala();
pessoa01.incrementarIdade(); // aumenta mais um ano na idade 
pessoa01.fala();

// para acessar o nome da pessoa basta colocar o titulo e o atributo
pessoa01.nome
console.log(pessoa01.nome)

// CRIANDO UMA FUNCTION 

function criaPessoa(nome,sobrenome,idade){
    return {
        nome,sobrenome,idade
    };
}

// ENVIANDO VALORES PARA O PARAMETRO, OU SEJA, UM ARGUMENTO
// ARGUMENTO É O VALOR PASSADO PARA O PARÂMETRO 
const pessoa1 = criaPessoa('Ray','Reis',18);
const pessoa2 = criaPessoa('vitor','Reis',18);

console.log(pessoa1.nome, pessoa2.nome);

