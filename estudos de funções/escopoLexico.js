// a função conhece o local onde ela lembra onde foi declarada, tudo que está dentro dela ou vizinhos, ou seja, ele busca no escopo global

// Assim como blocos e funções podem ser inseridos dentro de outros blocos ou funções, o mesmo vale para escopos. Se uma variável não puder ser encontrada no escopo imediato, o motor irá procurar por ela no escopo externo mais próximo. Essa busca irá continuar até que o escopo global seja alcançado. Se a variável não estiver no escopo global, um erro será emitido.

// O escopo léxico é baseado em variáveis ​​e blocos de escopo definidos, por você, no tempo de escrita do código.

const nome = 'Rayane';

function falar(){
    console.log(nome);
}
falar();

function sobrenome(){
    falar();
}

sobrenome();