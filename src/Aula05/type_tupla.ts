// Type tuple:

// É um tipo restrito ao typeScript
// Os tipos de tupla permitem que você expresse uma matriz
// com um número fixo de elementos cujos tipos são conhecidos,
// mas não precisam ser os mesmos.

const dadosCliente1: [number, string] = [ 1 , 'Setadoido'];
console.log(dadosCliente1);


const dadosCliente2: [number, string, string] = [1, 'NOME', 'SOBRENOME'];
console.log(dadosCliente2);


const dadosCliente3: [number, string, string?] = [1, 'NOME'];
console.log(dadosCliente3);


const dadosCliente4: [number, string, ...string[]] = [1, 'NOME'];
console.log(dadosCliente4);


console.log(''); // espaço no console

// podemos mudar o valor do elemento do array,
// porem deve seguir o mesmo tipo que foi declaro em sua raiz;

dadosCliente1[0] = 5; // type number
dadosCliente1[1] = 'Se ta doido'; // type string
console.log(dadosCliente1);


dadosCliente2[0] = 100; // type number
dadosCliente2[1] = 'Igor'; // type string
dadosCliente2[2] = 'Alencar'; // type string
console.log(dadosCliente2);


dadosCliente3[2] = "Megan"; // declaração opcional
console.log(dadosCliente3);


// devido a ...string[] podemos adicionar diversões elementos dentro desse array, sempre usando o  indice
dadosCliente4[2] = 'Lu';
dadosCliente4[3] = 'Maikon';
dadosCliente4[4] = 'Ester';
dadosCliente4[5] = 'Vitoria';
