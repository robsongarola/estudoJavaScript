const fs = require('fs');
const path = require('path');

function exibirConteudo(caminho){
    
    return new Promise ((resolve,reject)=>{
        
        fs.readFile(caminho,function(_,conteudo){
            resolve(conteudo.toString())
        })
    })
}

const caminho = path.join(__dirname, 'dados.txt')

exibirConteudo(caminho)
                .then( conteudo => conteudo.split('\n'))
                .then( linhas => linhas.join(','))
                .then( conteudo => `O valor final é : ${conteudo}`)
                .then(console.log)
                .catch( e => console.log(e.mensage))

