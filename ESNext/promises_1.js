// O CONCEITO DE PROMISE É UM OBJETO QUE RETORNA UMA "PROMESSA" E RETORNANDO ESSE RESULTADO E RETORNADO UMA CADEIA DE RESULTADO

const nomes =['Maria',"Carla",'Paulo','Joao']

const p = function (nomes){

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{

            resolve(nomes)
        },3000)
    })
}
//Invocando a promise

p(nomes)
    .then( nomes => nomes[0])// recebendo o valor da promessa e executando uma ação
    .then( nome => nome[1]) // recebendo o valor da primeira ação e aplicando outra ação
    .then( string => string.toLowerCase()) // recebendo o resultado da ação anterior e executando outra acao
    .then(console.log)