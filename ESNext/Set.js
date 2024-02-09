// IMPORTANTE DA ESTRUTURA SET : NÃO ACEITA REPETIÇÃO E NÃO É INDEXADA

const times = new Set();

times.add('Vasco')
//PODEMOS INCADEAR CHAMADAS

times.add('Flamengo').add('Corinthias').add('Goias')

console.log(times)

// PODEMOS DELETAR

times.delete('Vasco')

console.log(times.has('Vasco'))

// PODEMOS ADICIONAR VARIOS ELEMENTOS COMO UMA ARRAY


const nomes=['Carlos', 'Gloria' , 'Fabiola', 'Joao']

const nomesDiversos = new Set(nomes)

console.log (nomesDiversos)

console.log(nomesDiversos.size)