// COMO CHAMAR VÁRIAS PROMISES E RETONAR QUANDO TODAS ESTIVEREM CUMPRIDA

function gerarNumerosEntre(min,max,tempo){
         if (min>max) [min,max]=[max,min]
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            let aleatorio = parseInt(Math.random()*(max-min+1)+min)
            resolve(aleatorio) 

        },tempo)

    })
}
// VAMOS INVOCAR A FUNÇÃO , PASSANDO DADOS DIVERSOS

function gerarNumeros(){

    return Promise.all([
        gerarNumerosEntre(1,60,4000),
        gerarNumerosEntre(1,60,1000),
        gerarNumerosEntre(1,60,500),
        gerarNumerosEntre(1,60,3000),
        gerarNumerosEntre(1,60,100),
        gerarNumerosEntre(1,60,1500)
    ])
}

gerarNumeros().then( numeros => console.log(numeros))