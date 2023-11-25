function retornaFuncao(){
    const nome = 'Ray';
    return function (){
        return nome;
    };
}

const funcao = retornaFuncao();
console.dir(funcao);

// é quando uma função é capaz de "lembrar" e acessar seu escopo léxico mesmo quando ela está sendo realizada fora de seu escopo léxico.

// Closure é uma forma de fazer com que as variáveis ​​dentro de uma função sejam privado e persistentes. 