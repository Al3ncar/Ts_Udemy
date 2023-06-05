const objectA:{

    chaveA: string; // Estamos tipando os elementos que estão no objectA
    chaveB: string; // Estamos tipando os elementos que estão no objectA
    chaveC?:string; // Estamos tipando os elementos que estão no objectA
    [key: string]: unknown // melhor maneira de adicionar elementos em um objeto

} = {

    chaveA: 'chave A', // Declarando valores nos elementos
    chaveB: 'chave B' // Declarando valores nos elementos

};


// não podemos mudar os items de um objeto, podemos manipula-los, como:

    objectA.chaveA = 'Outra chave A'; // Redeclarando os valores dos elementos
    objectA.chaveB = 'Outra chave B'; // Redeclarando os valores dos elementos
    objectA.chaveC = 'Outra chave C'; // Redeclarando os valores dos elementos
    objectA.chaveD = 'chave D'; 

