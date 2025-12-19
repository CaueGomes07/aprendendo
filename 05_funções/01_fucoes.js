// Funções em JavaScript são blocos de código projetados para executar uma tarefa específica.
// Elas podem receber entradas, chamadas de parâmetros, e podem retornar um valor.

// Declaração de função
function saudacao(nome) {
    console.log(`Olá, ${nome}!`);
}

saudacao('João'); // Chamada da função
saudacao('Ana'); 

// Função com retorno de valor
function soma(a, b) {
    return a + b;
}
const resultado = soma(5, 3);
console.log(`A soma é: ${resultado}`);

// Função anônima atribuída a uma variável
const multiplicacao = function(x, y) {
    return x * y;
};
console.log(`A multiplicação é: ${multiplicacao(4, 6)}`);

function printText(text) {
    console.log(text);
};
printText('Funções são essenciais em JavaScript!');

// Exemplo de função com parâmetro padrão
function potencia(base, expoente = 2) { // expoente padrão é 2 caso não seja fornecido
    // parametros com valor padrão devem ser os últimos na lista de parâmetros, se inverter a ordem, o JS não saberá qual valor atribuir.
    return base ** expoente;
}
printText(`2 elevado ao quadrado é: ${potencia(2)}`);
printText(`3 elevado ao cubo é: ${potencia(3, 3)}`);
