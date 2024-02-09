// A ESTRUTURA MAP É BEM PARECIDA COM O OBJETO. SENDO A PRINCIPAL DIFERENÇA QUE A CHAVE PODE SER : FUNÇÃO
// OBJETO, STRING E BOLLEAN. E A FORMA DE ACESSÁ-LOS TAMBÉM É DIFERENTE

const diverso = new Map() ; // ISTANCIANDO A ESTRUTURA

diverso.set('123',function(){})
diverso.set('456',{bola:true})
console.log(diverso.get('456').bola)

//PASSANDO ELEMENTOS VARIADOS

const chavesVariadas= new Map([
    [function(){},'funcao'],
    [{},'Objeto'],
    [123,'numero']
])

chavesVariadas.forEach((vl,ch)=>{
    console.log(ch,vl)
    
})