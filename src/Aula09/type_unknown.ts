// Tipo unknown

// Unknown é o pai de todos os tipos, ele veio primeiro do que os demias
// unknown é bem mais seguro do que o any

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

// unknown é um any mais seguro
// ele vai te forçar a fazer a checagem dos tipos,
// antes de excutar qualquer operção.

// Sempre que voce precisa receber alguma coisa
// que voce não sabe com antecendencia o que aquela coisa vai ser
// inves de usar any use unknown  