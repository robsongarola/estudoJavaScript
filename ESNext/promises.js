function falarDepoisDe(segundos,frase){
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{

            resolve(frase) // IMPORTANTE O RESOLVE SÓ ACEITA UM PARAMETRO (CASO QUEIRA RETORNAR + TEM QUE PASSAR
            // UM OBJETO)
        },segundos*1000)
    })
}

// INVOCANDO A FUNÇÃO QUE TEM A PROMISE

falarDepoisDe(3,"Que legal")
            .then( frase => frase.concat("!?!?"))
            .then( novaFrase => console.log(novaFrase))