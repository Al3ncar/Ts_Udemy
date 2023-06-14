let x;
if(typeof x === 'undefined') x = 20;
console.log(x * 2);

export function createPerson (
    // Declarando parametro
        firstName: string,
        lastName?: string, // parametro opcional ( string / undefined )
):{
    // Declarando retorno de tipo
        firstName: string,
        lastName?: string, // parametro opcional ( string / undefined )
} {
    // Declarando retorno da função
    return {
        firstName,
        lastName
    }
};

// Quando o '?' é atribuido a uma tipo deixamos ele opcional

export function squareOf(x: any){
    if(typeof x === 'number') return x * x;
    return null
};

const squareOfNumber = squareOf(2);
const squareOfString = squareOf("2");

if(squareOfNumber === null){
    console.log('Operação invalida');
} else {
    console.log(squareOfNumber)
}
