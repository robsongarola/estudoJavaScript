// SEM PROMISE...
const http= require('http'); // IMPORTANDO DA BIBLIOTECA NODE O MODULO 'HTTP'

const getTurma= (letra,callback) => {
 const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json` /*QUANDO EU PASSAR A LETRA, EM CADA CHAMA
 DA DA FUNÇÃO, PASSAREIA LETRA PARA COMPOR A URL*/
 
// FAZENDO A REQUISIÇÃO

http.get(url,res=>{

    let resultado = '';

    res.on('data',dados =>{ // MONITORANDO O ENVENTO ON/DATA

        resultado+=dados
    })

    res.on('end',()=>{ // MONITORANDO O EVENTI ON/END

        callback(JSON.parse(resultado))
    })
})
}

let nomes =[]

getTurma('A', alunos =>{
    nomes = nomes.concat( alunos.map( a => `A : ${ a.nome}`))
    getTurma('B', alunos =>{
        nomes = nomes.concat( alunos.map( a => `B: ${ a.nome}`))
        getTurma('C',alunos =>{
            nomes = nomes.concat( alunos.map( a => `C: ${ a.nome}`))
            console.log(nomes)
        })
    })
})


