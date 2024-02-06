// PRIMEIRAMENTE VEREMOS AS PALAVRAS RESERVADAS CONST , LET E VAR

// VAR NÃO TEM ESCOPO DE BLOCO

{
    let a=5;
    var b=6;
    console.log(a) // SOMENTE DENTRO DO BLOCO QUE A VARIÁVEL A E VISTA

}
console.log(b)

//OPERADOR DESTRUCTION

const [l,e,...tras]='Garola' // USAMOS AQUI O OPERADOR REST (...TRAS) DESTRUTURANDO UMA STRING

console.log(l,e,tras)

// destruturando array

const [c,d]=[5,6];

console.log(c,d)

// DESTRUTURANDO UM OBJETO

const {idade:i,nome}={nome:'Garola',idade:54} // DESTRUTURANDO UM OBJETO E ATÉ TROCANDO O NOME DA PROPRIEDADE

console.log(i,nome)

