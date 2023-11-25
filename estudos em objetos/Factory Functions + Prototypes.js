const falar = {
    falar(){
        console.log(`${this.nome} está falando oi`)
    }
};

const beber = {
    beber(){
        console.log(`${this.nome} está bebendo`)
    }
};

const comer ={
    comer(){
        console.log(`${this.nome} está comendo`)
    },
};

const pessoaPrototype = Object.assign({}, falar, comer, beber);

function criaPessoa(nome,sobrenome){

   // uma vantagem no factory function é que podemos já passar os valores e configurá-los ao lincar em uma outra função, veja abaixo
   return Object.create(pessoaPrototype,{
    nome: { // podemos configurar a chave aqui
        value: nome
    },
    sobrenome:{
        value: sobrenome
    }
   });
}


//Factory Function não tem new
const p1 = criaPessoa('Rayane', 'Reis');
const p2 = criaPessoa('Programadora', 'Linda');

p1.falar();
p1.comer();
p1.beber(); 

p2.falar();
p2.comer();
p2.beber();