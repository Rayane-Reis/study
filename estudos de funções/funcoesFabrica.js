// factory functions são as funções que retornam objetos
// this sempre vai se referir á quem chamou 

// Quando uma função está dentro de um objeto chamamos ela de método

// ISSO É UMA FACTORY FUNCTIONS (FUNÇÃO DE FÁBRICA)
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,

        // GET -> GETTER USAMOS SOMENTE PARA OBTER  O VALOR, ENTÃO AO CHAMAR O IMC NÃO SERÁ UMA FUNÇÃO 

        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        // Setter 

        set nomeCompleto(valor) { // ele vai setar o valor 
            valor = valor.split(' '); // o slipt vai separar por espaço
            this.nome = valor.shift(); // o shift remove do inicio mas ele retorna o valor 
            this.sobrenome = valor.join(' '); // o join junta e separa pelo espaço  
            console.log(valor);
        },
        fala: function (assunto) { // método exemplo
            return `${this.nome} está falando ${assunto}`
        },
        altura,
        peso,
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('lUIZ', 'Otavio', 1.8, 80);
p1.nomeCompleto = 'Rayane Reis';
console.log(p1.nomeCompleto);
// console.log(p1.fala('de teen wolf'));

// ISSO É UMA CONSTRUCTOR FUNCTION (FUNÇÃO CONSTRUTORA)




