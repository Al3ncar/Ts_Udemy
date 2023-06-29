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
console.log(Cores2[1]) // PURPLE
console.log(Cores2[2]) // YELLOW

console.log('') // espaço no console
console.log('') // espaço no console


// Podemos declarar para o enum uma ordem/sequencia 

enum Cores3 {
    "AMARELO DEV" = 5,// A sequencia ira começar com o numero 5
    VERDE,
   "AZUL TURQUESA",         
}

console.log(Cores3)
console.log(Cores3[5]) // AMARELO DEV
console.log(Cores3[6]) // VERDE
console.log(Cores3[7]) // AZUL TURQUESA


console.log('') // espaço no console
console.log('') // espaço no console


// Outro exemplo de ordem

enum Cores4 {
    CINZA = 10,
    MARRON = 100,
    LARANJA = 200,  
}

console.log(Cores4)
console.log(Cores4[10]) // AMARELO DEV
console.log(Cores4[100]) // VERDE
console.log(Cores4[200]) // AZUL TURQUESA


console.log('') // espaço no console
console.log('') // espaço no console


// Exemplo de desordem 

enum Cores5 {
    LARANJA = 10,
    DOURADO = 100,
    PRATA = 200,
    PRETO = 'PRETO',
    // AMARELO, // executa um erro por não saber qual a proxima sequencia
}

console.log(Cores5)
console.log(Cores5[10])
console.log(Cores5[100])
console.log(Cores5[200])
console.log(Cores5.PRETO)


console.log('') // espaço no console
console.log('') // espaço no console


// Arrumando a ordem 
// Para eu poder arrumar essa ordem devemos fazer desse modo

enum Cores6 {
    LARANJA = 10,
    DOURADO = 100,
    PRATA = 200,
    PRETO = 'PRETO',
    AMARELO = 300, // executa um erro por não saber qual a proxima sequencia
    BRANCO, 
}

console.log(Cores6.PRETO)
console.log(Cores6[300])
console.log(Cores6.BRANCO)

console.log('') // espaço no console
console.log('') // espaço no console


// Unificação do enum

// Podemos unir ambos enum's 

enum Cores7{
    VERMELHO = 10,
    ROSA = 100,
    LILAS = 200,
}

enum Cores7{
    AQUA = 'AQUA',
    VIOLETA = 201,
    CHUMBO,
}

console.log(Cores7) 


console.log('') // espaço no console
console.log('') // espaço no console


// Enum em functtions

enum Cores8{
    AQUA,
    VIOLETA,
    CHUMBO,
    LARANJA,
    DOURADO,
    PRATA,
    PRETO,
    AMARELO, 
    BRANCO, 
}

function escolhaACor(cor: Cores8): void{
    console.log(Cores8[cor])
} 

escolhaACor(Cores8.LARANJA)
escolhaACor(Cores8.PRATA)
escolhaACor(Cores8.AMARELO)
escolhaACor(Cores8.AQUA)
escolhaACor(Cores8.BRANCO)