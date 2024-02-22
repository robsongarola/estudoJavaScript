// PRIMEIRAMENTE ASYNC/AWAIT ESTÁ DIRETAMENTE LIGADO A PROMISE. ELE TRABALHA COM FUNÇÕES ASSINCRONAS
// PARECENDO QUE O CÓDIGO E SINCRONO


function falarDepoisDe(segundos){
    return new Promise(resolve=> setTimeout(()=> resolve() ,segundos))
}

// NECESSARIAMENTE A PALAVRA RESERVADA ASYNC TRABALHA MARCANDO UMA FUNÇÃO SINCRONA

async function chamarFuncao(){

    await falarDepoisDe(1500)
    console.log(`Async/ Await 1...` )
    await falarDepoisDe(1500)
    console.log(`Async/ Await 2....` )
    await falarDepoisDe(1500)
    console.log(`Async/ Await 3....` )
}

chamarFuncao()