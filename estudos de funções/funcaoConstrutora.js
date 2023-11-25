//  função construtora -> cria objetos
//  precisa iniciar com letra maiuscula  e utilizamos a palavra (NEW) para criar um novo objeto vazio, faz o this apontar para esse objeto e nos retorna esse objeto

function Pessoa (nome,sobrenome){

    //atributos ou métodos privados 
    const ID = 123;
    const metodoInterno = function (){};

   //atributos ou métodos públicos 
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo  = function() {
        console.log(this.nome + ': sou um método')
    };
}

const p1 = new Pessoa ('Rayane', 'Reis');
console.log(p1);
     
     

//função fábrica -> cria objetos