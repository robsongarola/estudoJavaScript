// JÁ VIMOS O OPERADOR REST (JUNTAR) NO CONTEXTO DE FUNÇÃO
// VAMOS VER AGORA O SPREED CONTEXTO DE OBJETO E ARRAY


const funcionario ={nome:'Maria', salario:12350.49}
const clone={status:"Ativo",...funcionario} // NESSE CONTEXTO ESTAMOS ESPALHANDO AS PROPRIEDADES DE UM 
//OBJETO DENTRO DO OUTRO

console.log(clone)

// NO CONTEXTO DE ARRAY

const grupoA =['Carlos',"Cintia",'Gustavo','Joao'];

const grupoB = ["Tatiana","Paulo",...grupoA,'Salomão']

console.log(grupoB)