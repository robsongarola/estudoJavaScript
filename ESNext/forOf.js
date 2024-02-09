// JÁ É UM FAÇO MUITO USADO O FOR/IN - PARA RETORNAR AS CHAVES DE UM ARRAY
// FOI INTRODUZIDO RECENTEMENTE O FOR / OF - ONDE SE PERCORRE UM ARRAY QUE RETORNA OS VALORES

for(letra of 'Garola'){

    console.log(letra)
}

// percorrendo uma matriz

const assunto=[
    ['map',{abortado:true}],
    ['Set',{abordado:true}],
    ['Promise',{abordado:false}]
]

for(let mat of assunto){

    console.log(mat)
}

// PODEMOS USAR OS MÉTODOS KEYS(), VALUE() E ENTRIES()
// USANDO A ESTRUTURA MAP

const jogos = new Map([
    ['Goias',{jogo1:'Perdeu'}],
    ['Famengo',{jogo1:'Ganhou'}],
    ['Santos',{jogo1:'Ganhou'}]
])

for(let times of jogos.keys()){

    console.log(times)
}

for(let times of jogos.values()){

    console.log(times)
}

for(let [ch,vl] of jogos.entries()){ // USANDO O DESTRUCT

    console.log(ch,vl)
}
