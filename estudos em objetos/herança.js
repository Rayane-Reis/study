// Abstrair coisas em comum e depois especializar para diminuir meu código

// O termo "Herança" é muito usado para descrever que as características de um objeto são passadas para outro objeto.

// a herança é legal para otimizar o código, e reutilizar outras pequenas funções, além de que você pode ainda ampliar 

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco
}

Produto.prototype.aumento = function (quantia){
    this.preco += quantia;
};
Produto.prototype.desconto = function (quantia){
    this.preco -= quantia;
};

// especializar a função produto
function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco) // aqui eu linquei a função Camiseta com a função produto, mas cada uma tem seu prototype, logo se eu chamar camiseta.aumento(10) vai dar 'camiseta.aumento is not function', pois ele não tem o mesmo prototype que na função Produto

    // como eu trabalhei com herança e na função produto não tem o atributo cor, eu preciso criá-lo

    this.cor = cor;
}

// fazer com que a camiseta tenha o mesmo prototype que a função produto, e apartir daí modificar o prototype somente de camiseta, veja como fazer 

Camiseta.prototype = Object.create(Produto.prototype); // criando um objeto vazio e setando o prototype do produto, mas agora o construtor seria produto e não camiseta, logo ele alteraria em ambas funções, para isso temos que chamar de volta o construtor da função logo abaixo de setar o prototype

Camiseta.prototype.constructor = Camiseta;

// você pode também sobrecrever um prototype, exemplo vou aumentar em porcentagem e não em numero, para isso basta:

Camiseta.prototype.aumento = function (percentual){
    this.preco = this.preco + (this.preco * (percentual / 100))
}

const camiseta = new Camiseta ('Regata', 7.5, 'black');
camiseta.aumento(100)
console.log(camiseta);

function Caneca (nome, preco, material) {
    Produto.call(this,nome,preco);
    this.material = material;
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const caneca = new Caneca ('coding', 13 , 'porcelana');
caneca.aumento (10);
console.log(caneca);
