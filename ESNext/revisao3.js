// ESNext 5 foi introduzido duas novos métodos para o Objeto (Object.value()  e Object.entries())

const obj1= {a:1,b:2,c:3}

// JÁ TIAMOS O Object.keys() que retorna a chave do Objeto

console.log(Object.keys(obj1)) // RETORNA UM ARRAY DE CHAVES

// OBJECT.VALUES()

console.log(Object.values(obj1)) // RETORNA UM ARRAY DE VALORES

// OBJECT.ENTRIES()

console.log(Object.entries(obj1)) // RETORNA UMA MATRIZ DE [CHAVE , VALOR]


// VEIO TAMBÉM A NOTAÇÃO DE CLASS (QUE NO FUNDO E UMA FUNÇÃO ONDE PREVALESSE A HERANCA POR PROTÓTIPO)

class Animal {}

class Cachorro extends Animal {

    falar(){
        return 'Au AU'
    }
}

// INSTANCIANDO A CLASSE COMO SE FARIA COM UMA FUNÇÃO CONSTRUTORA

console.log( new Cachorro().falar())