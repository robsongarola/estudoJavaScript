// TRATAMENTO DE ERRO

function erroOuNao(valor,chanceDeErro){

    return new Promise((resolve,reject)=>{

        if(Math.random() < chanceDeErro){

            reject('Houve um erro')
        }else{

            resolve(`não houve um erro : ${valor}`)
        }
    })
}

erroOuNao(5,0.54)
        .then( valor => console.log(valor))
        .catch( err => console.log( `Houve um erro : ${err}`))