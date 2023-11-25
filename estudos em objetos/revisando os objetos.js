// string literal '', "",``
// quando utilizamos o literal jogamos o valor direto
// o objeto literal é feito pelas {} chaves 
// o objeto é formado por um par chave e objeto exemplo: nome: 'Luiz'


// literal

const pessoa = {
    nome: 'Rayane',
    sobrenome: 'Reis'
};

// acessando por notação de ponto
// console.log(pessoa.nome); 

// ouuuu acessar por conchetes, podemos ter um acesso mais dinÂmico
// console.log( pessoa ['sobrenome']);

// construtor do objeto
const pessoa1 = new Object();
pessoa1.nome = 'gatinha';
pessoa1.sobrenome = 'eu sei';
pessoa1.idade = 19;
pessoa1.dizerOi = function(){
    return (`heyy ${this.nome}, seja bem vinda`)
};
pessoa1.getDataNascimento = function (){
    const data = new Date();
    return data.getFullYear() - this.idade;
};
console.log (pessoa1.dizerOi());
console.log (pessoa1.getDataNascimento());

for (let chave in pessoa1){
    console.log(pessoa1[chave]); // ver o valor da chave
}

delete pessoa1.nome; // apagando a chave de algum objeto
// console.log(pessoa1); 

// objetos podem receber métodos que são funções que estão dentro do objeto que executam ações

// uma factory function 

const dog = {
    nome: 'Scott',
    raça: 'Maltês',
    cor: 'branco',
    porte:'pequeno',
    late: function(){
        return('auauau')
    }
}

// acessando com a notação de ponto
console.log(dog.nome);
// acessando com a notação de conchetes
console.log(dog['raça']);
// acessando a função
console.log(dog.late()); 

// factory function

function auau (nome,raça,cor,porte){
   return {
    nome,
    raça,
    cor,
    porte,
    get latir(){ // o get deixa ele como um método então na hora de chamar não precisamos chamar como se fosse uma função
        return 'auuuuuu auuuu';
    }
   };
}
const dog1 = auau('scott','maltÊs','white','small');
console.log(dog1.latir);

// constructor function 
// legal para quando precisamos criar muitos usuarios

function Dog(nome,raça,cor,porte){
    this.nome = nome;
    this.raça = raça;
    this.cor = cor;
    this.porte = porte;
    Dog.Latir = function(){
        return 'half half'
    }
}

const Dog1 = new Dog('scott','shitzu','pretin','médio',);
console.log(Dog.Latir());
console.log(Dog1);

Dog1.nome = 'nénem da mamãe'; // podemos alterar o método do valor da variavel

// mas se caso queira travar, e nao deixar ninguém alterar esse valor podemos fazer: -> Object.freeze(p1); travando o usuario p1 para que ele não seja alterado, se quiser travar o objeto todo, podemos fazer a mesma coisa só que com o this Object.freeze(this); logo após isso não podemos alterar mais nada na chave do objeto, isso também funciona com array

console.log(Dog1);
// o this faz a referência para quem chamou ele
// para entender quando usamos uma função construtora é necessário a função ser iniciada com letra maiuscula e obrigatorio a utilização do new para criar novas pessoas, já na factory jogamos o valor direto de forma mais intuitiva 

// o que a palavra new faz é criar um objeto vazio e atrela o this a ela, e o this vai mudar de pessoa para pessoa 

// a diferença entre as duas funções é 







