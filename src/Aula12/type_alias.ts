// Type Alias

// -> Cria apelidos para qualquer tipo
// -> Cria nome para um tipo 
// ex:

type Idade = number;
type People = {
    name: string,
    idade: Idade,
    salario: number,
    corPreferida?: string
}

// Qualquer objeto que for do tipo pessoa terá os seguinte elementos

// name: string,
// idade: Idade === number,

type CorRGB = 'Vermelho' | 'Verde' | 'Azul'
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto'

type CorPreferida = CorRGB | CorCMYK;

// Para que o tipo seja inserido no meu objeto basta colocar
// na frente do nome da const|let os ":" com o nome do tipo 
// que voce crio, ex: 

// em TS quando quisermos separa um numero grande podemos usar o "_"
const people: People = {
    name: 'Maria',
    idade: idade,
    salario: 200_000_000 // 200000000
}

export function setCorPreferida(people: People, cor: CorPreferida): People {
    return { ...people, corPreferida: cor }
}

console.log(setCorPreferida(people, 'Ciano'))
console.log(setCorPreferida(people, 'Azul'))
console.log(setCorPreferida(people, 'Vermelho'))
console.log(setCorPreferida(people, 'Preto'))
console.log(people);