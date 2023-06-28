// Enum

// Enum é um tipo que não existe em JavaScript, 
// existe em outras linguagem como python, C#, Java

// É uma estrutura de dados não ordenada
// geralmente é usado quando temos mais de uma opção 

enum Cores {
    VERMELHO,
    ROXO,
    AMARELO
}   

console.log(Cores)
console.log(Cores.AMARELO) // 2
console.log(Cores.ROXO) // 1
console.log(Cores.VERMELHO) // 0

console.log('') // espaço no console


// Quando criamos um enem de string 
// ele tambem cria um enum de numbers 

enum Cores2 {
    RED, 
    PURPLE,
    YELLOW,
}

console.log(Cores2)
console.log(Cores2[0]) // RED
console.log(Cores2[0]) // PURPLE
console.log(Cores2[0]) // YELLOW


// Podemos declarar para o enum uma ordem/sequencia

enum Cores3 {
    "AMARELO DEV",
    VERDE,
   "AZUL TURQUESA",         
}