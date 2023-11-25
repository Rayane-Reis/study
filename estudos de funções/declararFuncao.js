// Declaração de função


oi(); // testando o hoisting

function oi(){
    console.log(`olá programadora linda`)

    // desse modo de declarar a função ocorre o function hoisting, ou seja, podemos chama-lá mesmo antes de chamar pois essa função é levada para o topo e pode ser chamada em qualquer lugar do código
}

// Firts-class objects (Objetos de primeira classe), ou seja, a função pode ser tratada em js ou em outras linguagens de programação como um dado, ou seja podemos  coloca - lá em uma variavel veja o exemplo, passar como parametro para uma outra função 

// uma constante recebe uma função como um dado
const dado = function(){
    console.log(`sou um dado`);
};

dado();

// nesse caso é bom que podemos receber uma função como um parâmetro
function executar(funcao){
    console.log(`executando a baixo...`);
    funcao();
}
executar(dado); // o parametro é passado com o  nome da constante que recebe a function 

//Arrow function 

const arrow = () => {
    console.log(`sou uma arrow function`)
};

arrow();

// dentro de um objeto podemos ter uma função 

const eu = {
    falar: function(){
        console.log(`estou falando`);
    }
};

eu.falar(); // executando

// função anonima 

setInterval (function(){

}, 1000)

