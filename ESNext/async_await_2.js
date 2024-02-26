function gerarNumerosEntre(min,max,numerosProibidos){
    if (min>max) [min,max]=[max,min]
return new Promise((resolve,reject)=>{

   setTimeout(()=>{
       let aleatorio = parseInt(Math.random()*(max-min+1)+min)
       
       if(numerosProibidos.includes(aleatorio)){ /* SE ACEITAR (POR QUE HÁ OS NÚMEROS ANTERIORMENTES)*/

         reject('Números Proibidos')
       }else {

        resolve(aleatorio) 
       }

   },100)

})
}

// USANDO O TRATAMENTO DE ERRO COM ASYNC/AWAIT

async function gerarMegaSena(qtdeNumeros, tentativas=1){
   
    try{

        const numeros =[];
    
        for( let _ of Array(qtdeNumeros).fill()){ // O MÉTODO .FILL() IRÁ GERAR , UMA QUANTIDADE ALEATÓRIO DE NÚMEROS
    
            numeros.push( await gerarNumerosEntre(1,60,numeros)) // O AWAIT TEM QUE ESTÁ LIGADO A FUNC QUE RETORNA PROMISE
    
        }
        return numeros

    } catch(e){

        if(tentativas > 10){

            throw "Quantidade de tentativas em exesso"
        }else{

            gerarMegaSena(qtdeNumeros, tentativas+1)
        }

         
    }
}

gerarMegaSena(15)
        .then(console.log)
        .catch(console.log)