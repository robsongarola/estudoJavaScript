// PRIMEIRAMENTE ASYNC/AWAIT ESTÁ DIRETAMENTE LIGADO A PROMISE. ELE TRABALHA COM FUNÇÕES ASSINCRONAS
// PARECENDO QUE O CÓDIGO E SINCRONO


function falarDepoisDe(segundos){
    return new Promise(resolve=> setTimeout(()=> resolve(10) ,segundos))
}

// NECESSARIAMENTE A PALAVRA RESERVADA ASYNC TRABALHA MARCANDO UMA FUNÇÃO SINCRONA

async function chamarFuncao(){
    
    let valor = await falarDepoisDe(100)
    await falarDepoisDe(1500)
    console.log(`Async/ Await ${valor+1}...` )
    await falarDepoisDe(1500)
    console.log(`Async/ Await ${valor+2}` )
    await falarDepoisDe(1500)
    console.log(`Async/ Await ${valor+3}` )

    return valor+3 //(se quiser retornar o valor puramente, sem o assincronimos da promise tem que usar o then)
}

chamarFuncao().then(console.log) // SAINDO DO ASSINCRONISMO