// Union Type

// Union type pode ser utilizado quando, 
// voce quiser mais de um tipo em uma 
// função | paremetro | varialvel e etc.

// quando tiver mais de um tipo,
// podemos usar o " | " para separar os tipo
// representação lógica: | ==> "OU" 

//  number | string | boolean
// number OU string OU boolean // REPRESENTAÇÃO LÓGICA

// exemplo/sintaxe:

function addOrConcat(
    x: number | string | boolean,
    y: number | string | boolean,
): number | string {
    if(typeof x === 'number' && typeof y === 'number') return x + y;
    return `${x} ${y}`
}

console.log(addOrConcat(10, 90)); // soma
console.log(addOrConcat("10", "90")); // 10 90
console.log(addOrConcat("10", 90)); // 10 90
console.log(addOrConcat(10, "90")); // 10 90
console.log(addOrConcat(true, false)); // true false

// Melhor exemplo de union Type:

type CorRGB = 'Vermelho' | 'Verde' | 'Azul'  
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto'

type CorPreferida = CorRGB | CorCMYK;