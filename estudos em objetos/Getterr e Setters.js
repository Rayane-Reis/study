// usando defineProperty
// usando Getter e Setters

// Getter e Setters seria fazer um método da função simular que é uma propriedade, mas além disso seria proteger a minha propriedade

// Getter -> obter o valor 
// Setter -> para setar o valor, configurar 


function Produto(nome,preco,estoque){
    this.nome = nome;
    this.preco = preco;

    // cuidado ao usar o this na propriedade que você for usar no setter para não gerar um loop, se quiser coloca ele em uma variavel privada

    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a chave primaria 
        configurable: false,
        get: function(){
            return estoquePrivado; // configurando o value, retornar o valor 
        },
        set: function(valor){

            // verificando o typeoF do valor

            if(typeof valor !== 'number'){
                console.log('Bad value');
                return; // protegendo a variavel estoque para só ser alterada quando mandar um numero 

                // se quiser mandar um erro basta:
                // throw new TypeError('String not permission');
            }
            estoquePrivado = valor;
             
        }
    });
}

const p1 = new Produto('camiseta', 20, 3);
p1.estoque = '500'; // -> o valor que eu utilizei com o sinal de atribuição vai ser passado no valor do setter
// console.log(p1.estoque);

// function factory

function criaProduto(nome){
    return{
        get nome (){
            return nome;
        },
        set nome (valor){

            // trocando a palavra 'produto' por nada
            valor = valor.replace('produto', '');
            
            nome = valor;
        }
    };
}
const person = criaProduto('rayane');

person.nome = 'setando o  produto';
console.log(person.nome);

