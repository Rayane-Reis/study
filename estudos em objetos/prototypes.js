// função construtora -> pode ser entendida como um molde (classe) que vai instanciar novos objetos

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
   
}


// instancia -> criando novas pessoas que vem dessa função construtora
const pessoa1 = new Pessoa('Rayane', 'Reis ');
const pessoa2 = new Pessoa('Jeane', 'Cruz ');
// const data = new Date();

// console.log(pessoa1);
// console.log(pessoa2);
// console.dir(data);

// protótipo -> modelo ou molde para futuras produções usado para diversos objeto, quando se tem um metodo que faz exatemnte a mesma coisa, criammos isso para armazenar em um local diferente na memória fazendo com que ocupe menos espaço e não fique repetitivo

// Pessoa.prototype.estouAqui = 'hahahah'

// Pessoa.prototype.nomeCompleto = function () {
    // return this.nome + ' ' + this.sobrenome;;
// } // com isso todas as instancias pega esse protótipo

// Todos os objetos tem ukma referencia interna para um protótipo (_proto_) que evem da propriedade PROTOTYPE da função construtora que foi usada para criá-lo (Pessoa.prototype === pessoa1._proto_) e ao tentar acessar um membro no próprio objeto, o motor primeiro vai tentar acessar no próprio objeto e depois a cadeia de protótipo é usada até o topo (null) até encontrar (ou não) tal membro

// cadeia 

// data -> Date.prototype -> Object.prototype

// Procura primeiro no Object.prototype depois no Date.prototype e depois no data, segue abaixo como funciona de acordo com o nosso código

// pessoa1 -> Pessoa.prototype -> Object.prototype


// AULA SEGUINTE -> COMO MANIPULAR OS PROTOTYPES DOS OBJETOS 

// toda função construtora tem o Object.prototypes -> _proto_ atrelado a ela 
const objA = {
    chaveA: 'A'
};

const objB = {
    chaveB: 'B'
};

// _proto_: objA -> para passar o prototype de objB para objA basta:
// nisso eu consigo acessar as propriedades do objA

// explicação seta/ altera o prototype do objB PARA o objA
Object.setPrototypeOf( objB, objA);
console.log(objB.chaveA);

// não é recomendado utilizar __proto__ não mecha se quiser acessar o proto de um objeto utilize a função 

Object.getPrototypeOf(objA); // mostra o prototype do objA

// prototype na função construtora

function Produto (nome,preco){
    this.nome = nome;
    this.preco = preco;
    // não criar métodos na função construtora e sim no seu prototype
}

Produto.prototype.desconto = function (percentual){
    this.preco = this.preco - (this.preco * (percentual)/ 100);
};

Produto.prototype.aumento = function (percentual){
    this.preco = this.preco + (this.preco * (percentual)/ 100);
};

const p5 = new Produto('short', 50);
p5.desconto(100);
p5.aumento(100);

console.log(p5);

const p6 = {
    nome: 'caneca',
    preco: 15
};

Object.setPrototypeOf(p6,p5)

p6.aumento(100);
console.log(p6)

// posso já criar o objeto e já setar o prototype dele

const p7 = Object.create(Produto.prototype)
p7.preco = 10;
p7.aumento(100);
console.log(p7)

// ouuu podemos já setar os atributos para criar uma nova chave e configura-lá

const p8 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value:113
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value:42
    },
});

p8.aumento(10);
console.log(p8)