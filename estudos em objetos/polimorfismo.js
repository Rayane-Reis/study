// métodos se comportarem de maneiras diferentes em classes filhas de um mesmo pai se caracterizam em polimorfismo
// classe = função construtora

function Conta (agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function (valor){
    if (valor > this.saldo ){
        console.log(`Saldo insuficiente: ${this.saldo}`)

        return;
    }

    this.saldo -= valor;
    this.VerSaldo();
};
Conta.prototype.depositar = function (valor){
    this.saldo += valor;
    this.VerSaldo();
};
Conta.prototype.VerSaldo = function (valor){
    console.log(`Ag/c: ${this.agencia}/${this.conta} Saldo: ${this.saldo.toFixed(2)}`)
};

const c1 = new Conta (11, 22, 10);
c1.depositar(10);
c1.sacar(20);
c1.VerSaldo();
console.log(c1);

// especializar, podemos sobrescrever o método sacar ter um limite para determinada conta 

function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo, );
    this.limite = limite;
}
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

// polimorfismo, ou seja copiar a mesma função com comportamento diferente

ContaCorrente.prototype.sacar = function (valor){
    if (valor > (this.saldo + this.limite) ){
        console.log(`Saldo insuficiente: ${this.saldo}`)

        return;
    }

    this.saldo -= valor;
    this.VerSaldo();
};

const conta1 = new ContaCorrente (11, 22, 0, 100);
conta1.depositar(10);
conta1.sacar(110);
conta1.sacar(1);

console.log(`ESPAÇOOOO`)


function Contapoupança(agencia, conta, saldo, ){
    Conta.call(this, agencia, conta, saldo, );
  
}
Contapoupança.prototype = Object.create(Conta.prototype);
Contapoupança.prototype.constructor = Contapoupança;

const conta2 = new Contapoupança (12, 33, 0);
conta2.depositar(10);
conta2.sacar(110);
conta2.sacar(1);
