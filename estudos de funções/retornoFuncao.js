// return - retorna um valor e logo encerrra a função

function criarPessoa(nome,sobrenome){
    return {nome, sobrenome };
}
const p1 = criarPessoa ('Ray', 'Reis');
console.log(p1);

// podemos retornar tudo, umma função, um objeto, um array etc...