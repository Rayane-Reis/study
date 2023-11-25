// recursividade - é uma função que ela mesmo se chama de volta

function recursiva(max){
    if(max >= 10) return; // aqui definimos um limite para ela se chamar tipo while e para ter um fim você precisa incrementar, e o node tem um limite 
    max++;
    console.log(max);
    recursiva(max);

}

recursiva(0);