// ela tem um recurso de quase parar o código em determinado local

//yield é parecido com return sempre que chamar o .next retorna o primeiro valor, porém ele não termina a function

function* geradora1(){
    yield 'valor 1';
}


const g1 = geradora1();
console.log(g1.next());
console.log(g1.next().value); // aqui ele me retorna exatamente o valor 