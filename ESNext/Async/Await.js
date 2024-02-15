// USANDO ASYNC/AWAIT
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
// RECURSO DO ES8
// TENDO O OBJETIVO DE SIMPLIFICAR O USO DE PROMISES...

/*PRIMEIRAMENTE CRIAREMOS UMA FUNÇÃO QUE MARCAREMOS COM ASYNC*/

const obterTurma = async () => {

    const TA = await getTurma('A');
    const TB = await getTurma('B');
    const TC = await getTurma('C');

    return [].concat(TA,TB,TC)

} // RETORNA UM OBJETO ASYNCFUNCTION

obterTurma()
        .then( alunos => alunos.map( aluno => aluno.nome))
        .then( nomes => console.log(nomes))