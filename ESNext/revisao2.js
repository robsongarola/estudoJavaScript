// FUNCTION ARROW

const soma = (a,b)=> a+b;

console.log(soma(5,6)) // A FUNCTION ARROW É SEMPRE ANÔNIMA

// A FUNÇÃO ARROW POSSUI O 'THIS' LÉXICO (SEMPRE VAI APONTAR A ONDE FOI CRIADA)

const lexico = ()=> console.log(this === exports)
console.log(lexico())
const lexixo2 = lexico.bind({}) // FORÇANDO A MUDANÇA DO THIS (NÃO VAI FUNCIONAR)
console.log(lexixo2()) // CONTINUA APONTADO PARA EXPORTS

// PARAMETROS DEFAULT

function log(texto='Node'){

    console.log(texto)
}

log() // NÃO PASSANDO PARAMETRO A FUNÇÃO USARÁ O DEFAULT
log('Sou mais Forte') // USARÁ O PARAMETRO PASSADO

// OPERADOR REST (AGRUPAR), NESSE CONTEXTO

function total(...numeros){ // O OPERADOR REST CRIA UM ARRAY DE ELEMENTOS
    let total = 0;
    numeros.forEach( n => total+=n) // NESSE CASO PERCORREMOS E SOMAMOS

    return total
}
console.log(total(2,3,4,5))


