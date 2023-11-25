function funcao(){
 console.log(arguments[0]); // você pode pegar por indice tbm
}
funcao('valor'); // nesse caso como não passamos um parametro, esse valor mandado ficará nos arguments que não ficará visivel, mas executará normalmente, mas isso funciona somente com a palavra function, NÃO FUNCIONA COM ARROW FUNCTION

// com parametro

function soma (a,b){
    console.log(a + b);
}
soma (1,2,4); // nesse caso ele não irá utilizar o numero quartro, porém ele está nos arguments

// ao iniciar uma variavel sem valor, ele apenas devolverá undefined, mas você pode na própria função definir um valor padrão para caso não seja declarado ex: 

function soma (a = 2,b = 5,c = 2){
    console.log(a + b + c);
}
soma (1,4); // como não dei o terceiro valor ele assumirá o valor padrão

// mas e se eu quiser deixar o valor padrão de b, para isso é necessário colocar undefined que o sitema entende que você quer que o valor seja o que está padrão, se deixar vazio ele não funciona,pois concatena ou dá um erro logo o correto é fazer :

soma (1,undefined,3);

// para pegar o resto do arguments usamos ... e deve ser sempre o ultimo pois é o resto



