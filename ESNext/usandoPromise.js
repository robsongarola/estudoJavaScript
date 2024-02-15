// COM PROMISE...
const http= require('http'); // IMPORTANDO DA BIBLIOTECA NODE O MODULO 'HTTP'

const getTurma= letra => {
 const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json` /*QUANDO EU PASSAR A LETRA, EM CADA CHAMA
 DA DA FUNÇÃO, PASSAREIA LETRA PARA COMPOR A URL*/

 return new Promise((resolve,reject)=>{

    http.get(url,res=>{

        let informacao='';
        res.on('data',dado =>{

            informacao+=dado
        } )

        res.on('end',()=>{

            try{
                
                resolve(JSON.parse(informacao))
            }catch(e){

                reject(e)
            }
        })
    })

 }) 


}

let nomes=[]
getTurma("A")
    .then(alunos => { nomes = nomes.concat(alunos.map( a => a.nome)) 
getTurma("B")
    .then(alunos => { nomes = nomes.concat(alunos.map( a => a.nome)) 
getTurma("C")
    .then(alunos => { nomes = nomes.concat(alunos.map( a => a.nome)) 
      console.log(nomes)    
})
})
})

// UMA FORMA AINDA MAIS ORGANIZADA

Promise.all([getTurma('A'),getTurma('B'),getTurma('C')])
          .then(turmas => [].concat(...turmas))
          .then(alunos => alunos.map( a => a.nome))
          .then( alunos=>console.log(alunos))
