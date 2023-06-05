const objectA:{

    chaveA: string; // Estamos tipando os elementos que estão no objectA
    chaveB: string; // Estamos tipando os elementos que estão no objectA
    chaveC?:string; // Estamos tipando os elementos que estão no objectA
    readonly chaveD: string; // Esse elemento apenas para leitura
    [key: string]: unknown // melhor maneira de adicionar elementos em um objeto

} = {

    chaveA: 'chave A', // Declarando valores nos elementos
    chaveB: 'chave B', // Declarando valores nos elementos
    chaveC: 'chave C', // Declaração opcional
    chaveD: 'chave D' // Esse elemento não pode ser mudado

};


console.log(objectA);

// não podemos mudar os items de um objeto, podemos manipula-los, como:

    objectA.chaveA = 'Outra chave A'; // Redeclarando os valores dos elementos
    objectA.chaveB = 'Outra chave B'; // Redeclarando os valores dos elementos
    objectA.chaveC = 'Outra chave C'; // Redeclarando os valores dos elementos
    objectA.chaveE = 'nova chave: chave E'; // Adcionando novos elementos no objeto

    console.log(objectA);
