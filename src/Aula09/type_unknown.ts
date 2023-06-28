// Tipo unknown

// Unknown é o pai de todos os tipos, ele veio primeiro do que os demias
// unknown é bem mais seguro do que o enum

let x: unknown;

x = 100; // number
x = 50; // number
x = '100'; // string
x = 'Olá'; // string
x = 1; // number

let y = 100;

// console.log(x + y) // essa linha não será executa, ela recebe não só numbers 
// porem se criarmos uma condição ela executa

if(typeof x === 'number') console.log(x + y);
