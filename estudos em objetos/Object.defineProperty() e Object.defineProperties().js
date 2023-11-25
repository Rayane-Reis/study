// defineProperty -> definir uma propriedade de vez

// defineProperties -> mais de uma propriedade

// essas propriedades é para travar o objeto para não manipular mais é muito parecido com a função freezer 

// função construtora que cria um produto

// usando defineProperty

function Produto(nome,preco,estoque){
    this.nome = nome;
    this.preco = preco;
    // this.estoque = estoque;

    // no this é em qual objeto quero mexer e após a virgula é qual propriedade eu quero trabalhar 


    // fazer com que a propriedade estoque seja exibido
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a chave primaria quando utilizar o for in ou object.keys 
        value: estoque, // para o valor não ficar undefined 
        writable: false, // o valor não pode ser alterado e será travado, agora se for true o valor poderá ser alterado
        configurable: false // pode redefinir as configurações novamente da chave, se tiver false não permite apagar ou redefinir a variavel
    })
}

const p1 = new Produto('camiseta', 20, 3);
console.log(p1);
console.log(Object.keys(p1)); // aqui é o resultado do enumerable

for (let chave in p1){
    console.log(chave); // aqui é o resultado do enumerable com for in 
};

// defineProperties

function Produto2(nome,preco,estoque){
   
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a chave primaria quando utilizar o for in ou object.keys 
        value: estoque, // para o valor não ficar undefined 
        writable: false, // o valor não pode ser alterado e será travado, agora se for true o valor poderá ser alterado
        configurable: false // pode redefinir as configurações novamente da chave, se tiver false não permite apagar ou redefinir a variavel
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: false,
            configurable: false
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: false,
            configurable: false
        },
        estoque: {
            enumerable: true,
            value: estoque,
            writable: false,
            configurable: false
        },
    })
}

const p2 = new Produto2('camiseta', 20, 3);
console.log(Object.keys(p2)); // aqui é o resultado do enumerable

for (let chave in p2){
    console.log(chave); // aqui é o resultado do enumerable com for in 
};