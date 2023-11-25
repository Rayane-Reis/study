// IIFE -> IMEDIATELY INVOKED FUNCTION EXPRESSION

// SUA FUNÇÃO NÃO TEM NOME, POIS A FUNÇÃO É INVOCADA, É TAMBÉM ELA NÃO FICARÁ NO ESCOPO GLOBAL E SERÁ CHAMADA, LOGO EM SEGUIDA PARA ISSO TEMOS QUE ENVOLVE-LA EM UM () e fora dos parenteses coloca mais um () para chama-lá VEJA A SEGUIR: 

(function (){
    console.log(`programadora linda`);

    // podemos agir normalmente  dentro dese escopo que ele estará protegido do escopo global 


})(); // esse parentese vazio chama a função imediatamente e nada disso toca o escopo global, sua função fica protegida 